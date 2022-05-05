import { usePeopleInSpace } from "../../contexts/PeopleInSpaceContext";
import React, { useEffect } from 'react';

export function InfoBlocks (){

    const { peopleInSpace, getData } = usePeopleInSpace();

    useEffect(() => {
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
                <p>7</p>
                <p>Asteroids approaching Earth</p>
            </div>

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