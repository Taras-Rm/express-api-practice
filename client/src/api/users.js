import api from "./api";

const getUsers = async () => {
  return api.get("/users").then((response) => response.data);
};

const getUser = async (id) => {
  return api.get(`/users/${id}`).then((response) => response.data);
};

const updateUser = async (id, { name, email, age }) => {
  return api
    .put(`/users/${id}`, { name, email, age })
    .then((response) => response.data);
};

const deleteUser = async (id) => {
  return api.delete(`/users/${id}`).then((response) => response.data);
};

const createUser = async ({ name, email, age }) => {
  return api
    .post("/users", { name, email, age })
    .then((response) => response.data);
};

export { getUsers, getUser, updateUser, deleteUser, createUser };
