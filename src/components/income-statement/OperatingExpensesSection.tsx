
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
      <ExpenseLineItem name="Marketing Costs" value={34275.4} />
      <ExpenseLineItem name="Packing Costs" value={3941.671} />
    </>
  );
};

export default OperatingExpensesSection;
