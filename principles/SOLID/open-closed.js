/**
 * Open for extension but close for update
 */

const grades = {
  Mathematics: [],
  Physics: [],
  Biology: [],
};

// No.....

function addMathsGrade(grade) {
  grades.Mathematics.push(grade);
}

function addPhysicsGrade(grade) {
  grades.Physics.push(grade);
}

// No.....

function addGrade(subject, grade) {
  switch (subject) {
    case "Mathematics":
      grades.Mathematics.push(grade);
      break;
    case "Physics":
      grades.Physics.push(grade);
      break;
    case "Biology":
      grades.Biology.push(grade);
      break;
  }
}

// We should write addGrade() function dynamically
// By doing this, even more subjects are added in grades, we still don't need to upgrade this function

function addGradeCorrect(subject, grade) {
  const subjects = Object.keys(grades);
  if (subjects.indexOf(subject) !== -1) {
    grades[subject].push(grade);
  }
}
