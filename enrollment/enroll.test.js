const {Student, Person, Course, Teacher} = require('./enroll-answer');

let jaime = new Student('Jaime');
let jaime2 = new Student('Jaime Too');

let schno = new Teacher('Schno M');
let chelsea = new Teacher('Chelsea G');
let daniel = new Teacher('Daniel K');

let javascript = new Course('advance javascript', chelsea);
let drama = new Course('drama', schno);
let physics = new Course('physics', daniel);

describe('Student', () => {
  it('should be an instance of Person', () => { 
    expect(jaime).toBeInstanceOf(Person);
  });
  it('should output occupation as student', () => {
    expect(jaime.occupation).toBe('student')
  })
  it('should output all classes student is enrolled in along with the teachers', () => {
    schno.enrollStudent(jaime, drama);
    daniel.enrollStudent(jaime, physics);
    chelsea.enrollStudent(jaime, javascript);
    console.log = jest.fn();
    jaime.printCourses();
    const consoleOutputs = console.log.mock.calls.map(call =>  call[0])
    expect(consoleOutputs).toEqual(['drama taught by Schno M', 'physics taught by Daniel K', 'advance javascript taught by Chelsea G'])
  })

  describe('Course', () => {
    it('should contain a reference to the teacher assigned to the course', () => {
      expect(javascript.teacher).toBe(chelsea)
    });
    it('should print all enrolled students', () => {
      console.log = jest.fn();
      javascript.printStudents();
      expect(console.log.mock.calls[0][0]).toBe('Jaime')
    })
  })

  describe('Teacher', () =>{
    it('should allow teachers to enroll students only in classes they teach', () => {
      console.log = jest.fn();
      schno.enrollStudent(jaime2, javascript);
      chelsea.enrollStudent(jaime2, javascript);
      expect(console.log.mock.calls[0][0]).toBe('unauthorized');
      expect(console.log.mock.calls[1][0]).toBe('student added');
      expect(javascript.students[1].name).toBe('Jaime Too')
    })
  })
});