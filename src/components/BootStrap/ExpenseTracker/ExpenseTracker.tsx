import { useState } from "react";
import { ExpenseFilter } from "./ExpenseFilter";
import { ExpenseTable } from "./ExpenseTable";
import { ExpenseForm } from "./ExpenseForm";

export interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

export const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState<Expense[]>([
    {
      id: 1,
      description: "Lunch",
      amount: 15.5,
      category: "food",
    },
    {
      id: 2,
      description: "Movie ticket",
      amount: 10,
      category: "entertainment",
    },
    {
      id: 3,
      description: "Books",
      amount: 25.99,
      category: "education",
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  const onDelete = (id: number) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  };

  const onAddExpense = (expense: Expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm addExpense={onAddExpense} />
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={setSelectedCategory} />
        <ExpenseTable expenses={visibleExpenses} onDelete={onDelete} />
      </div>
    </div>
  );
};
