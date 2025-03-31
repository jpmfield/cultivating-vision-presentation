
import React from 'react';
import ExpenseLineItem from './ExpenseLineItem';
import ExpensesHeaderSection from './ExpensesHeaderSection';

interface OperatingExpenseSectionProps {
  expenses: Array<{ name: string; value: number }>;
}

const OperatingExpensesSection: React.FC<OperatingExpenseSectionProps> = ({ expenses }) => {
  // Group expenses into categories for better organization
  const mainExpenses = expenses.filter(exp => 
    !['Marketing Costs', 'Packing Costs'].includes(exp.name)
  );
  
  const marketingExpenses = expenses.filter(exp => exp.name === 'Marketing Costs');
  const packingExpenses = expenses.filter(exp => exp.name === 'Packing Costs');

  return (
    <>
      <ExpensesHeaderSection />
      
      {/* Core Operating Expenses */}
      {mainExpenses.map((expense, index) => (
        <ExpenseLineItem key={index} name={expense.name} value={expense.value} />
      ))}
      
      {/* Marketing Expenses - highlighted */}
      {marketingExpenses.map((expense, index) => (
        <ExpenseLineItem 
          key={`marketing-${index}`} 
          name={expense.name} 
          value={expense.value} 
        />
      ))}
      
      {/* Packing Expenses - highlighted */}
      {packingExpenses.map((expense, index) => (
        <ExpenseLineItem 
          key={`packing-${index}`} 
          name={expense.name} 
          value={expense.value} 
        />
      ))}
    </>
  );
};

export default OperatingExpensesSection;
