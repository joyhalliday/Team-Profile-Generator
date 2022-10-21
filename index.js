const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const renderTeam = require('./src/team');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
//import { Employee } from './employee';

const managerArray = []
const engineerArray = []
const internArray = []

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
        name: 'school',
        message: 'enter intern school name',
    },
];

function init() {
    inquirer.prompt(managerQuestions)
    .then((data) => {
        console.log(data);
        const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.office)
        managerArray.push(manager)
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
            console.log(managerArray)
            fs.writeFileSync(path.join(__dirname, "/dist/team.html"), renderTeam(managerArray, engineerArray, internArray), "utf-8")
        }  //write to file here  
    };    
    });
};

function addEngineer() {
    inquirer.prompt(engineerQuestions)
    .then(data => {
        const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.github)
        engineerArray.push(engineer)
        buildTeam();
    })

};



function addIntern() {
    inquirer.prompt(internQuestions)
    .then(data => {
        const intern = new Intern(data.internName, data.internId, data.internEmail, data.school)
        internArray.push(intern)
        buildTeam();
    })
}

// const init = () => {
//     promptUser()
//       .then((data) => writeFile('index.html', generateHTML(data)))
//       .then(() => console.log('Successfully wrote to index.html'))
//       .catch((err) => console.error(err));

    init()