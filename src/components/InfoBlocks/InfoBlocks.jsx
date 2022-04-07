import { usePeopleInSpace } from "../../contexts/PeopleInSpaceContext";
import React, { useEffect } from 'react';

export function InfoBlocks (){

    const { peopleInSpace, getData } = usePeopleInSpace();

    console.log(peopleInSpace);

    useEffect(() => {
        getData();
    }, []);

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
                <p>{peopleInSpace.number}</p>
                <p>Tripulated crafts</p>
            </div>
        </div>
    )
}