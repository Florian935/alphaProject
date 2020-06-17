import { User } from './user';
import { Exercise } from './exercise';

export class Goal {

  id: number;
  name: string;
  description: string;
  tips: string;
  users: User[];
  exercises: Exercise[];
}
