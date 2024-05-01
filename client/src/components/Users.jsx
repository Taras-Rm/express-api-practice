import React from "react";
import { Button, Table, Tooltip, message } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";
import { deleteUser } from "../api/users";

function Users({ users, setUpdateUserId, fetchUsers }) {
  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      fetchUsers();
      message.success("User deleted");
    } catch (error) {
      console.error(error);
      message.error(error.response.data.message);
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name, { id }) => {
        return (
          <Button onClick={() => setUpdateUserId(id)} type="link">
            {name}
          </Button>
        );
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Action",
      key: "action",
      render: (_, user) => {
        return (
          <Tooltip title="Delete">
            <Button
              icon={<DeleteTwoTone twoToneColor={"red"} />}
              onClick={() => handleDeleteUser(user.id)}
            />
          </Tooltip>
        );
      },
    },
  ];
  return (
    <div>
      <Table
        dataSource={users.map((user) => ({ ...user, key: user.id }))}
        columns={columns}
        pagination={false}
      />
    </div>
  );
}

export default Users;
