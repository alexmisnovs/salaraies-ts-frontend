export enum Position {
  Manager = "Manager",
  HR = "HR",
  Engineer = "Developer",
  ScrumMaster = "Scrum Master",
}
// type Position = "Manager" | "HR" | "Developer";

export type Employee = {
  id?: string;
  name: string;
  employedAt?: Date;
  position: Position;
  salary: number;
};
