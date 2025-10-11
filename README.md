# 🎯 Playwright Grind

A personal practice repository to learn and experiment with [Playwright](https://playwright.dev/) for automated testing.  This repo documents my hands-on journey with Playwright—covering basics, advanced features, and QA practices.

---

## 🚀 What I Practiced in This Repo

- ✅ Writing & running tests with Playwright Test Runner  
- 🎥 Recording tests with `codegen`  
- 🔍 Finding web objects using **CSS selectors** & **locators**  
- 🧭 Usage of **Trace Viewer** for debugging test runs  
- 📝 Assertions (hard & soft)  
- 🐌 Slow motion and **video recording** of tests  
- ⚙️ Hooks (`beforeEach`, `afterEach`) & Grouping tests with `test.describe`  
- 🏷️ Annotations & tags (`test.skip`, `test.only`, `test.fail`, `@smoke`, etc.)
- 👨‍💻 Demo login tests on multiple websites (Applitools, Orange HRM, NopCommerce, Saucedemo, Herokuapp)
- 📂 **Page Object Model (POM)** structure for reusable test code
- 🌐 **API Testing** using Playwright’s `request` fixture  

---

## 📂 Project Structure

```
playwright-grind/
│
├── pages/
│ └── login.js # Page Object Model for Login
│
├── tests/
│ ├── annotationAndTags.spec.js
│ ├── api_tests.spec.js
│ ├── assertions.spec.js
│ ├── hooksAndGroups.spec.js
│ ├── loginDemo.spec.js
│ ├── loginPOM.spec.js
│ ├── recordDemo.spec.js
│ ├── recordDemo2.spec.js
│ ├── selectors.spec.js
│ └── SlowMotion_VideoRecDemo.spec.js
│
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md
```


---

## 🧪 Test Files Overview

### 🔖 `annotationAndTags.spec.js`
- Demonstrates Playwright **annotations** like `test.skip`, `test.fixme`, `test.only`, `test.slow`
- Example of tagging tests with `@smoke` for selective execution

---

### ✅ `assertions.spec.js`
- Covers Playwright’s **expect** API for:
  - Presence/visibility of elements  
  - Enabled/disabled state  
  - Text content & attributes  
  - Page URL & title checks  
  - Visual validation with screenshot  

---

### 🔄 `hooksAndGroups.spec.js`
- Usage of `beforeEach` & `afterEach` for **setup and teardown**
- Grouping multiple test cases under `test.describe`
- Example: Login → Add to cart → Logout on **Saucedemo**

---

### 🔐 `loginDemo.spec.js`
- Demo login flows for:
  - Applitools Demo
  - Orange HRM Demo
  - NopCommerce Admin Portal
- Includes form filling, navigation, and logout checks

---

### 🏗️ `loginPOM.spec.js`
- Example of **Page Object Model (POM)**
- Reusable `LoginPage` class with:
  - `gotoLoginPage()`
  - `login(username, password)` methods

---

### 🎥 `recordDemo.spec.js` & `recordDemo2.spec.js`
- Tests created via Playwright **Codegen recorder**
- Demonstrates recording flows and saving generated code
- Example: Add to cart → View cart → Logout on Saucedemo

---

### 🎯 `selectors.spec.js`
- Focus on **CSS selectors** & Playwright **locators**
- Practical usage of `locator`, `getByRole`, etc.

---

### 🐢 `SlowMotion_VideoRecDemo.spec.js`
- Demonstrates:
  - Running tests in **slow motion** with `slowMo`
  - Capturing **video recordings** of test executions
  - Cleanup after test runs with `context.close()` & `browser.close()`


---

### ⚙️ `api_tests.spec.js`

Demonstrates **API testing** with **Playwright** using the `request` fixture to send HTTP requests directly — without browser interaction. [Reqres](https://reqres.in/) Public API was used here.

#### ✅ Sample Tests Included:
- **GET** – List Users
- **GET** – Single User
- **POST** – Create User
- **PUT** – Update User
- **PATCH** – Partial Update
- **DELETE** – Remove User

#### 🔐 API Key Usage

The API endpoints (based on `reqres.in`) require an API key header:

```js
headers: {
  'x-api-key': 'reqres-free-v1'
}
```


### 🧩 Notes & Learnings

- Playwright caches browser binaries per version, so multiple versions may take extra disk space.
- Using test.only & tags (e.g. **@smoke**) helps isolate critical tests during CI/CD pipelines.
- Trace Viewer + video recordings are invaluable for debugging failed runs.
- POM makes test scripts more maintainable & scalable.
- Playwright can perform both UI and API testing in one framework. Combining API + UI tests ensures robust end-to-end coverage.

### 📌 Future Improvements

- Real world scenario **POM** implementation
- Store API keys in environment variables
- Add API test assertions for schema validation
- Combine UI + API tests for hybrid workflows
- Hands-on practice for CI/CD