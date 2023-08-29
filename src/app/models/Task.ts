import { State } from '../state';

export class Task {
  titre?: string;
  description?: string;
  date?: string;
  etat?: State;
}
