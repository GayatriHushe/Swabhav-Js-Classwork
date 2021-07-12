class Student {
    constructor(name, cgpa, ) {
        this.name = name;
        this.cgpa = cgpa;
    }
}

var student1 = new Student("Abc", 9.85);
var student2 = new Student("Def", 8.59);
var student3 = new Student("Mno", 9.52);
var student4 = new Student("Pqr", 10);
var student5 = new Student("Xyz", 9.69);

var students = [student1, student2, student3, student4, student5];

var count = 0;
var sum = 0;
var max = student1.cgpa;
var maxStudentName = student1.name;
var min = student1.cgpa;
var minStudentName = student1.name;

students.forEach(element => {
    sum += element.cgpa;
    count++;
    if (max < element.cgpa) {
        max = element.cgpa;
        maxStudentName = element.name;
    }
    if (min > element.cgpa) {
        min = element.cgpa;
        minStudentName = element.name;
    }
});

console.log("Total no of students : " + count);
console.log("Sum of cgpa of all students : " + sum);
console.log("Max cgpa is " + max + " of Student " + maxStudentName);
console.log("Min cgpa is " + min + " of Student " + minStudentName);
console.log("Average cgpa of 5 students is " + (sum / count));