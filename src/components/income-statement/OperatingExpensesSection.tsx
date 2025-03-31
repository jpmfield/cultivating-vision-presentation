
import React from 'react';
import ExpenseLineItem from './ExpenseLineItem';
import ExpensesHeaderSection from './ExpensesHeaderSection';
import { TableRow, TableCell } from "@/components/ui/table";

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
  
  // Calculate subtotal for standard operating expenses
  const mainExpensesTotal = mainExpenses.reduce((total, exp) => total + exp.value, 0);

  return (
    <>
      <ExpensesHeaderSection />
      
      {/* Core Operating Expenses */}
      {mainExpenses.map((expense, index) => (
        <ExpenseLineItem 
          key={index} 
          name={expense.name} 
          value={expense.value} 
        />
      ))}
      
      {/* Subtotal for core operating expenses */}
      <TableRow className="border-b border-gray-300 bg-gray-50">
        <TableCell className="pl-4 font-semibold border border-gray-300 p-2">Core Operating Expenses Subtotal</TableCell>
        <TableCell className="text-right font-semibold border border-gray-300 p-2">
          ${mainExpensesTotal.toLocaleString(undefined, {maximumFractionDigits: 0})}
        </TableCell>
      </TableRow>
      
      {/* Marketing Expenses - highlighted */}
      {marketingExpenses.map((expense, index) => (
        <ExpenseLineItem 
          key={`marketing-${index}`} 
          name={expense.name} 
          value={expense.value}
          className="bg-green-50"
        />
      ))}
      
      {/* Packing Expenses - highlighted */}
      {packingExpenses.map((expense, index) => (
        <ExpenseLineItem 
          key={`packing-${index}`} 
          name={expense.name} 
          value={expense.value}
          className="bg-yellow-50"
        />
      ))}
    </>
  );
};

export default OperatingExpensesSection;
