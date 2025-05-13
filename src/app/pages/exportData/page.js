'use client';
import { useEffect, useState } from 'react';
import { getSheetData } from '../../lib/sheetData';
import Navbar from '@/app/compoents/Navbar';

export default function ExportData() {
  const [originalData, setOriginalData] = useState([]);
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const sheetData = await getSheetData();
        setOriginalData(sheetData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const headers = originalData.length > 0 ? Object.keys(originalData[0]) : [];

  // Step 1: Apply filters to data
  const filteredData = originalData.filter(row =>
    Object.entries(filters).every(([key, value]) =>
      value ? String(row[key]).toLowerCase() === String(value).toLowerCase() : true
    )
  );

  const totalQty= filteredData.reduce((sum,row)=>{
     const qty = parseFloat(row['QTY. (in Qtl)']) || 0;
     return sum + qty;
  },0)

  const totalBags = filteredData.reduce((sum, row) => {
  const bags = parseFloat(row['No. of Bags']) || 0;
  return sum + bags;
}, 0);
  // Step 2: Build dynamic options based on currently filtered data
  const getOptionsForColumn = (column) => {
    const scopedData = originalData.filter(row =>
      Object.entries(filters).every(([key, value]) => {
        if (key === column || !value) return true;
        return String(row[key]).toLowerCase() === String(value).toLowerCase();
      })
    );
    return [...new Set(scopedData.map(row => row[column]))].filter(Boolean);
  };

  const handleFilterChange = (header, value) => {
    setFilters((prev) => ({
      ...prev,
      [header]: value || '',
    }));
  };

  return (
    <>
      <Navbar />
      <div className="px-6 py-4">
        <h2 className="text-2xl font-semibold mb-4">Export Data</h2>

        {/* Totals Display */}
<div className="mb-4 p-4 bg-white rounded shadow-sm flex flex-col sm:flex-row sm:items-center gap-4 text-sm font-medium">
  <div>Total Quantity (in Qtl): <span className="text-blue-600">{totalQty}</span></div>
  <div>Total No. of Bags: <span className="text-green-600">{totalBags}</span></div>
</div>

        {/* Cascading Filters */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6">
        {headers.filter(header => header !== 'Sno' && header !== 'Lot No' && header !== 'QTY. (in Qtl)' && header !== 'Final Wt (Y / N)').map((header) => {
            const options = getOptionsForColumn(header);
            return (
              <div key={header}>
                <label className="block text-sm font-medium mb-1">{header}</label>
                <select
                  value={filters[header] || ''}
                  onChange={(e) => handleFilterChange(header, e.target.value)}
                  className="w-full border px-2 py-1 rounded text-sm"
                >
                  <option value="">All</option>
                  {options.map((val, i) => (
                    <option key={i} value={val}>{val}</option>
                  ))}
                </select>
              </div>
            );
          })}
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border w-full text-sm">
            <thead>
              <tr>
                {headers.map((header) => (
                  <th key={header} className="border px-3 py-2 bg-gray-100 text-left">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, i) => (
                <tr key={i} className="border-t">
                  {headers.map((header) => (
                    <td key={header} className="border px-3 py-2">
                      {row[header]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {filteredData.length === 0 && (
            <p className="text-center text-sm mt-4 text-red-500">No results match the selected filters.</p>
          )}
        </div>
      </div>
    </>
  );
}
