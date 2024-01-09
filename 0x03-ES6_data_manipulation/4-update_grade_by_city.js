export default function updateStudentGradeByCity(student, city, newGrades) {
  const grades = newGrades.reduce((arr, obj) => ({
    ...arr,
    [obj.studentId]: obj.grade,
  }), {});
  const stdt = student.filter((element) => element.location === city).map((elmnt) => ({
    ...elmnt,
    grade: grades[elmnt.id] || 'N/A',
  }));
  return stdt;
}
