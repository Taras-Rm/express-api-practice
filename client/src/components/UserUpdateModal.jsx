import { Form, Input, Modal, message } from "antd";
import React, { useEffect, useState } from "react";
import { getUser } from "../api/users";

function UserUpdateModal({ userId, clearUpdateUserId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUser(userId);
        setUser(user);
      } catch (error) {
        console.error(error);
        message.error(error.response.data.message);
      }
    };

    userId && fetchUser();
  }, [userId]);

  return (
    <Modal title={"Update user"} open={true} onCancel={clearUpdateUserId}>
      {user && (
        <Form layout="vertical" initialValues={user}>
          <Form.Item name={"name"} label={"Name"}>
            <Input />
          </Form.Item>
          <Form.Item name={"email"} label={"Email"}>
            <Input type="" />
          </Form.Item>
          <Form.Item name={"age"} label={"Age"}>
            <Input type="" />
          </Form.Item>
        </Form>
      )}
    </Modal>
  );
}

export default UserUpdateModal;
