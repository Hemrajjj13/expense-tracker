# Smart Expense Tracker (With Analytics)

A modern expense management application built with **React + Redux Toolkit** that demonstrates scalable state architecture, memoized selectors, persistent storage, and custom analytics visualization — **without external chart libraries**.

---

## Overview

Smart Expense Tracker is a portfolio-ready project that simulates a real-world personal finance dashboard. It focuses on **clean state management**, **derived data computation**, and **performance optimization** while maintaining a simple and intuitive user experience.

This project highlights advanced frontend engineering concepts such as:

* Normalized Redux state
* Memoized selectors
* Route protection
* Persistent state using `localStorage`
* Custom analytics built with Tailwind and plain div elements

---

## Features

### 1. Authentication (Simulated)

* Fake login screen using a Redux **auth slice**
* Protected dashboard routes
* Redirect unauthenticated users
* Session persistence via `localStorage`

---

### 2. Expense Management (CRUD)

Create and manage expenses with the following fields:

* Amount
* Category
* Date
* Note

Actions supported:

* Add expense
* Edit expense
* Delete expense

State is stored in a **normalized structure** for efficient updates.

---

### 3. Advanced Filters

Filter expenses dynamically by:

* Date range
* Category
* Amount range

Filtering logic is implemented using **memoized selectors** for optimal performance.

---

### 4. Analytics Dashboard

The dashboard provides actionable insights:

#### Metrics

* Total spending
* Monthly spending comparison
* Category-wise breakdown

#### Visualization

* Custom **bar charts built using Tailwind + divs**
* No external chart libraries used
* Fully derived from Redux selectors

---

### 5. Persistent State

* Entire Redux store is saved to `localStorage`
* Automatically rehydrated on app load
* Includes auth session and expense data

---

## Tech Stack

* **React**
* **Redux Toolkit**
* **React Router**
* **Tailwind CSS**
* **LocalStorage API**

---

## Architecture Highlights

### Redux

* Feature-based slices:

  * `authSlice`
  * `expensesSlice`
* Normalized expense state
* Centralized store configuration

### Selectors

* `useSelector` optimization
* **Memoized selectors** using `createSelector`
* Derived state:

  * Filtered expenses
  * Total spending
  * Monthly aggregates
  * Category totals

---

### Routing

* Protected routes for authenticated users
* `useNavigate` for redirects
* `useParams` for editing specific expenses

---

### Forms

* Fully controlled inputs
* Validation-ready structure
* Reusable form logic

---

### Effects & Cleanup

* `useEffect` for:

  * Store persistence
  * Rehydration
  * Auth checks
* Proper cleanup patterns implemented

---

## Project Structure

```
src/
│
├── app/
│   └── store.js
│
├── features/
│   ├── auth/
│   │   ├── authSlice.js
│   │   └── LoginPage.jsx
│   │
│   └── expenses/
│       ├── expensesSlice.js
│       ├── selectors.js
│       ├── ExpenseForm.jsx
│       ├── ExpenseList.jsx
│       └── Filters.jsx
│
├── components/
│   ├── ProtectedRoute.jsx
│   ├── BarChart.jsx
│   └── SummaryCards.jsx
│
├── pages/
│   └── Dashboard.jsx
│
└── utils/
    └── localStorage.js
```

---

## Key Concepts Demonstrated

| Concept             | Implementation                          |
| ------------------- | --------------------------------------- |
| Redux slices        | Feature-based modular state             |
| State normalization | Efficient CRUD operations               |
| Memoized selectors  | Performance optimization                |
| Derived state       | Analytics & filtered data               |
| Route protection    | Auth-based navigation control           |
| Controlled forms    | Reliable form state handling            |
| Persistence         | Store saved & restored via localStorage |
| Custom charts       | Tailwind-based visualizations           |

---

## Getting Started

### 1. Clone the repository

```bash
git clone <repo-url>
cd smart-expense-tracker
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm start
```

App will be available at:

```
http://localhost:3000
```

---

## Future Enhancements

* Real authentication (JWT / Firebase)
* Dark mode
* Export reports (CSV / PDF)
* Budget limits & alerts
* Cloud sync backend
* Advanced charts (line, pie)

---

## Why This Project Matters

This project demonstrates **production-grade frontend patterns**:

* Scalable Redux architecture
* Performance-conscious data flow
* Real-world analytics use cases
* Clean UI without heavy dependencies

Ideal for:

* Frontend portfolios
* React/Redux interviews
* Demonstrating state management expertise

---

## License

MIT
