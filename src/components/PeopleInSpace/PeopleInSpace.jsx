import { usePeopleInSpace } from "../../contexts/PeopleInSpaceContext"; 
import { PeopleInSpaceContainer } from './styles';
import React, { useEffect } from 'react';

export function PeopleInSpace (){

    const { peopleInSpace, getData } = usePeopleInSpace();

    useEffect(() => {
        getData();
      }, []);

    return (
        <PeopleInSpaceContainer>
            <h1>People in Space</h1>

            <div className="astronaut-container">
            {peopleInSpace ? (

                peopleInSpace.people.map(peopleInSpace => (
                    <div key={peopleInSpace.name}>
                        <img src='astronaut.svg' alt='astronaut' className="astronaut"></img>
                        <span><p>{peopleInSpace.name}</p></span>
                    </div>
                ))

            ) : (
                <div></div>
            )}
            </div>

            {peopleInSpace ? (

                peopleInSpace.people.map(peopleInSpace => (
                <div key={peopleInSpace.name}>
                    <h4>Name: {peopleInSpace.name}</h4> 
                    <p>Craft: {peopleInSpace.craft}</p>
                </div>
                ))

                ) : (
                <div>
                    
                </div>
            )}

        </PeopleInSpaceContainer>
    )
}