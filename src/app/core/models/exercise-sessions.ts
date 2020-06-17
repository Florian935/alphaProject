import { Session } from './session';
import { Exercise } from './exercise';

export class ExerciseSessions {

  id: number;
  plannedRepetition: number;
  plannedSet: number;
  plannedLoad: number;
  performedRepetition: number;
  performedSet: number;
  performedLoad: number;
  description: string;
  exercise: Exercise;
  session: Session;
}
