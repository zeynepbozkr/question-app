import React, { useState, useEffect } from "react";
import { questionData } from "../questions";
import { Row, Col, Button, Card, Drawer, message, Radio } from "antd";
import "antd/dist/antd.css";
import styles from "../styles/Question.module.css";

function questionPage({ questions }) {
  const [count, setCount] = useState(0);
  const [values, setValues] = useState([]);

  const [trueValue, setTrueValue] = useState(0);

  const [fifty, setFifty] = useState(false);
  const [fiftyValue, setFiftyValue] = useState(null);

  const [disable, setDisable] = useState(false);
  const [disable2, setDisable2] = useState(false);

  const [showAnswer, setShowAnswer] = useState(false);

  const [visible, setVisible] = useState(false);

  const [visibleJoker, setVisibleJoker] = useState(false);

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

  const showDrawer = () => {
    setVisible(true);
    if (values === questions[count].trueAnswer) {
      setTrueValue(trueValue + 1);
    }
  };
  const onClose = () => {
    setVisible(false);
  };

  const Joker = () => {
    setVisibleJoker(true);
  };
  const jokerClose = () => {
    setVisibleJoker(false);
  };

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
    setVisibleJoker(false);
  };

  const fiftyClick = () => {
    setFifty(true);
    setDisable(true);
    setVisibleJoker(false);
  };

  const nextClick = () => {
    console.log(questions.length - 2, "questions.length");
    if (count === questions.length - 2) {
      message.info("last question");
    }
    if (values && count !== questions.length) {
      setCount(1 + count);
    }

    if (values === questions[count].trueAnswer) {
      setTrueValue(trueValue + 1);
    }
    setFifty(false);
    setShowAnswer(false);
  };
  console.log(count, "count");

  const answerChange = (e) => {
    setValues(e.target.value);
    if (count === questions.length - 2) {
      setLastValue(e.target.value);
    }
  };

  console.log(values, "vvvv");
  console.log(trueValue, "true");

  return (
    <div className={styles.container}>
      <Button onClick={Joker}>Joker</Button>

      <Card className={styles.card}>
        {count + 1}
        <h3>{questions[count].question}</h3> <br />
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

      <Row>
        <Col span={8} push={2}>
          <Button onClick={backClick}> BACK</Button>
        </Col>

        <Col span={8}>
          <Button onClick={nextClick} disabled={count === questions.length - 1}>
            NEXT
          </Button>
        </Col>
        <Col offset={4}>
          <Button type="primary" onClick={showDrawer}>
            finish
          </Button>
        </Col>
      </Row>
      <Drawer placement="top" onClose={onClose} visible={visible}>
        <h1>correct numbers: {trueValue} </h1>
      </Drawer>

      <Drawer placement="left" onClose={jokerClose} visible={visibleJoker}>
        <Button onClick={fiftyClick} disabled={disable}>
          %50
        </Button>
        <br /> <br />
        <Button onClick={answerClick} disabled={disable2}>
          trueShow
        </Button>
        <br /> <br /> <br />
        <box>
          {disable && disable2 ? (
            <p style={{ backgroundColor: "#ee9ca7" }}>your jokers are over</p>
          ) : null}
        </box>
      </Drawer>
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
