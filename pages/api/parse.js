// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const getMetaData = require("metadata-scraper");
const { PrismaClient } = require("@prisma/client");


const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { query } = req;

  const url = query.url;

  const sitep = await prisma.webPreview.findUnique({
    where: {
      url: url,
    },
  });

  if (!sitep) {
    const data = await getMetaData(url);

    // console.log(data)
    if (!url) {
    }
    const { title, icon, description } = data;
    const sitep2 = await prisma.webPreview.create({
      data: {
        url: url,
        title: title,
        favicon: icon,
        description: description !== null ? "" : description ,
      },
    });
    res
      .status(200)
      .send({ title: title, favicon: icon, description: description });
  } else {
    const { title, favicon, description } = sitep;

    res.status(200).send({
      title: title,
      favicon: favicon,
      description: description,
    });
  }
}
