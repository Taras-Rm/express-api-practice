import React, { useEffect, useState } from "react";
import { Button, Table, message } from "antd";
import { getUsers } from "../api/users";

function Users({ setUpdateUserId }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getUsers();
        setUsers(users);
      } catch (error) {
        console.error(error);
        message.error(error.response.data.message);
      }
    };

    fetchUsers();
  }, []);

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
