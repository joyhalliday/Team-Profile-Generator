export class Employee {
    constructor(name, id, email) {
        employeeQuestions.name = name;
        employeeQuestions.id = id;
        employeeQuestions.email= email;
    }    
    getName() {
        console.log(`The employee name is ${employeeQuestions.name}.`)
    };   

    getId() {
        console.log(`The employee id is ${employeeQuestions.id}`)
    };

    getEmail() {
        console.log(`The employee email is ${employeeQuestions.email}.`)
    };
    }