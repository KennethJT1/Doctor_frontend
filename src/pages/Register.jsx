import { Button, Form } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export const Register = () => {
  const onFinish = async (values) => {
    try {
      const res = await axios.post("/register", values);
      if (res.data.success) {
        toast.success(data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[400px] card p-4">
        <h1 className="text-2xl font-bold card-title bg-red-500 text-black max-w-max py-2 px-3 -ml-10 rounded-bl-md">
          Great Having You On Board
        </h1>

        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Name" name="name">
            <input placeholder="Name" />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <input placeholder="Email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <input placeholder="Password" type="password" />
          </Form.Item>

          <Button className="primary-button my-2" htmlType="submit">
            REGISTER
          </Button>

          <Link to="/login" className="anchor uppercase">
            Already Registered. Please <span className="routing">LOGIN</span>{" "}
            here
          </Link>
        </Form>
      </div>
    </div>
  );
};
