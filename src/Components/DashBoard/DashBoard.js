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
            "revenue": 252254
        },
        {
            "month": "Apr",
            "investment": 25000,
            "sell": 152,
            "revenue": 254021
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
            "revenue": 125861
        },
        {
            "month": "Jul",
            "investment": 15285,
            "sell": 251,
            "revenue": 102520
        },
        {
            "month": "Aug",
            "investment": 25871,
            "sell": 67,
            "revenue": 258746
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