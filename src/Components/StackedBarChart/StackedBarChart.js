import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const StackedBarChart = ({data}) => {
    return (
        <div>
            <h1 className='uppercase my-5 font-bold text-blue-500 text-2xl'> Investment Vs Revenue</h1>
            <BarChart width={450} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <Bar dataKey="investment" stackId="a" fill="#8884d8"></Bar>
                <Bar dataKey="revenue" stackId="a" fill="#82ca9d"></Bar>
            </BarChart>
        </div>
    );
};

export default StackedBarChart;