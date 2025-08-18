export interface IPasswordService {
  createRandomPassword(length: number): Promise<string>;
  hashPassword(password: string): Promise<string>;
  verifyPassword(password: string, hashedPassword: string): Promise<boolean>;
  isSecurePassword(password: string): boolean;
}

export const IPasswordService = Symbol.for(`IPasswordService`);
