export default function getStudentsByLocation(student, city) {
  if (student instanceof Array) {
    return student.filter((element) => element.location === city);
  }
  return [];
}
