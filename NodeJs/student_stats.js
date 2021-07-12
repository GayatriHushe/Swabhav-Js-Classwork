var student = {
    getName: function() {
        return this.name;
    },
    getCgpa: function() {
        return this.cgpa;
    }
}
var student1 = Object.create(student);
student1.name = "abc";
student1.cgpa = 9.52;

var s2 = Object.create(student);
s2.name = "def";
s2.cgpa = 8.59;

var s3 = Object.create(student);
s3.name = "abc";
s3.cgpa = 9.85;

var s4 = Object.create(student);
s4.name = "abc";
s4.cgpa = 10;

var s5 = Object.create(student);
s5.name = "abc";
s5.cgpa = 9.69;

var students = [student1, s2, s3, s4, s5];

var count = 0;
var sum = 0;
var max = student1.getCgpa();
var maxStudentName = student1.getName();
var min = student1.getCgpa();
var minStudentName = student1.getName();

students.forEach(element => {
    sum += element.getCgpa();
    count++;
    if (max < element.getCgpa()) {
        max = element.getCgpa();
        maxStudentName = element.getName();
    }
    if (min > element.getCgpa()) {
        min = element.getCgpa();
        minStudentName = element.getName();
    }
});

console.log("Total no of students : " + count);
console.log("Sum of cgpa of all students : " + sum);
console.log("Max cgpa is " + max + " of Student " + maxStudentName);
console.log("Min cgpa is " + min + " of Student " + minStudentName);
console.log("Average cgpa of 5 students is " + (sum / count));