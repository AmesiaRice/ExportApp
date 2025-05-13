import Navbar from '@/app/compoents/Navbar';
import Link from 'next/link';
import React from 'react';

const ExportFields = () => {
  const tabs = [
    { href: 'forms/arrival', label: 'Arrival' },
    { href: 'forms/jobOutput', label: 'Job Output' },
    { href: 'forms/jobInput', label: 'Job Input' },
    { href: 'forms/dispatch', label: 'Dispatch' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Export Forms</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {tabs.map((tab) => (
            <Link key={tab.href} href={tab.href}>
              <div className="cursor-pointer p-6 rounded-2xl shadow-md bg-white text-center hover:bg-blue-100 hover:shadow-lg transition-all duration-200">
                <h2 className="text-xl font-semibold text-gray-700">{tab.label}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExportFields;
