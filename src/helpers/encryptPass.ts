import bcrypt from "bcrypt";

export async function encryptPassword(senha: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(senha, salt);
  return hashedPassword;
}
