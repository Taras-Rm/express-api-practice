const users = [];

// working with User resource on db level
// User {
//   id
//   name
//   email
//   age
// }
class User {
  static async create(user) {
    const newUser = {
      id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
      ...user,
    };

    users.push(newUser);

    return newUser;
  }

  static async getById(id) {
    return users.find((u) => String(u.id) === String(id));
  }

  static async getByEmail(email) {
    return users.find((u) => u.email === email);
  }

  static async getAll() {
    return users;
  }

  static async updateById(id, { name, email, age }) {
    const user = users.find((u) => String(u.id) === String(id));
    if (!user) {
      return null;
    }

    user.name = name;
    user.age = age;
    user.email = email;

    return user;
  }

  static async deleteById(id) {
    const idx = users.findIndex((u) => String(u.id) === String(id));
    if (idx === -1) {
      return idx;
    }

    const userIdForDelete = users[idx];

    users.splice(idx, 1);

    return userIdForDelete;
  }
}

module.exports = User;
