
import React from 'react';
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";

interface BudgetNoteProps {
  className?: string;
}

const BudgetNote: React.FC<BudgetNoteProps> = ({ className }) => {
  return (
    <Alert variant="default" className={`bg-amber-50 border-amber-300 ${className}`}>
      <InfoIcon className="h-4 w-4 text-amber-600 print:h-3 print:w-3" />
      <AlertTitle className="text-amber-800 print:text-xs">Important Note</AlertTitle>
      <AlertDescription className="text-amber-700 print:text-xs">
        Please note that this Budget is based on estimated figures which are subject to change. 
        Once you supply correct figures, we can provide a more accurate Budget.
      </AlertDescription>
    </Alert>
  );
};

export default BudgetNote;
