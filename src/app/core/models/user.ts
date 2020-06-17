import { Program } from './program';
import { Equipment } from './equipment';
import { MedicHistories } from './medic-histories';
import { Role } from './role';
import { Measurement } from './measurement';
import { Goal } from './goal';

export class User {

  id: number;
  pseudo: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  measurements: Measurement;
  goal: Goal[];
  roles: Role[];
  medicHistories: MedicHistories[];
  equipments: Equipment[];
  programs: Program[];
}
