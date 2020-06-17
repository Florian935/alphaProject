import { Session } from './session';
import { User } from './user';

export class Program {

  id: number;
  createdAt: Date;
  user: User;
  sessions: Session[];
}
