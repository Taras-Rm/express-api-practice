# Users API (server)

This is basic users API (CRUD).

## Technologies

- Node.js
- Express.js
- Winston

 #### This API is able to do 5 things:

- Create a new user.
- Get a list of all users.
- Get a user by id.
- Update a user.
- Delete a user.

 ### There are 5 endpoints in the API:
--------
- **GET** - localhost:3000/api/users (_get a list of all users_)
#### Response (example):
  ```sh
[
    {
        "id": 1,
        "name": "Bob",
        "email": "bob@example.com",
        "age": 12
    },
    {
        "id": 2,
        "name": "Tom",
        "email": "tom@example.com",
        "age": 34
    }
]
```
--------
- **GET** -  localhost:3000/api/users/:id (_get a user by ID_)
#### Response (example):
  ```sh
{
    "id": 2,
    "name": "Bob",
    "email": "bob@example.com",
    "age": 12
}
```
--------
- **POST** -  localhost:3000/api/users (_create a new user_)
#### Request (example):
```sh
{
    "name": "Bob",
    "email": "bob@example.com",
    "age": 12
}
```
  #### Response (example):
```sh
{
    "id": 1,
    "name": "Bob",
    "email": "bob@example.com",
    "age": 12
}
```
--------
- **DELETE** -  localhost:3000/api/users/:id (_delete a user by id_)
#### Response (example):
  ```sh
{
    "message": "success"
}
```
--------
- **PUT** -  localhost:3000/api/users/:id (_update a user_)
#### Request (example):
```sh
{
    "name": "Tom",
    "email": "tom@example.com",
    "age": 14
}
```
  #### Response (example):
```sh
{
    "id": 2,
    "name": "Tom",
    "email": "tom@gmail.com",
    "age": 14
}
```
--------

### Run app

1. Clone repository
``` bash
git clone https://github.com/Taras-Rm/express-api-practice.git
```

2. Move to server folder:
``` bash
cd ./server
```

3. Install dependencies
``` bash
npm install
```

4. Create **.env** file and add relevant data to this file:
+ PORT=xxxx

5. Start app
``` bash
npm start
```
