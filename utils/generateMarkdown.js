// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  [![License: ${data.license}](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://img.shields.io/badge/${data.license}%20v2-blue.svg)

  ## Table of Contents
  - [Description](#description)
  - [Install](#install)
  - [Usage](#usage)
  - [Contribute](#contribute)
  - [Test](#test)
  - [License](#license)
  - [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contribute
  ${data.contribute}

  ## Test
  ${data.test}

  ## License
  ${data.license}

  ## Questions
  ${data.username}</br>
  ${data.email}

  
`;
}

module.exports = generateMarkdown;
