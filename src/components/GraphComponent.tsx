import React from 'react'
import {LineChart, Line, CartesianGrid, XAxis, YAxis} from 'recharts';

export default function GraphComponent({data}) {
  const width = window.innerWidth * 0.8
  return(
    <div>
      <LineChart width={width} height={300} data={data}>
        <Line type="monotone" dataKey="value" stroke="#E05F5FFF" />
        <CartesianGrid stroke="#FFFFFF59" strokeDasharray="5 5"/>
        <XAxis dataKey="date" stroke="#fff"/>
        <YAxis dataKey="value" stroke="#fff"/>
      </LineChart>
    </div>
  )
}