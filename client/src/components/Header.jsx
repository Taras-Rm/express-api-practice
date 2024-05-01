import { Button, Typography } from "antd";
import React from "react";

function Header({ setIsCreateUserModalOpen }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Typography.Title level={2}>Users</Typography.Title>
      <Button type="primary" onClick={() => setIsCreateUserModalOpen(true)}>
        Create user
      </Button>
    </div>
  );
}

export default Header;
