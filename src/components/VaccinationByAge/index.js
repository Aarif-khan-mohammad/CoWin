import React from 'react'
import {PieChart , Pie , Cell, Tooltip, Legend} from 'recharts'

const VaccinationByAge = (props) => {
    const {vaccinationByAgeDetails} = props
  return (
    <div className='card'>
      <h3 className='head'>Vaccination By Age</h3>
      <div className='chart-container'>
        <PieChart width={500} height={300}>
            <Pie 
            dataKey="count"
            startAngle={0}
            endAngle={360}
            data={vaccinationByAgeDetails}
            cx="50%"
            cy="50%"
            fill='#8884d8'
            outerRadius={100} //size of the pie
            >
            <Cell name="18-44" fill='#2d87bb'/>
            <Cell name="15-60" fill='#a3df9f'/>
            <Cell name="Above 60" fill='#64c2a6'/>
            </Pie>
            <Tooltip/>
            <Legend iconType='circle'/>
            
        </PieChart>
      </div>
    </div>
  )
}

export default VaccinationByAge
