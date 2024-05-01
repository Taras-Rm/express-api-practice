import { Button, Typography, message } from "antd";
import "./App.css";
import UserUpdateModal from "./components/UserUpdateModal";
import Users from "./components/Users";
import { useEffect, useState } from "react";
import { getUsers } from "./api/users";

function App() {
  const [updateUserId, setUpdateUserId] = useState(null);
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const users = await getUsers();
      setUsers(users);
    } catch (error) {
      console.error(error);
      message.error(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="app">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography.Title level={2}>Users</Typography.Title>
        <Button type="primary">Create user</Button>
      </div>
      <Users users={users} setUpdateUserId={(id) => setUpdateUserId(id)} />
      {!!updateUserId && (
        <UserUpdateModal
          userId={updateUserId}
          clearUpdateUserId={() => setUpdateUserId(null)}
          fetchUsers={fetchUsers}
        />
      )}
    </div>
  );
}

export default App;
