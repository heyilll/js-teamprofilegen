# js-teamprofilegen
![badge](https://img.shields.io/badge/license-MIT-blue)

## Table of Contents
- [js-teamprofilegen](#js-teamprofilegen)
  - [Table of Contents](#table-of-contents)
  - [ Description](#-description)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ License](#-license)
  - [ Contribution guidelines](#-contribution-guidelines)
  - [ Test instructions](#-test-instructions)
  - [ Questions](#-questions)

## <a id="description"></a> Description
My task was to create a command-line application using Javascript given starter code. It should generate a HTML page through multiple prompts about the employees on a software engineering team. The HTML page should provide summaries of each employee. The application should pass all tests provided. The requirements were: 

* Create a command-line application that accepts accepts user input using the provided starter code.   
  * Create classes for each team member provided and export them. The tests for these classes (in the `_tests_` directory) must ALL pass.     
    * The first class is an `Employee` parent class with the following properties and methods:       
      * `name`
      * `id`
      * `email`
      * `getName()`
      * `getId()`
      * `getEmail()`
      * `getRole()`&mdash;returns `'Employee'`     
    * The other three classes will extend `Employee`.      
    * In addition to `Employee`'s properties and methods, `Manager` will also have the following:
      * `officeNumber`
      * `getRole()`&mdash;overridden to return `'Manager'`
    * In addition to `Employee`'s properties and methods, `Engineer` will also have the following:
      * `github`&mdash;GitHub username
      * `getGithub()`
      * `getRole()`&mdash;overridden to return `'Engineer'`
    * In addition to `Employee`'s properties and methods, `Intern` will also have the following:
      * `school`
      * `getSchool()`
      * `getRole()`&mdash;overridden to return `'Intern'`
    * Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.   
  * Write code in `index.js` that uses inquirer to gather information about the development team members and creates objects for each team member using the correct classes as blueprints.
    * When a user starts the application then they are prompted to enter the **team manager**’s:
      * Name
      * Employee ID
      * Email address
      * Office number
    * When a user enters those requirements then the user is presented with a menu with the option to:
      * Add an engineer
      * Add an intern 
      * Finish building the team
    * When a user selects the **engineer** option then a user is prompted to enter the following and then the user is taken back to the menu:
      * Engineer's Name
      * ID
      * Email
      * GitHub username
    * When a user selects the intern option then a user is prompted to enter the following and then the user is taken back to the menu:
      * Intern’s name
      * ID
      * Email
      * School
    * When a user decides to finish building their team then they exit the application, and the HTML is generated.
  * Call the `render` function (provided for you) and pass in an array containing all employee objects; 
    * The `render` function will generate and return a block of HTML including templated divs for each employee!
  * Create an HTML file using the HTML returned from the `render` function. 
    * Write it to a file named `team.html` in the `output` folder. 
    * You can use the provided variable `outputPath` to target this location.

  
## <a id="installation"></a> Installation
Run the following commands:
* npm init -y
* npm i 

## <a id="usage"></a> Usage
Run the following command inside the folder:
* node index.js

## <a id="license"></a> License
This application is covered under the MIT license.

## <a id="contribution-guidelines"></a> Contribution guidelines
N/A

## <a id="test-instructions"></a> Test instructions
Run the following command inside the folder:
* npm run test

## <a id="questions"></a> Questions
GitHub: My username is heyilll (https://github.com/heyilll)

Send any questions to: heilpark@me.com