import { message } from "antd";
import "./App.css";
import UserUpdateModal from "./components/UserUpdateModal";
import Users from "./components/Users";
import { useEffect, useState } from "react";
import { getUsers } from "./api/users";
import UserCreateModal from "./components/UserCreateModal";
import Header from "./components/Header";

function App() {
  const [users, setUsers] = useState([]);

  const [updateUserId, setUpdateUserId] = useState(null);
  const [isCreateUserModalOpen, setIsCreateUserModalOpen] = useState(false);

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
      <Header setIsCreateUserModalOpen={setIsCreateUserModalOpen} />
      <Users
        users={users}
        setUpdateUserId={(id) => setUpdateUserId(id)}
        fetchUsers={fetchUsers}
      />
      {!!updateUserId && (
        <UserUpdateModal
          userId={updateUserId}
          clearUpdateUserId={() => setUpdateUserId(null)}
          fetchUsers={fetchUsers}
        />
      )}
      <UserCreateModal
        isOpen={isCreateUserModalOpen}
        closeModal={() => setIsCreateUserModalOpen(false)}
        fetchUsers={fetchUsers}
      />
    </div>
  );
}

export default App;
