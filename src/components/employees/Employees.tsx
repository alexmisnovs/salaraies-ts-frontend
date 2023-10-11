import { useEffect, useState } from "react";
import { Employee } from "../../model/Employee.model";
import { EmployeeList } from "./EmployeesList";
import { getEmployees } from "../../services/FakeDataService";

export function Employees() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const employees = await getEmployees();
      setEmployees(employees);
    };
    fetchEmployees();
  }, []);

  return (
    <div>
      <EmployeeList employees={employees} />
    </div>
  );
}
