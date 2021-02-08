//var {posts} = require("../../src/blog-posts");
import { getPosts } from '../../src/blog-posts';

//veriyi api dan alır 
export default async(req, res) => {
  const posts = await getPosts();
  res.json({posts});
};
