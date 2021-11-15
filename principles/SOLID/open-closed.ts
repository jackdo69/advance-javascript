/**
 * Open for extension but close for update
 */
type gradesT = { [key: string]: Array<number> };
const grades: gradesT = {
  Mathematics: [],
  Physics: [],
  Biology: [],
};

// No.....

function addMathsGrade(grade: number) {
  grades.Mathematics.push(grade);
}

function addPhysicsGrade(grade: number) {
  grades.Physics.push(grade);
}

// No.....

function addGrade(subject: keyof gradesT, grade: number) {
  switch (subject) {
    case 'Mathematics':
      grades.Mathematics.push(grade);
      break;
    case 'Physics':
      grades.Physics.push(grade);
      break;
    case 'Biology':
      grades.Biology.push(grade);
      break;
  }
}

// We should write addGrade() function dynamically
// By doing this, even more subjects are added in grades, we still don't need to upgrade this function

function addGradeCorrect(subject: keyof gradesT, grade: number) {
  const subjects = Object.keys(grades);
  grades[subject].push(grade);
}
