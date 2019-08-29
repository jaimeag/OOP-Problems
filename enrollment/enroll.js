//Chisel Smith is tired of the motonomy behind pen and paper record keeping and have hired 
//you to digitize the enrollment process



//create a constructor Student that:
  //allows students to view courses they've enrolled in
    //for each course, an individual console log should be made in the form of "<COURSE> taught by <TEACHERNAME>"
  //note: a Person should not be able to view their courses unless they're a student

//create a constructor Teacher that:
  //contains a function enrollStudent that allows teachers to enroll students into a course
    //reference to course must be pushed into the Student courses array
  //note: 
    //a teacher cannot enroll students to classes they don't teach
    //a reference to the student must be pushed into the array, no new objects should be created in memory
    /*in order a teacher to be able to teach a class, the Course constructor must be called with the arguments 
      string courseName and the reference to the Teacher object*/

//inputs: string courseName, Teacher object
function Course(courseName, teacher){
  this.courseName = courseName;
  this.teacher = teacher;
  this.students = [];
}
Course.prototype.printStudents = function() {
  //write code here
}

function Person(name, occupation){
   this.name = name;
   this.occupation = occupation;
}
Person.prototype.printProfile = function(){ 
  console.log(`name: ${this.name}, occupation: ${this.occupation}`)
};


function Teacher(name){
  Person.call(this, name, "teacher");
}

//inputs: Student object, Course Object
Teacher.prototype.enrollStudent = function(student, course){
  //write code here
}


function Student(name){
  Person.call(this, name, 'student');
  this.courses = [];
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.printCourses = function(){
  //write code here
}

module.exports = {Person, Student, Teacher, Course};