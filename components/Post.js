import React, { useState, useEffect } from "react";
import Link from "next/Link";

const Post = ({ id, question, trueAnswer, falseAnswer }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setCount((n) => n + 1), 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <Link href={`/questions/${id}`}>
        <a className="card">
          <h1>
            {id}-{question}-{trueAnswer}-{falseAnswer}-
          </h1>
        </a>
      </Link>
    </div>
  );
};

export default Post;
