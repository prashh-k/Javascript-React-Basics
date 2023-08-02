class User {
    constructor(_details) {
        this.name = _details.name;
        this.city = _details.city;
        this.location = _details.location;
        this.mobile = _details.mobile
    }
    printDetails() {
        console.log(this.name);
        console.log(this.city);
        console.log(this.location);
        console.log(this.mobile)
    }
}

let details = {
    name: "Prashant ",
    city: "Ulhasnagar",
    location: "Mandir",  
    mobile: 7219047636

}

let user = new User(details)
user.printDetails();

class Student extends User {
    //printDetails() {}
    checkAttendence(){}
    submitAssignment(){}
}

class Teacher extends User {
    //printDetails() {}
    markAttendence() {}
    addTestResult() {}
    viewStudentProfile() {}
}

class clerk extends User {
    //printDetails() {}
    addStudentFeeDetails(){}
    printMonthlyCatalog(){}
}

// Above is in every class contains  printDetails()
// So instead of writing printDetails() seperate seperately in every classes ,
// We can Create a parent for above classes, and we can extend child with parent i.e extend student (child) class with User (parent) class       
// This is called Inheritence.
// Inheritence is acquiring the property of parent.
// multiple Inheritence => 1 child can have more than 1 parent.
// multiple inheritence is used only in C language.
// multiLevel Inheritence => From Praent to child class and again child to next child class.


let student = new Student(details);
student.printDetails() ;
console.log(student.city);



