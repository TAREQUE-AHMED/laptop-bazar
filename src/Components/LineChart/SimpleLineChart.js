import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';


const SimpleLineChart = (data) => {
    return (
        <div>
            <h1 className='uppercase my-5 font-bold text-blue-400 text-2xl'>
                Month wise sell
            </h1>
            <LineChart width={450} height={300} data={data}>
                <Line type="monotone" dataKey='sell' stroke="#88884d8"></Line>
                <Tooltip></Tooltip>
                <XAxis dataKey={'month'}></XAxis>
                <YAxis></YAxis>
            </LineChart>
        </div>
    );
};

export default SimpleLineChart;