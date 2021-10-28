import React, { useState, useEffect } from "react";
import { questionData } from "../questions";
import { Button, Card, Row, Col, message, Radio } from "antd";
import "antd/dist/antd.css";
import styles from "../styles/Question.module.css";

function questionPage({ questions }) {
  const [count, setCount] = useState(0);
  const [values, setValues] = useState(0);
  const [trueValue, setTrueValue] = useState(0);
  const [fifty, setFifty] = useState(false);
  const [fiftyValue, setFiftyValue] = useState(null);
  const [disable, setDisable] = useState(false);
  const [disable2, setDisable2] = useState(false);

  const [showAnswer, setShowAnswer] = useState(false);

  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    //TODO : Bu alanda(useeeffect de) ben (bekir) yardım ettim. Musa abi haberin olsun. :)
    // Yapamamış bana sordu bende koda biraz yardım ettim haberin olsun abi.

    const newA = [...questions[count].answer];
    const index = newA.indexOf(questions[count].trueAnswer);

    if (index > -1) {
      newA.splice(index, 1);
    }
    const randomV = newA[Math.floor(Math.random() * newA.length)];
    setFiftyValue(randomV);
  }, [count]);

  const backClick = () => {
    if (count !== 0) {
      setCount(count - 1);
      setFifty(false);
    }
    setShowAnswer(false);
  };

  const answerClick = () => {
    setShowAnswer(true);
    setDisable2(true);
  };
  const fiftyClick = () => {
    setFifty(true);
    setDisable(true);
  };
  const nextClick = () => {
    if (count !== questions.length) {
      setCount(count + 1);
    } else if (count === 2) {
    }
    if (values === questions[count].trueAnswer) {
      setTrueValue(trueValue + 1);
    }
    setFifty(false);
    setShowAnswer(false);
  };
  const finishClick = () => {
    message.info(trueValue);
    console.log("tıklandı");
  };
  const answerChange = (e) => {
    setValues(e.target.value);
  };
  console.log(values);
  console.log(trueValue, "true");

  return (
    <div className={styles.container}>
      <Button onClick={backClick}> BACK</Button>

      <Card className={styles.card} extra={count + 1}>
        {questions[count].question}
        <br />
        <Radio.Group onChange={answerChange}>
          <br />

          {fifty ? (
            <>
              <Radio value={questions[count].trueAnswer}>
                {questions[count].trueAnswer}
              </Radio>
              <Radio value={fiftyValue}>{fiftyValue}</Radio>
            </>
          ) : (
            questions[count].answer.map((result) => {
              return <Radio value={result}>{result}</Radio>;
            })
          )}
        </Radio.Group>
        {showAnswer ? (
          <h4>true answer : {questions[count].trueAnswer} </h4>
        ) : null}
      </Card>
      <Button onClick={nextClick} disabled={count === questions.length - 1}>
        NEXT
      </Button>
      <Button onClick={fiftyClick} disabled={disable}>
        %50
      </Button>
      <Button onClick={answerClick} disabled={disable2}>
        trueShow
      </Button>

      <Button onClick={finishClick}>finish</Button>
    </div>
  );
}

export default questionPage;
export const getStaticProps = async () => {
  return {
    props: {
      questions: questionData,
    },
  };
};
