import React from 'react'
import './index.css'
import {BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Legend} from 'recharts';



const VaccinationCoverage = (props) => {
    const {vaccinationCoverageDetails} = props
  return (
    <div className='card'>
      <h3 className='head'>Vaccination Coverage</h3>
      <div className='chart-container'>
        <BarChart width={1000} height={600} 
        data={vaccinationCoverageDetails} margin={{top:5 , left:30 , right:10 , bottom:5}}>
            <CartesianGrid strokeDasharray={"3 3"} />
            <XAxis dataKey="vaccineDate"/>
            <YAxis />
            <Legend />
            <Bar dataKey="dose1" radius={[10, 10, 0, 0]} name={"Dose1"} fill='#5a8dee'  activeBar={<Rectangle fill='#5a8dee' stroke='black'  />} />
            <Bar dataKey="dose2" radius={[10, 10, 0, 0]} name={"Dose2"} fill='#f54394' activeBar={<Rectangle fill='#f54394' stroke='black'/>} />
        </BarChart>
      </div>
      
    </div>
  )
}

export default VaccinationCoverage
