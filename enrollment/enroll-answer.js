//Chisel Smith is tired of the motonomy behind pen and paper record keeping and have hired 
//you to digitize the enrollment process



//create a constructor Student that:
  //is a Person (via prototype)
  //allows students to view courses they've enrolled in
    //for each course, an individual console log should be made in the form of "<COURSE> taught by <TEACHERNAME>"
  //note: a Person should not be able to view their courses unless they're a student

//create a constructor Teacher that:
  //is a person (via prototype)
  //allows teachers to teach a class
  //allows teachers to enroll students into a class note: a teacher cannot enroll students to 


  function Person(name,occupation){
    this.name = name;
    this.occupation = occupation;
 }
 Person.prototype.printProfile = function(){ console.log(`name: ${this.name}, occupation: ${this.occupation}`) };
 
 function Student(name){
   Person.call(this, name, 'student');
   this.courses = [];
 }
 
 Student.prototype = Object.create(Person.prototype)
 Student.prototype.printCourses = function(){
   this.courses.forEach(course => {
     console.log(`${course.courseName} taught by ${course.teacher.name}`)
   })
 }
 
 function Teacher(name){
   Person.call(this, name, "teacher");
 }
 Teacher.prototype.enrollStudent = function(student, course){
   if(course.teacher === this){
     course.students.push(student);
     student.courses.push(course);
     console.log('student added');
   }else{
     console.log('unauthorized')
   }
 }
 //inputs: 
   //string courseName
   //Teacher object
 function Course(courseName, teacher){
   this.courseName = courseName;
   this.teacher = teacher;
   this.students = [];
 }
 Course.prototype.printStudents = function() {
   this.students.forEach(student => console.log(student.name));
 }
 
 module.exports = {Person, Student, Teacher, Course};