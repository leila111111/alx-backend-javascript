export default function createIteratorObject(report) {
  const employee = report.allEmployees;
  const list = Object.values(employee).flat();
  return list;
}
