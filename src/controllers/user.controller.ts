import { FastifyInstance } from "fastify";
import { z } from "zod";

import { User } from "../entities/user.entity";
import { userRepository } from "../repositorys/user.repository";

import { encryptPassword } from "../helpers/encryptPass";

export async function userControllers(app: FastifyInstance) {
  app.post("/user", async (request, reply) => {
    try {
      const bodySchema = z.object({
        nome: z.string(),
        email: z.string().email("Formato de E-mail invalido!"),
        senha: z.string().max(18),
      });

      const { nome, email, senha } = bodySchema.parse(request.body);

      const userCheck = await userRepository.findByEmail(email);
      if (userCheck) {
        return reply
          .status(400)
          .send({ message: "Usuário já existe com este e-mail." });
      }

      const hashedPass = await encryptPassword(senha);

      const newUser = await userRepository.save(
        Object.assign(new User(), { nome, email, senha: hashedPass })
      );

      return reply
        .status(201)
        .send({ message: "Usuario cadastrado com Sucesso!", newUser });
    } catch (error) {
      console.log("Erro no servidor!", error);
      return reply.status(500).send({ message: "Erro no Servidor!", error });
    }
  });
}
