**Bredly Playwright E2E Test Framework**

This repository contains the End-to-End (E2E) testing framework for epexspot applications, built using Playwright. 
The framework is designed for reliable and fast cross-browser testing of web applications.

Sample Report : 
<img width="1462" height="766" alt="image" src="https://github.com/user-attachments/assets/ce40c19c-6427-4257-bef2-951cdc3e0166" />


Prerequisites Before you begin, ensure you have the following installed on your machine:

Node.js (LTS version recommended)

npm (Node Package Manager)

Getting Started Follow these steps to set up and run the test framework locally.

Clone the repository:

git clone https://github.com/nileshraval2305/Bradley_Playwright_Automation.git

Navigate into the project directory:

cd Bradley_Playwright_Automation

**Install project dependencies:** This will download all the required Playwright libraries and other packages.

**npm install** and  **npm init playwright@latest** Running Tests You can run tests from the command line using Playwright's CLI.

Run All Tests To execute all tests defined in the tests/ directory:

**npx playwright test**

Test Reports After a test run, Playwright automatically generates a detailed HTML report.

To view the report, run the following command in your terminal:

**npx playwright show-report**

Framework Structure The framework is organized using a Page Object Model (POM) and follows a clear, logical structure.

tests/-> this directory contains all the test specification files. Each file, typically with a .spec.js or .spec.ts extension, describes a set of tests for a specific feature or component of the application

pages/: This is where you'll find the Page Object Model (POM) classes. Each class represents a specific page or major component of your application, containing locators and methods to interact with elements on that page. This approach makes tests more maintainable and readable.

Page Fixtures : a fixture is a way to share objects or setup code across your tests.

Testdata : Test data refers to the inputs, credentials, or other information used during your automated test. 

**Playwright-TestReport :** A test report provides a summary of test execution, including which tests passed, failed, or were skipped.


**Note : after test run you will see extract data from market-data.csv under Test-data foler**
