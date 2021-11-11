// setup our file to use the inquirer package
const inquirer = require('inquirer');
// imports the File System package for our script
const fs = require('fs');
const generateHTML = require('./src/generateHTML.js');
console.log(generateHTML);
let myteam = []
const Manager = require("./lib/Manager.js")
const Engineer = require("./lib/Engineer.js")
const Intern = require("./lib/Intern.js")

// array of questions for user input
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
const managerQuestions = [
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: "managerName"
    },
    {
        type: 'input',
        message: "What is the team manager's employee ID?",
        name: "managerId"
    },
    {
        type: 'input',
        message: "What is the team manager's email address?",
        name: "managerEmail"
    },
    {
        type: 'input',
        message: "What is the team manager's office number?",
        name: "managerOffice"
    }
];

// Question to add new employee
const newEmployee = [
    {
        type: 'list',
        message: "Add?",
        name: "add",
        choices: ["Engineer", "Intern", "Done"]
    }
]

// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
const engineerQuestions = [
    {
        type: 'input',
        message: "What is the engineer's name?",
        name: "engineerName"
    },
    {
        type: 'input',
        message: "What is the engineer's employee ID?",
        name: "engineerId"
    },
    {
        type: 'input',
        message: "What is the engineer's email address?",
        name: "engineerEmail"
    },
    {
        type: 'input',
        message: "What is the engineer's Github username?",
        name: "engineerGithub"
    }
];

// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
const internQuestions = [
    {
        type: 'input',
        message: "What is the intern's name?",
        name: "internName"
    },
    {
        type: 'input',
        message: "What is the intern's employee ID?",
        name: "internId"
    },
    {
        type: 'input',
        message: "What is the intern's email address?",
        name: "internEmail"
    },
    {
        type: 'input',
        message: "What is the intern's school?",
        name: "internSchool"
    }
];

// function to write HTML file
function writeToFile(template) {
    fs.writeFile('index.html', template, (err) => {
        if(err) {
            console.error(err)
        }
        else {
            console.log("successfully made")
        }
    })
}


// function to add new engineer or intern
function addNew(){
    inquirer
    .prompt(newEmployee)
    .then(answers => {
        console.log(answers);
    // if engineer is selected, runs engineer sequence
    if (answers.add === "Engineer") {
        console.log("add engineer");
        function addEngineer() {
            inquirer
            .prompt(engineerQuestions)
            .then(answers => {
                console.log(answers);
                const engineer = new Engineer (answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerOffice);
                myteam.push(engineer);
                addNew();
            })
        }
        addEngineer();
    }
    // if interns is selected, runs intern sequence
    if (answers.add === "Intern") {
        console.log("add intern");
        function addIntern() {
            inquirer
            .prompt(internQuestions)
            .then(answers => {
                console.log(answers);
                const intern = new Intern (answers.internName, answers.internId, answers.internEmail, answers.internOffice);
                myteam.push(intern);
                addNew();
            })
        }
        addIntern();
    }
    // if done is selected, ends sequence
    if (answers.add === "Done") {
        console.log("done");
        console.log(myteam);
        var templateCreate = generateHTML(myteam);
        console.log(templateCreate);
        writeToFile(templateCreate);
    }
    })
}

// function to initialize app
function init() {
    inquirer
      .prompt(managerQuestions)
      .then(answers => {
        console.log(answers);
        const manager = new Manager (answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice);
        myteam.push(manager);
        addNew();
    })
}

// function call to initialize app
init();