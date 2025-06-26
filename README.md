# SauceDemo Login Tests (WebDriverIO)

This project automates login functionality tests for [saucedemo.com](https://www.saucedemo.com) using **WebDriverIO**.

## ✅ Covered Scenarios (Use Cases)

- **UC-1:** Login with empty credentials  
- **UC-2:** Login with missing password  
- **UC-3:** Login with valid username and password

Each test includes proper validation of error messages or dashboard title.

All tests include:
- **Parallel execution**
- **Logging**
- **Data Provider** (for valid/invalid users)
- **Page Object Model** for maintainable structure

## 🧰 Tools & Stack

- **Test Tool**: WebDriverIO
- **Framework**: Mocha
- **Locators**: CSS
- **Browsers**: Chrome, Edge
- **Assertions**: `expect` from Mocha/WebDriverIO
- **Logging**: `console.log` where appropriate
- **Parallel run**: via WebDriverIO config

## 🚀 Run tests

Install dependencies and run:

```bash
npm install
npm test

📝 Note: Make sure you have Chrome and Edge installed, since the tests run in both.