import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import Post from "../components/Post";
import "antd/dist/antd.css";
import { Button } from "antd";

import { questionData } from "../questions";

export default function Home({ questions }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCount((n) => n + 1), 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <h1> Timer: {count}</h1>
      <ul>
        {questions.map((question) => (
          <div>
            <Post key={question.id} {...question} />
          </div>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      questions: questionData,
    },
  };
};
