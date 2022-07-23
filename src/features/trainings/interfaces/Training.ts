export interface Training {
  id?: string;
  creationDate: string;
  name: string;
  description: string;
  team: string;
  target: string;
  equipment: string;
  players: string;
  observation: string;
  exercises: Array<string>;
}
