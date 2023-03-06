const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// start function
function start () {
    const team = [];

    // function to handle generating manager - first bc we need a manager
    function createManager() {
        inquirer.prompt([
            {
              type: "input",
              name: "managerName",
              message: "What is the team manager's name?",
              validate: answer => {
                if (answer !== "") {
                  return true;
                }
                return "Please enter at least one character.";
              }
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the team manager's ID?",
                validate: answer => {
                  if (answer !== "") {
                    return true;
                  }
                  return "Please enter at least one character.";
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the team manager's email?",
                validate: answer => {
                  if (answer !== "") {
                    return true;
                  }
                  return "Please enter at least one character.";
                }
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is the team manager's office number?",
                validate: answer => {
                  if (answer !== "") {
                    return true;
                  }
                  return "Please enter at least one character.";
                }
            },
          ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            // push to team array
            team.push(manager);
            // call the next function that will ask what type of employee will be created next
            createTeam();
          })
    }

    // function that asks what type of employee they would like to create next
    function createTeam(){
        // similar setup to what we have listed above
        inquirer.prompt([
            {
                type: "list",
                name: "role",
                message: "Which role would you like to create next?",
                choices: ['Engineer','Intern','Done'],
            },
        ]).then(answer => {
            if (answer.role === 'Engineer') {
                createEngineer();
            } else if (answer.role === 'Intern') {
                createIntern();
            } else {
                buildTeam();
            }
        })
    }

    // function to handle generating engineer
    function createEngineer() {
        inquirer.prompt([
            {
              type: "input",
              name: "engineerName",
              message: "What is the team engineer's name?",
              validate: answer => {
                if (answer !== "") {
                  return true;
                }
                return "Please enter at least one character.";
              }
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is the team engineer's ID?",
                validate: answer => {
                  if (answer !== "") {
                    return true;
                  }
                  return "Please enter at least one character.";
                }
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is the team engineer's email?",
                validate: answer => {
                  if (answer !== "") {
                    return true;
                  }
                  return "Please enter at least one character.";
                }
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "What is the team engineer's Github username?",
                validate: answer => {
                  if (answer !== "") {
                    return true;
                  }
                  return "Please enter at least one character.";
                }
            },
          ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            // push to team array
            team.push(engineer);
            // call the next function that will ask what type of employee will be created next
            createTeam();
          })
    }

    // function to handle generating intern
    function createIntern() {
        inquirer.prompt([
            {
              type: "input",
              name: "internName",
              message: "What is the team intern's name?",
              validate: answer => {
                if (answer !== "") {
                  return true;
                }
                return "Please enter at least one character.";
              }
            },
            {
                type: "input",
                name: "internId",
                message: "What is the team intern's ID?",
                validate: answer => {
                  if (answer !== "") {
                    return true;
                  }
                  return "Please enter at least one character.";
                }
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is the team intern's email?",
                validate: answer => {
                  if (answer !== "") {
                    return true;
                  }
                  return "Please enter at least one character.";
                }
            },
            {
                type: "input",
                name: "internSchool",
                message: "What is the team intern's school?",
                validate: answer => {
                  if (answer !== "") {
                    return true;
                  }
                  return "Please enter at least one character.";
                }
            },
          ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            // push to team array
            team.push(intern);
            // call the next function that will ask what type of employee will be created next
            createTeam();
          })
    }

    // function to buildTeam - will use fs.writeFileSync & pass in the outputPath created above, call to render (dont forget to pass in the employee array), & "utf-8"
    function buildTeam() {
        fs.writeFileSync(outputPath, render(team), 'utf-8');
    }   

    createManager(); // starts of the whole chain of events. 
}

start();
