export default function getListStudentIds(student) {
  if (student instanceof Array){
    return students.map((element) => element.id);
  }
  return [];
}
