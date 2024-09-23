import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn({ name: "id" })
  id!: number;

  @Column({ name: "nome", type: "varchar", length: 255, nullable: false })
  nome!: string;

  @Column({ name: "email", type: "varchar", length: 255, nullable: false })
  email!: string;

  @Column({ name: "senha", type: "varchar", length: 255, nullable: false })
  senha!: string;
}
