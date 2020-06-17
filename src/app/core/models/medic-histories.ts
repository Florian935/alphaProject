import { Muscle } from './muscle';
import { User } from './user';
export class MedicHistories {

  id: number;
  description: string;
  issueDate: Date;
  user: User;
  muscle: Muscle;
}
