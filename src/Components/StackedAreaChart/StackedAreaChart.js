import React from 'react';
import { Area, AreaChart, Tooltip, XAxis, YAxis } from 'recharts';

const StackedAreaChart = ({data}) => {
    return (
        <div>
            <h1 className='uppercase my-4 font-bold text-cyan-500 text-2xl'> Investment Vs Revenue</h1>
            <AreaChart width={450} height={300} data={data}>
                <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8">
                </Area>
                <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d"></Area>
                <XAxis dataKey="month"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </AreaChart>
        </div>
    );
};

export default StackedAreaChart;