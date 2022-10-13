

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

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: 'enter engineer name',
    },
    {
        type: 'input',
        name: 'engineerId',
        message: 'enter engineer id',
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'enter engineer email',
    },
    {
        type: 'input',
        name: 'github',
        message: 'enter engineer github username',
    },
];

const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: 'enter intern name',
    },
    {
        type: 'input',
        name: 'internId',
        message: 'enter intern id',
    },
    {
        type: 'input',
        name: 'internEmail',
        message: 'enter intern email',
    },
    {
        type: 'input',
        name: 'internSchool',
        message: 'enter intern school name',
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
        if (data.team === 'engineer') {
        addEngineer();
        } else if (data.team === 'intern') {
        {
            addIntern();
        }
    } else if (data.team === 'none') {
        {
            console.log(`The team is complete.`)
        }    
    };    
    });
};

function addEngineer() {
    inquirer.prompt(engineerQuestions);
};



function addIntern() {
    inquirer.prompt(internQuestions)
}

    init()