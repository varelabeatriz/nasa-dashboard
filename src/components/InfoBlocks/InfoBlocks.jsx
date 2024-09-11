import { usePeopleInSpace } from "../../contexts/PeopleInSpaceContext";
import React, { useEffect, useState } from 'react';
import Axios from 'axios';

export function InfoBlocks (props){

    const [asteroids, setAsteroids ] = useState();
    const { peopleInSpace, getData } = usePeopleInSpace();

    let oi = props.asteroidsUrl;

    useEffect(() => {
        const getAsteroidsData = async () => {
            const result = await Axios.get(oi);
            setAsteroids(result);
            console.log(asteroids);
        }

        getAsteroidsData();
        getData();
    }, []);

    

    let craftArr = [];

    for(let i=0; i<peopleInSpace.number; i++){
        craftArr.push(peopleInSpace.people[i].craft);

        craftArr = craftArr.filter(function (value, index, array) { 
            return array.indexOf(value) === index;
        });
    }

    return (

        <div className='info-container'>
            <div className='info'>
                <p>{peopleInSpace.number}</p>
                <p>People in Space</p>
            </div>

            <div className='info'>
                <p>{craftArr.length}</p>
                <p>Tripulated crafts</p>
            </div>
        </div>
    )
}