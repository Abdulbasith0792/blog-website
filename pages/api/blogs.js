// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';
export default async function handler(req, res) {

  let data = await fs.promises.readdir("Blogdata");
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    console.log(item)
    myfile = await fs.promises.readFile(("Blogdata/"+item) , 'utf8');
   
    allBlogs.push(JSON.parse(myfile))

  };
  res.status(200).json(allBlogs)
}
  // fs.readdir("Blogdata", (err, data) => {
  //   console.log(data)
  //   let allBlogs;
  //   data.forEach((item) => {
  //     console.log(item)
  //     fs.readFile(('Blogdata/' + item), (d) => {
  //       allBlogs = allBlogs.push(d)
  //     }
  //     )
  //     res.status(200).json(allBlogs)
  //   })

  // }
  // )
