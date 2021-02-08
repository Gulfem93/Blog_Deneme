import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";
import fetch from "isomorphic-unfetch";

const BlogPost = ({post}) => (
  <div className="post-container">
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="post-hero">
      <h1 className="post-hero-title"> Gülfem IŞIK </h1>
      <div className="post-hero-social-links">
        <Link href = "https://www.linkedin.com/in/gulfem-isik/">
          <a className="post-social-link">linkedin</a>
        </Link>
        <Link href = "/test">
          <a className="post-social-link">twitter</a>
        </Link>
      </div>
    </div> 

      <div className="post-blog">
        <h2 className="post-blog-title">
          <a className="post-blog-title-link">{post.title}</a>
        </h2> 

        <div className='post-blog-text'>
          <ReactMarkdown source={post.details} />
        </div> 

        <div className="post-blog-date">{post.date}</div>
      </div>

      <style jsx>{`
        .post-container{
          max-width: 650px;
          width: 100%;
          margin: 0 auto;
        }
        .post-hero{
          text-align: center;
          margin: 96px 0;
        }
        .post-blog-title{
          front-size: 48px;
        }
        .post-social-link:first-child{
          margin-right: 8px;
        }
        .post-blog-date{
          text-align: right;
          color:#cccccc;
        }
        a{
          color: #2955D9;
          text-decoration: none;
        }
      `}
      </style> 
    </div>
  )

  BlogPost.getInitialProps = async ({ req, query }) => {
    // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
    const res = await fetch(`http://localhost:3000/api/post/${query.postId}`);
    const json = await res.json();
    return { post: json.post };
  };
  
  export default BlogPost;