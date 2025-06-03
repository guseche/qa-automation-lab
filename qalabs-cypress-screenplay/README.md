# QA Labs - Cypress Screenplay Implementation

This project is a practical implementation of the **Screenplay Pattern** using **Cypress** for end-to-end testing. The tests are designed to validate the functionality of the productivity dashboard at [qalabs.guseche.com](https://qalabs.guseche.com).

## 🎯 Project Overview

The Screenplay Pattern is an approach to writing automated tests that focuses on user interactions and behaviors rather than technical implementation details. This pattern makes tests more readable, maintainable, and follows the SOLID principles.

### Key Features
- **Screenplay Pattern Implementation** with Cypress
- **Cucumber BDD** integration for behavior-driven testing
- **Custom HTML Reports** with screenshots
- **Modular Architecture** with clear separation of concerns
- **Path Aliases** for clean imports

## 🏗️ Project Structure

```
qalabs-cypress-screenplay/
├── cypress/
│   ├── e2e/
│   │   ├── features/                     # Gherkin feature files
│   │   │   └── productivity-qa-labs.feature
│   │   └── step_definitions/             # Cucumber step definitions
│   │       └── productivityStepDefinitions.js
│   ├── fixtures/                         # Test data files
│   └── support/
│       ├── commands.js                   # Custom Cypress commands
│       ├── e2e.js                        # Global test configuration
│       ├── screenplay/                   # Screenplay pattern implementation
│       │   ├── core/                     # Core screenplay classes
│       │   │   ├── Actor.js             # Actor implementation
│       │   │   ├── Task.js              # Abstract Task class
│       │   │   └── Interaction.js       # Abstract Interaction class
│       │   ├── interactions/            # Low-level user interactions
│       │   │   ├── Click.js
│       │   │   ├── Enter.js
│       │   │   ├── Select.js
│       │   │   ├── Open.js
│       │   │   ├── WaitFor.js
│       │   │   └── WaitUntil.js
│       │   ├── tasks/                   # High-level business tasks
│       │   │   ├── GoTo.js
│       │   │   └── FillFormTask.js
│       │   └── questions/               # Assertions and validations
│       │       └── Ensure.js
│       └── selectors/                   # Page element selectors
│           ├── index.js
│           ├── menuSelectors.js
│           └── productivityDashboard.js
├── reports/                             # Generated test reports
├── cypress.config.js                   # Cypress configuration
├── jsconfig.json                       # JavaScript path aliases
├── package.json                        # Dependencies and scripts
└── report-format.js                    # Custom report formatting
```

## 🎭 Screenplay Pattern Components

### 1. **Actor** ([`Actor.js`](cypress/support/screenplay/core/Actor.js))
Represents the user who performs actions in the system.

```javascript
let gabriel = Actor.theActorNamed("gabriel");
```

### 2. **Tasks** ([`tasks/`](cypress/support/screenplay/tasks/))
High-level business operations that combine multiple interactions.

```javascript
gabriel.attemptsTo(
    FillFormTask.withData(dataTable.rowsHash())
);
```

### 3. **Interactions** ([`interactions/`](cypress/support/screenplay/interactions/))
Low-level user actions like clicking, typing, or selecting.

```javascript
gabriel.attemptsTo(
    Click.on(selector),
    Enter.theValue("text").into(field)
);
```

### 4. **Questions** ([`questions/`](cypress/support/screenplay/questions/))
Assertions and validations about the system state.

```javascript
gabriel.attemptsTo(
    Ensure.that(selector).textContains("expected text")
);
```

## 🧪 Test Scenarios

The project includes comprehensive tests for the productivity dashboard:

### Feature: Productivity Dashboard
- **View main metrics**: Validates dashboard displays level, XP, tasks completed, focus time, and productivity percentage
- **Add new task**: Tests the complete flow of creating a new task with all required fields

## 🛠️ Setup and Installation

1. **Clone the repository**
```bash
git clone https://github.com/guseche/qa-automation-lab.git
cd qalabs-cypress-screenplay
```

2. **Install dependencies**
```bash
npm install
```

3. **Run tests**
```bash
npx cypress run
```

4. **Open Cypress UI**
```bash
npx cypress open
```

## 📊 Reporting

The project generates comprehensive HTML reports with:
- **Cucumber integration** for BDD reporting
- **Screenshots** for each test step
- **Custom formatting** via [`report-format.js`](report-format.js)
- **Multiple format support** (JSON, HTML)

Reports are generated in the `reports/` directory after test execution.

## ⚙️ Configuration

### Path Aliases ([`jsconfig.json`](jsconfig.json))
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@screenplay/*": ["cypress/support/screenplay/*"],
      "@tasks/*": ["cypress/support/screenplay/tasks/*"]
    }
  }
}
```

### Cypress Configuration ([`cypress.config.js`](cypress.config.js))
- **Cucumber preprocessor** integration
- **Custom screenshot** and reporting setup
- **Automatic report generation** after test runs

## 🎯 Key Benefits

1. **Readability**: Tests read like natural language
2. **Maintainability**: Changes to UI only require updates to selectors
3. **Reusability**: Interactions and tasks can be reused across tests
4. **Scalability**: Easy to add new features and test scenarios
5. **Reporting**: Rich HTML reports with visual feedback

## 🌐 Test Environment

- **Application Under Test**: [qalabs.guseche.com](https://qalabs.guseche.com)
- **Framework**: Cypress 14.3.3
- **Pattern**: Screenplay
- **BDD**: Cucumber integration
- **Language**: JavaScript (ES6+)

## 📝 Writing New Tests

1. **Add feature file** in [`cypress/e2e/features/`](cypress/e2e/features/)
2. **Create step definitions** in [`cypress/e2e/step_definitions/`](cypress/e2e/step_definitions/)
3. **Add selectors** in [`cypress/support/selectors/`](cypress/support/selectors/)
4. **Create tasks/interactions** as needed in [`cypress/support/screenplay/`](cypress/support/screenplay/)

This implementation demonstrates how the Screenplay Pattern can make Cypress tests more maintainable and expressive while providing excellent reporting capabilities.