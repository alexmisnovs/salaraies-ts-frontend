import { Employee } from "../model/Employee.model";

const URL = "http://localhost:8000";

export async function getEmployees(): Promise<Employee[]> {
  const result = await fetch(URL, {
    method: "GET",
  });

  const jsonResult = (await result.json()) as Employee[];

  return jsonResult;
}

export async function createEmployee(empl: Employee): Promise<string> {
  const result = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(empl),
  });

  const jsonResult = (await result.json()) as { id: string };

  return jsonResult.id;
}
