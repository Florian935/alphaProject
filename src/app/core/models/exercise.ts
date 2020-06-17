import { ExerciseSessions } from './exercise-sessions';
import { Equipment } from './equipment';
import { Muscle } from './muscle';
import { Goal } from './goal';

export class Exercise {

  id: number;
  executionDescription: string;
  name: string;
  difficulty: number;
  goals: Goal[];
  muscles: Muscle[];
  equipments: Equipment[];
  exerciseSessions: ExerciseSessions[];
}
