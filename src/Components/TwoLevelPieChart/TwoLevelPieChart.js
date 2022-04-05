import React from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';

const TwoLevelPieChart = ({data}) => {
    return (
        <div>
            <h1 className='uppercase my-5 font-bold text-blue-500 text-2xl'>Investment VS Revenue</h1>
            <PieChart className='mt-[-100px]' width={600} height={500}>
                <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8"></Pie>
                <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label></Pie>
                <Tooltip></Tooltip>
            </PieChart>
        </div>
    );
};

export default TwoLevelPieChart;