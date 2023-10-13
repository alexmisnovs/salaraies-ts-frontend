import { Employee, Position } from "../model/Employee.model";

export async function getEmployees(): Promise<Employee[]> {
  return [
    {
      name: "Kim",
      employedAt: new Date(),
      id: "123",
      position: Position.Engineer,
      salary: 55000,
    },
    {
      name: "Alex",
      employedAt: new Date(),
      id: "12311",
      position: Position.HR,
      salary: 255000,
    },
    {
      name: "John",
      employedAt: new Date(),
      id: "12223",
      position: Position.Manager,
      salary: 515000,
    },
  ];
}

export async function createEmployee(empl: Employee) {
  return empl.name + "123";
}
