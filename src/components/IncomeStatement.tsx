
import React from 'react';
import { Table, TableBody } from "@/components/ui/table";
import StatementHeader from './income-statement/StatementHeader';
import RevenueSection from './income-statement/RevenueSection';
import CogsSection from './income-statement/CogsSection';
import GrossMarginSection from './income-statement/GrossMarginSection';
import OperatingExpensesSection from './income-statement/OperatingExpensesSection';
import TotalExpensesSection from './income-statement/TotalExpensesSection';
import EbitSection from './income-statement/EbitSection';
import InterestExpenseSection from './income-statement/InterestExpenseSection';
import EbtSection from './income-statement/EbtSection';
import IncomeTaxesSection from './income-statement/IncomeTaxesSection';
import NetEarningsSection from './income-statement/NetEarningsSection';

interface IncomeStatementProps {
  year: string;
  revenueData: { name: string; value: number }[];
  variableCostsData: { name: string; value: number }[];
  fixedCostsTotal: number;
  marketingCosts: number;
  packingCosts: number;
}

const IncomeStatement: React.FC<IncomeStatementProps> = ({ 
  year, 
  revenueData, 
  variableCostsData,
  fixedCostsTotal,
  marketingCosts,
  packingCosts
}) => {
  // Values taken directly from the provided image
  const totalRevenue = 390225;
  const totalVariableCosts = 154219;
  const grossProfit = 236006;
  
  // Define operating expenses - updated to match the image
  const operatingExpenses = [
    { name: 'Land Levy', value: 18000 },
    { name: 'Wages and salaries', value: 29250 },
    { name: 'Protective Clothing', value: 3220 },
    { name: 'Fuel and lubricants', value: 6435 },
    { name: 'Electricity and water', value: 66 },
    { name: 'Stationery', value: 240 },
    { name: 'Cellphone charges', value: 480 },
    { name: 'Bank Charges', value: 240 },
    { name: 'Insurance', value: 1800 },
    { name: 'Wifi', value: 1200 },
    { name: 'Travel & Subsistence Allowance', value: 1800 },
    { name: 'Repairs & Maintanance', value: 600 },
    { name: 'First aid kit', value: 240 },
    { name: 'Service kit', value: 450 },
    { name: 'Legal fees', value: 216 },
    { name: 'Consultancy', value: 7200 },
    { name: 'Add Sundries', value: 534 }
  ];
  
  // Total expenses as per the image
  const totalExpenses = 71971;
  
  // Operating profit/EBIT as per the image
  const operatingProfit = 164035;

  return (
    <div className="income-statement w-full">
      <div className="flex justify-between items-center bg-[#1c3664] text-white p-3">
        <p className="text-sm">© KUGUTA MISSION GARDENS®. All rights reserved.</p>
      </div>
      
      <Table className="w-full border-collapse">
        <StatementHeader />
        <TableBody>
          <RevenueSection totalRevenue={totalRevenue} />
          <CogsSection totalVariableCosts={totalVariableCosts} />
          <GrossMarginSection grossProfit={grossProfit} />
          <OperatingExpensesSection expenses={operatingExpenses} />
          <TotalExpensesSection totalExpenses={totalExpenses} />
          <EbitSection operatingProfit={operatingProfit} />
          <InterestExpenseSection />
          <EbtSection operatingProfit={operatingProfit} />
          <IncomeTaxesSection />
          <NetEarningsSection operatingProfit={operatingProfit} />
        </TableBody>
      </Table>
    </div>
  );
};

export default IncomeStatement;
