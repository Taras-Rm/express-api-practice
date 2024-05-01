import { Form, Input, InputNumber, Modal, message } from "antd";
import React, { useEffect, useState } from "react";
import { getUser, updateUser } from "../api/users";
import { useForm } from "antd/es/form/Form";

function UserUpdateModal({ userId, clearUpdateUserId, fetchUsers }) {
  const [user, setUser] = useState(null);
  const [form] = useForm();

  const fetchUser = async () => {
    try {
      const user = await getUser(userId);
      setUser(user);
    } catch (error) {
      console.error(error);
      message.error(error.response.data.message);
    }
  };

  useEffect(() => {
    userId && fetchUser();
  }, [userId]);

  const onUpdateUserClick = async ({ name, email, age }) => {
    try {
      await updateUser(user.id, { name, email, age });
      message.success("User updated");
      clearUpdateUserId();
      fetchUsers();
    } catch (error) {
      console.error(error);
      message.error(error.response.data.message);
    }
  };

  return (
    <Modal
      title={"Update user"}
      open={true}
      onCancel={clearUpdateUserId}
      okText={"Update"}
      onOk={() => form.submit()}
    >
      {user && (
        <Form
          layout="vertical"
          initialValues={user}
          onFinish={onUpdateUserClick}
          form={form}
        >
          <Form.Item name={"name"} label={"Name"} rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <div style={{ display: "flex" }}>
            <Form.Item
              name={"email"}
              label={"Email"}
              style={{ flex: 1 }}
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={"age"}
              label={"Age"}
              style={{ marginLeft: 10 }}
              rules={[{ required: true }]}
            >
              <InputNumber />
            </Form.Item>
          </div>
        </Form>
      )}
    </Modal>
  );
}

export default UserUpdateModal;
