const { Router } = require("express");
const { knexDB } = require("../db");

const routes = Router();

routes.post("/user/create", async (req, res) => {
  const users = [
    {
      name: 'User 1',
    },
    {
      name: 'User 2',

    },
    {
      name: 'User 3',
    },
    {
      name: 'User 4',
    }
  ];

  const rows = await knexDB('users').insert(users);

  return res.status(201).json(rows);
});

routes.get("/user/list", async (req, res) => {
  const users = await knexDB('users').select('*');
  return res.status(200).json(users);
});

module.exports = { routes };