export interface Assessment {
  id?: number;
  catDateOfBirth: string;
  catName: string;
  createdAt?: Date;
  deletedAt?: Date | null;
  instrumentType: number;
  riskLevel: string;
  score: number;
  updatedAt?: Date;
}
