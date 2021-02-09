// TODO: Include packages needed for this application - done
const inquirer = require('inquirer');
const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
            if(nameInput){
                return true;
            } else {
                console.log('Please enter your project Name.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: nameInput => {
          if(nameInput){
            return true;
          } else{
            console.log('Please enter a description.');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please provide the installation instructions. (Required)',
        validate: nameInput => {
          if(nameInput){
            return true;
          } else{
            console.log('Please enter installation instructions.');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide the usage information. (Required)',
        validate: nameInput => {
            if(nameInput){
              return true;
            } else{
              console.log('Please enter the usage information');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please provide the Contribution guidlines.(Required)'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide the test instructions. (Required)'
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {

            if(err){
                reject(err)
                return;
            }
            resolve({
                ok: true,
                message: 'File Created!'
            })
        });
    });

};

// TODO: Create a function to initialize app
async function init() {
    
    const response = await inquirer.prompt(questions);
    console.log(response);

    const markdown = generateMarkdown(response);
    


    await writeToFile("./README.md", markdown);

}

// Function call to initialize app
init();
