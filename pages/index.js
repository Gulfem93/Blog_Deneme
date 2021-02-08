import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from "next/link";
import React from "react";
import fetch from "isomorphic-unfetch";
import ReactMarkdown from 'react-markdown';

const Home = ({posts}) => (
  <div className="container">
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
      
    <div className="hero">
      <h1 className="hero-title">Gülfem IŞIK</h1>
      <div className="hero-social-links">
          <Link href = "https://www.linkedin.com/in/gulfem-isik/">
            <a className="social-link">linkedin</a>
          </Link>
          <Link href = "/test">
            <a className="social-link">twitter</a>
          </Link>
      </div>
    </div> 

    {posts.map(post=>(
      <div className="blog">
        <h2 className="blog-title">
          <Link href={post.slug}>
            <a className="blog-title-link">{post.title}</a>
          </Link>
        </h2> 

        <div className="blog-text">
          <ReactMarkdown source={post.details} />
        </div>
        
        <div className="blog-date">{post.date}</div>
      </div> 
    ))}
      

    <style jsx>{`
      .container{
        max-width: 650px;
        width: 100%;
        margin: 0 auto;
      }
      .hero{
        text-align: center;
        margin: 96px 0;
      }
      .hero-title{
        font-size: 48px;
      }
      .social-link:first-child{
        margin-right: 8px;
      }
      .blog-date{
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

  Home.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("http://localhost:3000/api/posts");
  const json = await res.json();
  return { posts: json.posts };
};
export default Home;