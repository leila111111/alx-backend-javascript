export default function getListStudentIds(student) {
  if (student instanceof Array){
    return student.map((element) => element.id);
  }
  return [];
}
