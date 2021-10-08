// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const getMetaData = require("metadata-scraper");      //imports the metadata-scrapper package
const { PrismaClient } = require("@prisma/client");  //imports Prisma client to Route

const prisma = new PrismaClient();     //instantiates the Prima Client


// API Route
export default async function handler(req, res) {

  // Desctruction of the request object
  const { query } = req;
  const url = query.url;


 // Checks if url metadata is cached in the database
  const datainfo = await prisma.webPreview.findUnique({
    where: {
      url: url,
    },
  });
  
  
  if (!datainfo) {

    //passes the request url to the getMetaData function
    const data = await getMetaData(url);

    //destruct the data object from the response
    const { title, icon, description } = data;

    // saves url metadata in the database
    const datasaved = await prisma.webPreview.create({
      data: {
        url: url,
        title: title,
        favicon: icon,
        //if description is present saves in database if not saves a string
        description: description !== null ? "" : description,
      },
    });

     //If database cache is sucessful response with data object if not response with Database error
    !datasaved
      ? res.status(500).send("Database Error")
      : res.status(200).send({ title: title, favicon: icon, description: description });
  } else {

    //If url metadata is already cached in database then it sends the cached data as response object
    const { title, favicon, description } = datainfo;

    res.status(200).send({
      title: title,
      favicon: favicon,
      description: description,
    });
  }
}
