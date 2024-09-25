import "reflect-metadata";
import fastify from "fastify";
import jwt from "@fastify/jwt";
import cors from "@fastify/cors";

import { userControllers } from "./src/controllers/user.controller";

const app = fastify();

app.register(cors, {
  origin: true,
});

app.register(jwt, {
  secret: process.env.SECRET || "emergency",
});

app.register(userControllers);

app
  .listen({
    port: 4533,
  })
  .then(() => {
    console.log("O Servidor está vivo!");
  })
  .catch(() => {
    console.log("O Servidor está morto!");
  });
