export default function getStudentIdsSum(student) {
  if (student instanceof Array) {
    return student.reduce(
      (elment, element) => elment + element.id,0);
  }
  return 0;
}
