import { config } from "dotenv";
import { DataSource } from "typeorm";

config();
export const databaseProviders = new DataSource({
  type: "mysql",
  host: process.env.HOST,
  port: Number(process.env.PORT),
  username: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  entities: [__dirname + "../*.entity{.ts,.js}"],
});

databaseProviders
  .initialize()
  .then(() => {
    console.log("O Banco está vivo!");
  })
  .catch(() => {
    console.log("O Banco está morto!");
  });
