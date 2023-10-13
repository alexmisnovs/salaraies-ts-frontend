import { Employee } from "../model/Employee.model";

const URL = "http://localhost:8000/employees/";

// export async function getEmployees() {
//   const result = await fetch(URL, {
//     method: "GET",
//   });
//   const jsonResult = await result.json();
//   return jsonResult;
// }

export async function getEmployees(): Promise<Employee[]> {
  return new Promise(resolve => {
    fetch(URL, {
      method: "GET",
    })
      .then(response => {
        if (!response.ok) {
          console.log("RESPONSE", response);
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(data => resolve(data))
      .catch(error => {
        console.log(error);
        if (error.message === "Failed to fetch") {
          console.log("response ErrorT", error);

          throw new Error("Connection refused");
        } else {
          throw new Error(error);
        }
      });
  });
}

export async function createEmployee(empl: Employee): Promise<string> {
  const result = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(empl),
  });

  const jsonResult = await result.json();
  if (!result.ok) {
    console.log(jsonResult);
    const message = jsonResult[0].message;
    throw new Error(message);
  }

  return jsonResult.id;
}
