import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { ApodPicture } from '../ApodPicture/ApodPicture';
import { DoughnutChart } from '../DoughnutChart/DoughnutChart';
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

    const [peopleInSpace, setPeopleInSpace ] = useState([]);

    const peopleInSpaceUrl = 'http://api.open-notify.org/astros.json';

    const nearEarthObjects = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=$${endDateString}}&api_key=n8y6D1t17guEP26zaoJpQRuIbkihNKIgFf1S3baD`;

    const getData = async () => {
        const result = await Axios.get(peopleInSpaceUrl);
        setPeopleInSpace(result.data);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <FeedContainer>
            <h3>{month} {dd}, {yyyy}</h3>

            <div className='row'>
                <div className='1-column'>
                    <div className='info-container'>
                        <div className='info'>
                            <p>7</p>
                            <p>Asteroids approaching Earth</p>
                        </div>

                        <div className='info'>
                            <p>{peopleInSpace.number}</p>
                            <p>People in Space</p>
                        </div>

                        <div className='info'>
                            <p>7</p>
                            <p>Tripulated crafts</p>
                        </div>
                    </div>

                    <h3 className='launches-title'>Next 5 launches</h3>
                    <Launches></Launches>
                </div>

                <DoughnutChart></DoughnutChart>
            </div>

            <ApodPicture></ApodPicture>

        </FeedContainer>
    )
}