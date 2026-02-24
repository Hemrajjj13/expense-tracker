# Expense Tracker (React + Redux)

A modern Expense Management Web App built with React, Redux Toolkit, and Tailwind CSS.

Track daily expenses, filter data, and visualize spending with simple analytics — all stored locally using LocalStorage.

---

## Features

### Core Features
- Add new expenses (amount, category, date, note)
- Delete expenses
- Total expense calculation
- Category-wise filtering
- Date filters:
  - This Week
  - This Month
- Minimum amount filter

### Data Persistence
- Redux state saved to LocalStorage
- Data remains after page refresh

### Analytics Dashboard
- Total spending overview
- Category-wise bar chart (no external chart library)
- Monthly comparison:
  - Current month vs Last month
  - Percentage increase/decrease
  - Trend indicators (↑ / ↓)

### UI Enhancements
- Responsive layout
- Clean Tailwind UI
- Lucide icons
- Empty states
- Simple login screen

---

## Tech Stack

- React (Vite)
- Redux Toolkit
- Tailwind CSS
- React Router
- Lucide React Icons
- LocalStorage

---

## Project Structure

src/
├─ components/
│  ├─ ExpenseForm
│  ├─ ExpenseList
│  ├─ Filters
│  ├─ Navbar
│  └─ Footer
├─ pages/
│  ├─ Dashboard
│  ├─ Analytics
│  └─ Login
├─ redux/
│  └─ expenseSlice
└─ App.jsx

---

## Installation

1. Clone the repository

git clone https://github.com/YOUR_USERNAME/expense-tracker.git

2. Install dependencies

npm install

3. Run the application

npm run dev

App runs at:  
`http://localhost:5173`

---

## How It Works

### Expense Flow
User → Form → Redux Store → LocalStorage → UI Update

### Analytics Logic
- Aggregates category totals
- Calculates monthly comparison
- Dynamic bar height based on percentage

---

## Future Improvements

- Dark mode
- Edit expense
- Authentication (Firebase)
- Export to CSV
- Charts using Recharts

---

## Author

Hemraj Suryawansi  
LinkedIn: https://www.linkedin.com/in/hemrajsuryawanshi/ 
GitHub: https://github.com/Hemrajjj13