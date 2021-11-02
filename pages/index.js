import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import {
  Button,
  Menu,
  SubMenu,
  Input,
  message,
  Radio,
  Card,
  Col,
  Icon,
  Row,
} from "antd";
import {
  EditTwoTone,
  HourglassTwoTone,
  SnippetsTwoTone,
  CheckCircleTwoTone,
} from "@ant-design/icons";

export default function Home() {
  const [localData, setLocalData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let arr = localStorage.getItem("test");
    arr = JSON.parse(arr);
    console.log(arr.length, "ARRRR");
    setLocalData(arr);
    setLoading(false);
  }, []);

  var today = new Date();
  var date =
    today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate();

  return loading ? (
    <h1>Loading </h1>
  ) : (
    <div>
      <div
        style={{
          backgroundColor: "white",
          border: "3px  ",
          borderRadius: "15px",
          width: "1000px",
          height: "100px",
          textAlign: "center",
        }}
      >
        <Row>
          <Col
            span={2}
            style={{
              padding: "18px",
            }}
          >
            <EditTwoTone />
          </Col>
          <Col span={4}>
            <h3> TEST 1 </h3>
            <p> test soruları </p>
          </Col>
          <Col span={4} offset={6}>
            <h4>
              <HourglassTwoTone style={{ fontSize: "16px" }}></HourglassTwoTone>
              {(localData.length * 45) / 60} dk
            </h4>

            <p>
              <CheckCircleTwoTone /> {date}
            </p>
          </Col>
          <Col span={2}>
            <p>
              <SnippetsTwoTone />
              {localData.length} soru
            </p>
          </Col>

          <Col span={4} offset={2} style={{ padding: "15px" }}>
            <Button>Teste Başla</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}
