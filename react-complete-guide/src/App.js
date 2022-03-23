import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses"; // importing component
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  // JSX is javascript XML
  // it's looks like html but not html , it's convert to javascript understandble
  // JSX also allowing to create custom component
  return (
    <div>
      {/* Adding Custom component
        You can send custom property or attributes as prop to custom component
      */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );

  // JSX transform version, up code looks like this
  // JSX just adds easy to write like HTML way
  // we can write this way too , but it's hard to understand

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   // custom element
  //   React.createElement(Expenses, { items: expenses })
  // );
};

export default App;
