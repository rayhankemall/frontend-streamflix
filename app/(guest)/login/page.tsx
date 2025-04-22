"use client";
import React, { useState } from "react";
import {
  Button,
  Card,
  Checkbox,
  Col,
  Form,
  Input,
  Row,
  Typography,
} from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const { Title, Text } = Typography;

export default function Login() {
  const [loading, setLoading] = useState(false);

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Row justify="center">
        <Col>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: 340,
              padding: 24,
              background: "rgba(255, 255, 255, 0.9)",
              borderRadius: 16,
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
              backdropFilter: "blur(8px)",
            }}
          >
            <Title level={3} style={{ marginBottom: 4, color: "#333" }}>
              Welcome Back
            </Title>
            <Text type="secondary" style={{ marginBottom: 16 }}>
              Please login to your account
            </Text>

            <Card
              style={{ width: "100%", borderRadius: 12 }}
              headStyle={{ fontSize: 14, fontWeight: 300 }}
              bordered={false}
              bodyStyle={{ padding: 0 }}
            >
              <Form layout="vertical" onFinish={onFinish} style={{ padding: 20 }}>
                <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                  <Input
                    prefix={<UserOutlined />}
                    placeholder="Email"
                    size="large"
                  />
                </Form.Item>
                <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                  <Input.Password
                    prefix={<LockOutlined />}
                    placeholder="Password"
                    size="large"
                  />
                </Form.Item>
                <Form.Item>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    loading={loading}
                    block
                    style={{
                      backgroundColor: "#ffffff",
                      borderColor: "#aaaaaa",
                      color: "#000000",
                      
                      transition: "all 0.3s",
                    }}
                  >
                    Sign In
                  </Button>

                  
                </Form.Item>
              </Form>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
}
