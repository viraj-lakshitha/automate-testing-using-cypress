# Initialize Project

## Create Project and Install Cypress
```
# Create directory for automate testing
mkdir cypress-automate-testing
cd cypress-automate-testing

# Initialize Node Project
npm init ( or use yarn init)

# Install Cypress (make sure not to install cypress and global package) - This step take few times to execute
npm install cypress (or use yarn add cypress)

# Open Cypress (This will open an cypress application. From that you can run test files)
npx cypress open (or use yarn cypress open)

# Run Test files (This is mostly used in CI/CD to execute test files, otherwise recommended to use GUI)
npx cypress run --headless (yarn cypress run --headless)
```

## Folder Structure
```
|- cypress
    |- fixtures
    |- integrations
    |- plugins
    |- support
    |- videos
```
* This is the basic folder structure for the cypress project
  - fixture - this folder contains all your static content like login credential or any other details that you want to enter into while running test
  - integrations - this folder contains all the functionality that we are write to execute
  - plugins - this folder you can include custom plugins to enhance the feature in cypress ( for an example: let's say if you want to access google oauth to login webpage, then you have to goto new page, but its not allow in cypress. So you can use plugin to get oauth code from google oauth)
  - support - this folder you can include your re-usable code snippets and command to execute
  - videos - this is an auto generate file from cypress. Cypress will record your all test action and saved into this folder as .mp4 format

## Code Snippets
Make sure add `/// <reference types="cypress" />` at the top of the file, then it will suggest code snippets

1. Visit Webpage/Website
```
describe('Test Login Functionality', () => {
  it('Open Login Page', () => {
    cy.visit("https://devstory-portal.herokuapp.com/login")
  })
})
```