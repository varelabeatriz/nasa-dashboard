import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { ApodPicture } from '../ApodPicture/ApodPicture';
import { DoughnutChart } from '../DoughnutChart/DoughnutChart';
import { InfoBlocks } from '../InfoBlocks/InfoBlocks';
import { Launches } from '../Launches/Launches';
import { FeedContainer } from './styles';

export function Feed (){

    const today = new Date(), 
    yyyy = today.getFullYear(),
    month = today.toLocaleString('en-GB', { month: 'long' });

    var dd = today.getDate(),
    mm = today.getMonth();

    if (dd.toString().length < 2){
        dd = "0"+dd;
    }

    if (mm.toString().length < 2){
        mm = "0"+mm;
    }

    let endDate = new Date();
    endDate.setDate(today.getDate() + 7);
    
    let ddEnd = endDate.getDate(),
    mmEnd = endDate.getMonth(),
    yyyyEnd = endDate.getFullYear();

    if (ddEnd.toString().length < 2){
        ddEnd = "0"+ddEnd;
    }

    if (mmEnd.toString().length < 2){
        mmEnd = "0"+mmEnd;
    }

    const startDate = yyyy + '-' + mm + '-' + dd,
    endDateString = yyyyEnd + '-' + mmEnd + '-' + ddEnd;

    const nearEarthObjects = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDateString}}&api_key=n8y6D1t17guEP26zaoJpQRuIbkihNKIgFf1S3baD`;

    return (
        <FeedContainer>
            <h3>{month} {dd}, {yyyy}</h3>
            <div className='row'>
                <div className='column'>
                    <InfoBlocks asteroidsUrl= {nearEarthObjects} ></InfoBlocks>
                    <h3 className='launches-title'>Next 5 launches</h3>
                    <Launches></Launches>
                </div>
                <DoughnutChart></DoughnutChart>
            </div>
            <ApodPicture></ApodPicture>
        </FeedContainer>
    )
}