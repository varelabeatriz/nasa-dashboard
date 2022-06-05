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
            <table className='table'>

            {launches ? (

                launches.map(launches => (
                <tr key={launches.id}>
                    <td>{launches.name}</td> 
                    <td>{launches.vehicle.name}</td>
                    <td>{launches.pad.location.statename}</td>
                    <td>{launches.pad.location.country}</td>
                    <td>{launches.date_str}</td>
                </tr>
           ))

            ) : (
                <div>
                    
                </div>
            )}
            </table>
        </LaunchesContainer>
    )
}