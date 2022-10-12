const inquirer = require(`inquirer`);
const fs = require('fs');

const employeeQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'enter employee name',
    },
    {
        type: 'input',
        name: 'id',
        message: 'enter employee id',
    },
    {
        type: 'input',
        name: 'email',
        message: 'enter employee email',
    },
];

function init() {
    inquirer.prompt(employeeQuestions)
    .then((data) => {
        console.log(data);
    });
};
    


class Employee {
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

    init()