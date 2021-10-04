// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const getMetaData = require("metadata-scraper");

export default async function handler(req, res) {
  const { query } = req;

  const url = query.url;

    const data = await getMetaData(url);
    
    const {title,icon,description} = data

  res.status(200).json({title:title,favicon:icon,description:description});
}
