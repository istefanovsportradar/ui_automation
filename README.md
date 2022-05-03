

# WebDriverIO ui automation project

The example starter project for WebDrierIO UI tests. Application Under test will be SynergyStats and for fixture creating comp admin.

# Project installation

1. Clone the git repository - https://github.com/istefanovsportradar/ui_automation.git
2. Run “npm install”
3. Ask for .env and other files

# Running tests

  ## Local run
  1. In VSC terminal run: "npm run test"

    Results: This run will trigger all tests in parallel.

  2. If you want to run a speccific test do following steps:

    - Go to wdio.config.ts file
    - Find specs attribute
    - Change from './test/specs/**/*.ts'
    - To './test/specs/**/{name_of_the_test}.test.ts'

# Project structure

1. WebDriverIO/test/**specs** -> In this folder we will keep the test files which we will run

2. WebDriverIO/test/**pageobjects** -> In this folder we will keep page objects, elements and functions

3. WebDriverIO/**_results_** -> In this folder we will keep the recorded video after every test