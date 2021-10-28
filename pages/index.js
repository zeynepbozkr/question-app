import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { questionData } from "../questions";
import { Button, Menu, SubMenu, Input, message, Radio } from "antd";

export default function Home({ questions }) {
  const [count, setCount] = useState(0);
  const i = Math.floor(Math.random() * questions.length);

  const [values, setValues] = useState(0);
  const [trueValue, setTrueValue] = useState(0);
  // const [loading, setLoading] = useState(true);
  // const [choose, setChoose] = useState();

  const onChange = (e) => {
    console.log(values, "value");
    setValues(e.target.value);
    let change = e.target.value;

    localStorage.setItem("question", change);
    console.log(change, "cccc");
  };

  const nextClick = () => {
    console.log(questions[i].trueAnswer, "true");
    if (count !== questions.length) {
      setCount(count + 1);
    } else {
      message.success("Completed");
    }

    if (values === questions[i].trueAnswer) {
      setTrueValue(trueValue + 1);
    }
    console.log(trueValue, "truevalue");
  };

  return (
    <div>
      {count} <br />
      What mean {questions[i].question}
      <br />
      <Radio.Group options={questions[i].answer} onChange={onChange} />
      {trueValue}
      <Button onClick={nextClick}> NEXT</Button>
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
