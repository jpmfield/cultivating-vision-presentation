
import React from 'react';

interface DataTableProps {
  headers: string[];
  data: (string | number)[][];
  caption?: string;
}

const DataTable: React.FC<DataTableProps> = ({ headers, data, caption }) => {
  return (
    <div className="table-container">
      {caption && <p className="text-center text-gray-600 mb-2">{caption}</p>}
      <table className="data-table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
