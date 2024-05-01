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

export { getUsers, getUser, updateUser };
