import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/Link";
import moduleName from "../pages/questions/index";
const Post = ({ posts }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(posts, "pppp");
    console.log("post");
    const timer = setInterval(() => setCount((n) => n + 1), 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <Head>
        <title> MON SUPER BLOG</title>
      </Head>
      <h1> Timer: {count}</h1>
      <ul>{posts}</ul>
    </div>
  );
};

export async function getStaticProps() {
  const posts = await fetch(`http://localhost:3000/api/questions`).then((r) =>
    r.json()
  );
  console.log(posts, "ssss");
  return {
    props: { posts },
  };
}
export default Post;
