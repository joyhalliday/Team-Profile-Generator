
//import inquirer from 'inquirer';
const fs = require('fs');
const inquirer = require('inquirer');
//import { Employee } from './employee';

const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'enter manager name',
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'enter manager id',
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'enter manager email',
    }, 
    {
        type: 'input',
        name: 'office',
        message: 'enter office number',
    }, 
]

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
    inquirer.prompt(managerQuestions)
    .then((data) => {
        console.log(data);
    buildTeam()   
    });
};
    
function buildTeam() {
    inquirer.prompt(
        {
            type: 'list',
            name: 'team',
            message: 'Would you like to add to your team?',
            choices: ['engineer', 'intern', 'none'],
        }
    )
    .then((data) => {
        console.log(data.team);
    })
}



    init()