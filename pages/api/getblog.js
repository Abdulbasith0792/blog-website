// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';
export default function handler(req, res) {
  fs.readFile(`Blogdata/${req.query.slug}.json`, "utf8", (err, data) => {
    if (err) {
        res.status(500).json({error : "no data found"})
   
    };
    console.log(req.query.slug)
    res.status(200).json(JSON.parse(data))
  });
 
}