import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { ApodPicture } from '../ApodPicture/ApodPicture';
import { DoughnutChart } from '../DoughnutChart/DoughnutChart';
import { InfoBlocks } from '../InfoBlocks/InfoBlocks';
import { Launches } from '../Launches/Launches';
import { FeedContainer } from './styles';

export function Feed (props){

    return (
        <FeedContainer className={`${props.darkMode ? 'dark-mode' : 'light-mode'}`}>
            <h3>{props.month} {props.dd}, {props.yyyy}</h3>
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