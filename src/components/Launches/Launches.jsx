import { LaunchesContainer } from './styles';
import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const nextLaunchesUrl = 'https://fdo.rocketlaunch.live/json/launches/next/5';

export function Launches (){

    const [launches, setLaunches ] = useState();

    const getData = async () => {
        const result = await Axios.get(nextLaunchesUrl);
        setLaunches(result.data.result);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <LaunchesContainer>
            <h3 className='launches-title'>Next 5 launches</h3>
            <div className='table'>

            {launches ? (

                launches.map(launches => (
                <div>
                    <p>{launches.name}</p> 
                    <p>{launches.vehicle.name}</p>
                    <p>{launches.pad.location.statename}</p>
                    <p>{launches.pad.location.country}</p>
                    <p>{launches.date_str}</p>
                </div>
           ))

            ) : (
                <div>
                    
                </div>
            )}
            </div>
        </LaunchesContainer>
    )
}