import { User } from '../../../types';

export interface IUserRepository {
  findById(id: number): Promise<User | null>;
  findByUsername(username: string): Promise<User | null>;
  findAll(): Promise<User[]>;
  update(id: number, user: Partial<User>): Promise<User | null>;
  delete(id: number): Promise<boolean>;
}

export const IUserRepository = Symbol.for(`IUserRepository`);
