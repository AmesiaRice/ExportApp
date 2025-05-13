"use client"
import Navbar from '@/app/compoents/Navbar';
import React, { useState } from 'react';

const JobInputForm = () => {
  const [showDispatchForm, setShowDispatchForm] = useState(false);
  const [showStackForm, setShowStackForm] = useState(false);
  const [showJobForm, setShowJobForm] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-10 grid gap-7">
        {/* Dispatch Form Button */}
        <div
          onClick={() => setShowDispatchForm((prev) => !prev)}
          className="cursor-pointer p-6 rounded-2xl shadow-md bg-white text-center hover:bg-purple-100 hover:shadow-lg transition-all duration-200"
        >
          <h1 className="text-xl font-semibold text-gray-700">Dispatch Form</h1>
        </div>

        {/* Dispatch Form */}
        {showDispatchForm && (
          <form className="bg-white p-6 rounded-xl shadow-md grid gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Dispatch ID</label>
              <input
                type="text"
                placeholder="Enter dispatch ID"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Destination</label>
              <input
                type="text"
                placeholder="Enter destination"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <button
              type="submit"
              className="bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
            >
              Submit Dispatch
            </button>
          </form>
        )}

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
              <label className="block text-sm font-medium text-gray-700">Stack Code</label>
              <input
                type="text"
                placeholder="Enter stack code"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Material Type</label>
              <input
                type="text"
                placeholder="Enter material type"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Submit Stack
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
              <label className="block text-sm font-medium text-gray-700">Job ID</label>
              <input
                type="text"
                placeholder="Enter job ID"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Operator Name</label>
              <input
                type="text"
                placeholder="Enter operator name"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
            >
              Submit Job
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default JobInputForm;

