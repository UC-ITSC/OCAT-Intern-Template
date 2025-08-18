export interface User {
  id?: number;
  createdAt?: Date;
  deletedAt?: Date | null;
  firstName: string;
  isSupervisor: boolean;
  lastName: string;
  password: string;
  updatedAt?: Date;
  username: string;
}
