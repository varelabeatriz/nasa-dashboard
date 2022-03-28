import Axios from 'axios';
import React, { useState } from 'react';
import { Launches } from '../Launches/Launches';
import { FeedContainer } from './styles';

export function Feed (){

    const [image, setImage ] = useState([]);
    const [imageUrl, setImageUrl ] = useState('');
    const [date, setDate ] = useState('2001-04-19');
    const [asteroidsData, setAsteroidsData] = useState([]);

    const url = `https://api.nasa.gov/planetary/apod?api_key=n8y6D1t17guEP26zaoJpQRuIbkihNKIgFf1S3baD`

    const asteroidsUrl = `https://ssd-api.jpl.nasa.gov/cad.api?des=433&date-min=2022-03-24&date-max=2100-01-01&dist-max=0.2`

    const peopleInSpaceUrl = 'http://api.open-notify.org/astros.json'

    const nextLaunchesUrl = 'https://fdo.rocketlaunch.live/json/launches/next/5'

    const getData = async () => {
        const result = await Axios.get(url);
        setImage(result);
        setImageUrl(image.data.hdurl);
    }

    const onChange = (e) => {
        setDate(e.target.value);
    }

    return (
        <FeedContainer>
            <h3>March 27, 2022</h3>

            <div className='info-container'>
                <div className='info'>
                    <p>7</p>
                    <p>Asteroids approaching Earth</p>
                </div>

                <div className='info'>
                    <p>7</p>
                    <p>Asteroids approaching Earth</p>
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

            <Launches></Launches>

            <label htmlFor="date"></label>
            <input type="text" name='date' onChange={onChange}/>

            <button onClick={()=> {getData()}}>Get Data</button>

            {image ? (
                <div>
                    <p>Got image</p>
                    <img src={imageUrl} alt="" />
                </div>
            ) : (
                <p>No image</p>
            )}

        </FeedContainer>
    )
}