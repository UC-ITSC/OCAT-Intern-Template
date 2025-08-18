export interface Assessment {
  id?: number;
  catDateOfBirth: string;
  catName: string;
  createdAt?: Date;
  deletedAt?: Date | null;
  instrumentType: string;
  riskLevel: string;
  score: number;
  updatedAt?: Date;
}
