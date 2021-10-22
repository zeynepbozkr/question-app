import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import Post from "../components/Post";

export default function Home({ posts }) {
  console.log(posts);
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(posts, "pppp");

    const timer = setInterval(() => setCount((n) => n + 1), 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1> Timer: {count}</h1>
      <ul>{posts}</ul>
    </div>
  );
}

export async function getStaticProps() {
  const posts = fetch(`http://localhost:3000/api/questions`).then((r) =>
    r.json()
  );
  console.log(posts, "ssss");
  return {
    props: { posts },
  };
}
