import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { ApodPicture } from '../ApodPicture/ApodPicture';
import { DoughnutChart } from '../DoughnutChart/DoughnutChart';
import { InfoBlocks } from '../InfoBlocks/InfoBlocks';
import { Launches } from '../Launches/Launches';
import { FeedContainer } from './styles';

export function Feed (props){

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

    return (
        <FeedContainer className={`${props.darkMode ? 'dark-mode' : 'light-mode'}`}>
            <h3>{month} {dd}, {yyyy}</h3>
            <div className='row'>
                <div className='column'>
                    <InfoBlocks></InfoBlocks>
                    <Launches></Launches>
                </div>
                <DoughnutChart></DoughnutChart>
            </div>
            <ApodPicture></ApodPicture>
        </FeedContainer>
    )
}