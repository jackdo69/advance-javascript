/**
 * 'segregation' means 'separate'
 * in other words, client should not depend on interface
 * they don't use
 *
 * let say class Student implements student interface
 * but some students are going to school
 * wherease others can study remotely
 */

interface studentI {
  enrolCourse: () => void;
}

interface onCampusStudentI {
  goToSchool: () => void;
}

interface remoteStudentI {
  studyOnline: () => void;
}

class CampusStudent implements studentI, onCampusStudentI {
  private year: number;
  enrolCourse() {
    console.log('Enrolling course');
  }

  goToSchool() {
    console.log('Go to school');
  }
}
