import { useEffect, useState } from "react";
import { Employee } from "../../model/Employee.model";
import { EmployeeList } from "./EmployeesList";
import { createEmployee, getEmployees } from "../../services/DataService";
import { EmployeeForm } from "./EmployeeForm";

export function Employees() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const onEmployeeAd = async (empl: Employee) => {
    setErrorMessage("");
    setIsLoading(true);
    try {
      const id = await createEmployee(empl);
      setEmployees([...employees, empl]);
      setIsLoading(false);
      return id;
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
        setIsLoading(false);
      }
    }
  };
  const loadEmployees = async () => {
    setIsLoading(true);
    try {
      const res = await getEmployees();
      setEmployees(res);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      if (err instanceof Error) setErrorMessage(err.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const employees = await getEmployees();
  //       setEmployees(employees);
  //       setIsLoading(false);
  //     } catch (err) {
  //       console.error(err);
  //       if (err instanceof Error) {
  //         console.log("got here");
  //         setIsLoading(false);
  //         setErrorMessage(err.message);
  //       }
  //     }
  //   })();
  // }, []);

  return (
    <div>
      {isLoading ? <p>Loading..</p> : null}
      <EmployeeForm onEmplAdd={onEmployeeAd} />
      {errorMessage ? <label style={{ color: "red" }}>{errorMessage}</label> : null}
      <EmployeeList employees={employees} />
    </div>
  );
}
