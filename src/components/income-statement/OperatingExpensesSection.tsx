
import React from 'react';
import ExpenseLineItem from './ExpenseLineItem';
import ExpensesHeaderSection from './ExpensesHeaderSection';

interface OperatingExpenseSectionProps {
  expenses: Array<{ name: string; value: number }>;
}

const OperatingExpensesSection: React.FC<OperatingExpenseSectionProps> = ({ expenses }) => {
  return (
    <>
      <ExpensesHeaderSection />
      {expenses.map((expense, index) => (
        <ExpenseLineItem key={index} name={expense.name} value={expense.value} />
      ))}
    </>
  );
};

export default OperatingExpensesSection;
