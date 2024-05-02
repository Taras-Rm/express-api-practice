import { Form, Input, InputNumber, Modal, Typography, message } from "antd";
import { useForm } from "antd/es/form/Form";
import React from "react";
import { createUser } from "../api/users";

function UserCreateModal({ isOpen, closeModal, fetchUsers }) {
  const [form] = useForm();

  const onCloseModal = () => {
    closeModal();
    form.resetFields();
  };

  const handleCreateUser = async ({ name, email, age }) => {
    try {
      await createUser({ name, email, age });
      message.success("User created");
      onCloseModal();
      fetchUsers();
    } catch (error) {
      console.error(error);
      message.error(error.response.data.message);
    }
  };

  return (
    <Modal
      open={isOpen}
      onCancel={onCloseModal}
      title={"Create user"}
      okText={"Create"}
      onOk={() => form.submit()}
    >
      <Form
        layout="vertical"
        onFinish={handleCreateUser}
        form={form}
        requiredMark={false}
      >
        <Form.Item name={"name"} label={"Name"} rules={[{ required: true }]}>
          <Input autoComplete="off" />
        </Form.Item>
        <div style={{ display: "flex" }}>
          <Form.Item
            name={"email"}
            label={"Email"}
            style={{ flex: 1 }}
            rules={[{ required: true }]}
          >
            <Input autoComplete="off" />
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
    </Modal>
  );
}

export default UserCreateModal;
