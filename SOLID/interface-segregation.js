/**
 * 'segregation' means 'separate'
 * in other words, client should not depend on interface
 * they don't use
 *
 * but in javascript there is no Interface
 * so we demonstrate with a class
 */

class Student {
  constructor(subject, year) {}
  study() {}
  goToSchool() {}
}

/**
 * Imagine this Student interface, what if
 * our student is study remotely, 'online' for example
 * then there is no way, he can goToSchool()
 */
