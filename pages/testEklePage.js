import React from "react";
import { Form, Input, InputNumber, Button, Layout, Select } from "antd";
import "antd/dist/antd.css";
import FormItem from "antd/lib/form/FormItem";
const { Option } = Select;
import questions from "../questions";

function testEklePage() {
  const submitButton = () => {};

  const onFinish = (values) => {
    console.log(values, "bval");
    let postArr = localStorage.getItem("test");
    postArr = JSON.parse(postArr);

    if (postArr) {
      let arr = [...postArr];
      arr.push(values);
      arr = JSON.stringify(arr);
      console.log(arr, "arr if");
      localStorage.setItem("test", arr);
    } else {
      let arr = [];
      arr.push(values);
      arr = JSON.stringify(arr);
      console.log(arr, "arr else");
      localStorage.setItem("test", arr);
    }

    questions.writeFile(localStorage.getItem("test"), function (err) {
      console.error(err);
    });
  };

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  return (
    <div>
      <Form
        {...Layout}
        onFinish={onFinish}
        initialValues={{
          questions: "",
          trueAnswer: "",
          answers: [],
        }}
        style={{
          height: "400px",
          width: "600px",
          border: "3px  ",
          padding: "50px",
          margin: "25px 50px 75px 10px",
          borderRadius: "10px",
        }}
      >
        <Form.Item name="questions">
          <Input placeholder="question"></Input>
        </Form.Item>
        <FormItem name="trueAnswer">
          <Input placeholder="True Answer"></Input>
        </FormItem>

        <Form.Item name="answers">
          <Select
            mode="tags"
            style={{ width: "100%" }}
            placeholder=" Answer"
          ></Select>
        </Form.Item>
        <Form.Item>
          <Button type="dashed" onClick={submitButton} htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default testEklePage;
