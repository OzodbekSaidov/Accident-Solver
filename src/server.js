/** @format */

import express from "express";
import usersRouter from "./routes/User.js";
import { db } from "./db/index.js";
import config from "./db/utils/config.js";

const server = express();

server.use(express.static("uploads"));
server.use(express.json());
server.use(usersRouter);

db();
server.listen(3001, () => {
  console.log(`Server ishladi`);
});
