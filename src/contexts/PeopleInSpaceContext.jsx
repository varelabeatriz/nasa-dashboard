import React, { createContext, useState, useContext } from 'react';
import Axios from 'axios';
const PeopleInSpaceContext = createContext();

export default function PeopleInSpaceProvider({ children }) {

    const [peopleInSpace, setPeopleInSpace ] = useState([]);

    const peopleInSpaceUrl = 'http://api.open-notify.org/astros.json';

    const getData = async () => {
        const result = await Axios.get(peopleInSpaceUrl);
        setPeopleInSpace(result.data);
    }

    return (
        <PeopleInSpaceContext.Provider value={{
            peopleInSpace,
            setPeopleInSpace,
            getData
        }}>
            {children}
        </PeopleInSpaceContext.Provider>
    );
}

export function usePeopleInSpace(){
    const context = useContext(PeopleInSpaceContext);
    if (!context) throw new Error("useCount must be used within a CountProvider");
    const { peopleInSpace, setPeopleInSpace, getData } = context;
    return { peopleInSpace, setPeopleInSpace, getData};
}