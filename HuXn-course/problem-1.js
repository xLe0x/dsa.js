/*
Create an array with 5 students names, after that create a
function which takes 2 parameters (allStudents &
studentName) iterate over all students and find that
specific user "studentName".
*/

const students = ["Ammar", "Saber", "Mohamed", "Saad", "Sadek"];

function getStudent(allStudents, studentName) {
  for (let i = 0; i < allStudents.length; i++) {
    if (allStudents[i] === studentName) return allStudents[i];
  }
}

console.log(getStudent(students, "Ammar"));
