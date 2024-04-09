import React from 'react'
import { PieChart, Pie, Cell, Legend  , Tooltip} from 'recharts';

const VaccinationByGender = (props) => {
    const {vaccinationByGenderDetails} = props
    
  return (
    <div className='card'>
      <h3 className='head'>Vaccination By Gender</h3>
      <div  className='chart-container'>
        <PieChart width={500} height={300}>
            <Pie 
            data = {vaccinationByGenderDetails}
            cx={240} //slide over horizontal
            cy ={138}  //slide over vertical
            innerRadius={50}
            outerRadius={120}
            startAngle={180}
            endAngle={0}
            fill='#8884d8'
            paddingAngle={1}
            dataKey="count"
            
            >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Others" fill="#2cc6c6" />
            </Pie>
            <Tooltip/>
            <Legend iconType='circle' />
        </PieChart>
      </div>
      
    </div>
  )
}

export default VaccinationByGender
