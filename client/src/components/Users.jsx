import React from "react";
import { Button, Table, Tooltip, message } from "antd";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
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
      align: "center",
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (_, { id }) => {
        return (
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Tooltip title="Delete">
              <Button
                icon={<DeleteTwoTone twoToneColor={"red"} />}
                onClick={() => handleDeleteUser(id)}
              />
            </Tooltip>
            <Tooltip title="Edit">
              <Button
                icon={<EditTwoTone twoToneColor={"blue"} />}
                onClick={() => setUpdateUserId(id)}
              />
            </Tooltip>
          </div>
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
