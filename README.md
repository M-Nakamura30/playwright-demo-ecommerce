# E-commerce E2E Test Automation with Playwright

## 🎯 Overview

Production-ready E2E test suite demonstrating modern test automation practices.

**Key Features:**
- Page Object Model (POM) pattern
- TypeScript for type safety
- Cross-browser testing (Chrome, Firefox, Safari)
- CI/CD integration with GitHub Actions
- HTML test reporting

## 🛠 Tech Stack

- [Playwright](https://playwright.dev/) - Test framework
- TypeScript
- GitHub Actions - CI/CD

## 🧪 Test Coverage

| Feature | Test Cases | Status |
|---------|------------|--------|
| Login | - | 🔄 In Progress |
| Cart | - | 📋 Planned |
| Checkout | - | 📋 Planned |

## 📁 Project Structure
```
├── tests/           # Test files
├── pages/           # Page Object Model classes
├── fixtures/        # Test fixtures and data
├── playwright.config.ts
└── .github/workflows/playwright.yml
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm

### Installation
```bash
npm install
npx playwright install
```

### Run Tests
```bash
# Run all tests
npx playwright test

# Run with UI
npx playwright test --ui

# Run specific test file
npx playwright test tests/login.spec.ts
```

### View Report
```bash
npx playwright show-report
```

## 🔗 CI/CD

Tests run automatically on every push via GitHub Actions.

![Playwright Tests](https://github.com/M-Nakamura30/playwright-demo-ecommerce/actions/workflows/playwright.yml/badge.svg)

## 📝 Test Target

This demo uses [Sauce Demo](https://www.saucedemo.com/) - a sample e-commerce site for testing.

## 👤 Author

**Masato Nakamura**
- 8 years of QA experience
- Specializing in test automation

---

*This project demonstrates my approach to building maintainable, scalable test automation frameworks.*