"use client"

import React from 'react'
import Dashboard from './compoents/Dashboard'
import Navbar from './compoents/Navbar'
import PieChart from './compoents/PieCharts'
import PieChartData from './compoents/PieCharts'

const Home = () => {
  return (
    <div>
      <Navbar/>
       <PieChartData/>
    </div>
  )
}

export default Home
