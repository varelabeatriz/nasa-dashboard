import Axios from 'axios';
import React, { useState } from 'react';
import { ApodPicture } from '../ApodPicture/ApodPicture';
import { Launches } from '../Launches/Launches';
import { FeedContainer } from './styles';

export function Feed (){

    const [asteroidsData, setAsteroidsData] = useState([]);

    const asteroidsUrl = `https://ssd-api.jpl.nasa.gov/cad.api?des=433&date-min=2022-03-24&date-max=2100-01-01&dist-max=0.2`

    const peopleInSpaceUrl = 'http://api.open-notify.org/astros.json'

    const nextLaunchesUrl = 'https://fdo.rocketlaunch.live/json/launches/next/5'

    return (
        <FeedContainer>
            <h3>March 27, 2022</h3>

            <div className='info-container'>
                <div className='info'>
                    <p>7</p>
                    <p>Asteroids approaching Earth</p>
                </div>

                <div className='info'>
                    <p>11</p>
                    <p>People in Space</p>
                </div>

                <div className='info'>
                    <p>7</p>
                    <p>Asteroids approaching Earth</p>
                </div>

                <div className='info'>
                    <p>7</p>
                    <p>Asteroids approaching Earth</p>
                </div>
            </div>

            <h3 className='launches-title'>Next 5 launches</h3>
            <Launches></Launches>

            <ApodPicture></ApodPicture>

        </FeedContainer>
    )
}