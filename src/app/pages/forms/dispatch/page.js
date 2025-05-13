"use client"
import Navbar from '@/app/compoents/Navbar';
import React, { useState } from 'react';

const DispatchForm = () => {
  const [showStackForm, setShowStackForm] = useState(false);
  const [showJobForm, setShowJobForm] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-10 grid gap-7">
        {/* Stack Form Button */}
        <div
          onClick={() => setShowStackForm((prev) => !prev)}
          className="cursor-pointer p-6 rounded-2xl shadow-md bg-white text-center hover:bg-blue-100 hover:shadow-lg transition-all duration-200"
        >
          <h1 className="text-xl font-semibold text-gray-700">Stack Form</h1>
        </div>

        {/* Stack Form */}
        {showStackForm && (
          <form className="bg-white p-6 rounded-xl shadow-md grid gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Stack Number</label>
              <input
                type="text"
                placeholder="Enter stack number"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Quantity</label>
              <input
                type="number"
                placeholder="Enter quantity"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Submit Stack Dispatch
            </button>
          </form>
        )}

        {/* Job Form Button */}
        <div
          onClick={() => setShowJobForm((prev) => !prev)}
          className="cursor-pointer p-6 rounded-2xl shadow-md bg-white text-center hover:bg-green-100 hover:shadow-lg transition-all duration-200"
        >
          <h1 className="text-xl font-semibold text-gray-700">Job Form</h1>
        </div>

        {/* Job Form */}
        {showJobForm && (
          <form className="bg-white p-6 rounded-xl shadow-md grid gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Job Reference</label>
              <input
                type="text"
                placeholder="Enter job reference"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Dispatcher Name</label>
              <input
                type="text"
                placeholder="Enter dispatcher name"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
            >
              Submit Job Dispatch
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default DispatchForm;
