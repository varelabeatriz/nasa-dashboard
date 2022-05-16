import { usePeopleInSpace } from "../../contexts/PeopleInSpaceContext"; 
import React, { useEffect } from 'react';

export function PeopleInSpace (){

    const { peopleInSpace, getData } = usePeopleInSpace();

    useEffect(() => {
        getData();
      }, []);

    return (
        <div>
            <h1>People in space page</h1>

            {peopleInSpace ? (

                peopleInSpace.people.map(peopleInSpace => (
                <div key={peopleInSpace.name}>
                    <p>{peopleInSpace.name}</p> 
                </div>
                ))

                ) : (
                <div>
                    
                </div>
            )}

        </div>
    )
}