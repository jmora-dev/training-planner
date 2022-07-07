import { iExercise } from "../../exercises/interfaces/iExercise";

export interface iTraining {
  id: number;
  creationDate: Date;
  name: string;
  description: string;
  team: string;
  target: string;
  equipment: string;
  players: string;
  observation: string;
  exercises: Array<iExercise>;
}
