import { useQuery } from "react-query";
import Axios from 'axios';
import { useState } from "react";
import { ImagesContainer } from './styles';

export function Images (){

    function dateToQueryFormat(date) {
        let yyyy = date.getFullYear(),
        mm =   date.getMonth() + 1,
        dd =  date.getDate();
        return (`${yyyy}-${mm}-${dd}`);
    }

    function calcDays(date, operation) {
        var result = new Date(date);
        result.setDate(result.getDate() + operation);
        return dateToQueryFormat(result);
    }

    const today = new Date(),
    [queryDate, setQueryDate] = useState(dateToQueryFormat(today)),
    [isCurrentImageToday, setIsCurrentImageToday] = useState(true),
    cacheKey = `image-${queryDate}`;

    const { data, isLoading, error } = useQuery(cacheKey, () =>  
        Axios.get(`https://api.nasa.gov/planetary/apod?api_key=n8y6D1t17guEP26zaoJpQRuIbkihNKIgFf1S3baD&date=${queryDate}`)
        .then((response) => response.data)
    );

    if(isLoading) {
        return "Loading...";
    }

    if(error) {
        return "Error!";
    }

    return (
        <ImagesContainer>
            <h1>APOD</h1>
            <h2>Astronomy Picture of the Day</h2>
            <h3>{data.title}</h3>
            <div className="image-container">
                <div className="prev-image">
                    <button
                    onClick={function() { 
                        setQueryDate(calcDays(queryDate, -1));   
                        setIsCurrentImageToday(false);
                    }}>
                        <img src='arrow.svg' alt='arrow'></img>
                    </button>
                </div>
                <div >
                  <img src={data.hdurl} alt="" />
                </div>
                <div className="next-image">
                    <button
                        disabled={isCurrentImageToday ? (true) : (false)}
                        onClick={function() { 
                            setQueryDate(calcDays(queryDate, +1)); 
                            if (calcDays(queryDate, +1) == dateToQueryFormat(today)) {
                                setIsCurrentImageToday(true);
                            }
                        }}>
                        <img src='arrow.svg' alt='arrow' imgOpacity={"0.5"}></img>
                        
                    </button>
                </div>
            </div>
            <p>{data.explanation}</p>
        </ImagesContainer>
    )
}