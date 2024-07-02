export default function getStudentIdsSum(studentList) {
  if (!Array.isArray(studentList)) {
    return [];
  }
  const initialValue = 0;
  const idSum = studentList.reduce(
    (accumulator, student) => (accumulator + student.id), initialValue,
  );

  return idSum;
}
