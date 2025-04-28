import EmployeeListItem from "./EmployeeListItem"



export default function EmployeeList() {
    return (
      <div className="employeeList">
        <EmployeeListItem name="James King" />
        <EmployeeListItem name="Julie Taylor" />
        <EmployeeListItem name="Eugene Lee" />
        <EmployeeListItem name="John Williams" />
        <EmployeeListItem name="Ray Moore" />
        <EmployeeListItem name="Paul Jones" />
      </div>
    );
  }