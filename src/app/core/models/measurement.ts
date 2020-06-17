import { User } from './user';
export class Measurement {

  id: number;
  createdAt: Date;
  weight: number;
  height: number;
  user: User;
}
