'use client';
import { useEffect, useState } from 'react';
import { getSheetData } from '../lib/sheetData';
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, XAxis, YAxis, CartesianGrid, Bar, ResponsiveContainer } from 'recharts';
import Navbar from '@/app/compoents/Navbar';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#00C49F', '#FFBB28'];

const getGroupedData = (data, key) => {
  const map = new Map();
  data.forEach(item => {
    const value = item[key] || 'Unknown';
    map.set(value, (map.get(value) || 0) + 1);
  });
  return Array.from(map.entries()).map(([name, value]) => ({ name, value }));
};

export default function PieChartData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const sheet = await getSheetData();
      setData(sheet);
      setLoading(false);
    }
    loadData();
  }, []);

  if (loading) return <p className="text-center py-8">Loading Dashboard...</p>;

  // Chart Data
  const riceVariantData = getGroupedData(data, 'Rice Varient');
  const finalReprocessData = getGroupedData(data, 'Final / Reprocess');
  const goodsAllocationData = getGroupedData(data, 'Goods Allocation');

  // Dispatch Chart: Group Quantity by Location
  const dispatchData = [];
  const locationMap = new Map();

  data.forEach(row => {
    const location = row['Location'] || 'Unknown';
    const qty = parseFloat(row['QTY. (in Qtl)']) || 0;
    locationMap.set(location, (locationMap.get(location) || 0) + qty);
  });

  for (let [name, value] of locationMap) {
    dispatchData.push({ name, value: parseFloat(value.toFixed(2)) });
  }

  return (
    <>
      <div className="px-20 mb-20">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">Dashboard</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
        {/* Rice Variant Pie Chart */}
        <div className=''>
          <h2 className="text-xl font-semibold mb-2 text-red-500">Rice Variant Distribution</h2>
          <div className='w-40 h-40 absolute top-40 left-20 bg-blue-100 blur-3xl'></div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={riceVariantData} dataKey="value" nameKey="name" outerRadius={100} label>
                {riceVariantData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Dispatch Bar Chart */}
        {/* <div>
          <h2 className="text-xl font-semibold mb-2 text-red-500">Dispatch by Location (QTL)</h2>
          <div className='w-40 h-40 absolute top-40 right-20 bg-red-100 blur-3xl'></div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dispatchData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" name="Quantity (QTL)" />
            </BarChart>
          </ResponsiveContainer>
        </div> */}

        {/* Final/Reprocess Pie Chart */}
        {/* <div>
          <h2 className="text-xl font-semibold mb-2 text-red-500">Final / Reprocess Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={finalReprocessData} dataKey="value" nameKey="name" outerRadius={100} label>
                {finalReprocessData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div> */}

        {/* Goods Allocation Pie Chart */}
        {/* <div>
          <h2 className="text-xl font-semibold mb-2 text-red-500">Goods Allocation Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={goodsAllocationData} dataKey="value" nameKey="name" outerRadius={100} label>
                {goodsAllocationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div> */}
        </div>
      </div>
    </>
  );
}
