import React from "react";
import { Button, Table } from "antd";

function Users({ users, setUpdateUserId }) {
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
