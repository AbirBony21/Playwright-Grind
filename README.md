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


### 🧩 Notes & Learnings

- Playwright caches browser binaries per version, so multiple versions may take extra disk space.
- Using test.only & tags (e.g. **@smoke**) helps isolate critical tests during CI/CD pipelines.
- Trace Viewer + video recordings are invaluable for debugging failed runs.
- POM makes test scripts more maintainable & scalable.

### 📌 Future Improvements

- Real world scenario **POM** implementation
- Add **API testing** with Playwright’s request context