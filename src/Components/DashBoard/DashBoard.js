import React from 'react';
import SimpleLineChart from '../LineChart/SimpleLineChart';
import StackedAreaChart from '../StackedAreaChart/StackedAreaChart';
import StackedBarChart from '../StackedBarChart/StackedBarChart';
import TwoLevelPieChart from '../TwoLevelPieChart/TwoLevelPieChart';
import './DashBoard.css';

const DashBoard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 15000,
            "sell": 199,
            "revenue": 2524
        },
        {
            "month": "Apr",
            "investment": 25000,
            "sell": 152,
            "revenue": 2540
        },
        {
            "month": "May",
            "investment": 25485,
            "sell": 799,
            "revenue": 254788
        },
        {
            "month": "Jun",
            "investment": 15825,
            "sell": 258,
            "revenue": 12586
        },
        {
            "month": "Jul",
            "investment": 15285,
            "sell": 251,
            "revenue": 10252
        },
        {
            "month": "Aug",
            "investment": 25871,
            "sell": 67,
            "revenue": 25874
        }
    ];
    return (
        <div className='grid md:grid-cols-2 md:mt-10 mt-20'>
            <SimpleLineChart data={data}></SimpleLineChart>
            <StackedAreaChart data={data}></StackedAreaChart>
            <StackedBarChart data={data}></StackedBarChart>
            <TwoLevelPieChart data={data}></TwoLevelPieChart>
            
        </div>
    );
};

export default DashBoard;