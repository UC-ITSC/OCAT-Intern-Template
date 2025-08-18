import { compare, hash } from 'bcrypt';
import { generate as generatePassword } from 'generate-password';
import httpErrors from 'http-errors';
import { inject, injectable } from 'inversify';
import { IPasswordService } from '../contracts';
import { Logger } from '../../infrastructure/logging/logger';
const { Unauthorized } = httpErrors;

const PASSWORD_SALT_ROUNDS = 10;

@injectable()
export class PasswordService implements IPasswordService {
  public constructor(
    @inject(Logger) private readonly logger: Logger,
  ) { }

  public async createRandomPassword(length: number) {
    return hash(generatePassword({ length, numbers: true }), PASSWORD_SALT_ROUNDS);
  }

  public async hashPassword(password: string) {
    return hash(password, PASSWORD_SALT_ROUNDS);
  }

  public async verifyPassword(password: string, hashedPassword: string) {
    const isValid = await compare(password, hashedPassword);
    if (!isValid) {
      this.logger.warn(`Invalid Password`);
      throw new Unauthorized(`Invalid Credentials`);
    }
    return isValid;
  }

  public isSecurePassword(password: string): boolean {
    // Match Letter, Number, Special
    return !!password.match(/((?=.*\d)(?=.*[a-zA-Z])(?=.*[\W]).{10,64})/g) ||
      // Match Upper, Lower, Special
      !!password.match(/((?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{10,64})/g) ||
      // Match Upper, Lower, Number
      !!password.match(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,64})/g);
  }
}
