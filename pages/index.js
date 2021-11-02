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
  var today = new Date();
  var date =
    today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate();

  return (
    <div>
      <div
        style={{
          boxShadow: "3px 3px 3px 3px",
          border: "3px solid ",
          borderRadius: "3%",
          width: "800px",
          height: "80px",
        }}
      >
        <Row style={{ margin: "center" }} style={{ padding: "10px" }}>
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
              <HourglassTwoTone
                style={{ fontSize: "16px", color: "blue" }}
              ></HourglassTwoTone>
              Dk
            </h4>

            <p>
              <CheckCircleTwoTone twoToneColor="#eb2f96" /> {date}
            </p>
          </Col>
          <Col span={2}>
            <p>
              <SnippetsTwoTone />
              soru sayısı
            </p>
          </Col>

          <Col span={4} offset={2} style={{ padding: "10px" }}>
            <Button>Teste Başla</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}
