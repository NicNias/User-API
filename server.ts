import "reflect-metadata";
import fastify from "fastify";
import jwt from "@fastify/jwt";
import cors from "@fastify/cors";

const app = fastify();

app.register(cors, {
  origin: true,
});

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
