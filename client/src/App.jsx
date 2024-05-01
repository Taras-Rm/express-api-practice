import { Button, Typography } from "antd";
import "./App.css";
import UserUpdateModal from "./components/UserUpdateModal";
import Users from "./components/Users";
import { useState } from "react";

function App() {
  const [updateUserId, setUpdateUserId] = useState(null);

  return (
    <div className="app">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography.Title level={2}>Users</Typography.Title>
        <Button type="primary">Create user</Button>
      </div>
      <Users setUpdateUserId={(id) => setUpdateUserId(id)} />
      {!!updateUserId && (
        <UserUpdateModal
          userId={updateUserId}
          clearUpdateUserId={() => setUpdateUserId(null)}
        />
      )}
    </div>
  );
}

export default App;
