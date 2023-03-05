import { useQuery } from "react-query";
import Axios from 'axios';
import { useState } from "react";
import { ImagesContainer } from './styles';

export function Images (props){

    function dateToQueryFormat(date) {
        let yyyy = date.getFullYear(),
        mm =   date.getMonth() + 1,
        dd =  date.getDate();
        return (`${yyyy}-${mm}-${dd}`);
    }

    function subtractDays(date) {
        var result = new Date(date);
        result.setDate(result.getDate() - 1);
        return dateToQueryFormat(result);
    }

    const today = new Date(),
    [date, setDate] = useState(today),
    [queryDate, setQueryDate] = useState(dateToQueryFormat(today));

    const cacheKey = `image-${queryDate}`;

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
            <h1>Images Page</h1>
            <h3>{queryDate}</h3>
            <h3>{data.title}</h3>
            <div className="image-container">
                <div className="prev-image">
                    <button
                    onClick={() => { 
                        setQueryDate(subtractDays(queryDate));   
                    }}>
                        <img src='arrow.svg' alt='arrow'></img>
                    </button>
                </div>
                <div >
                  <img src={data.hdurl} alt="" />
                </div>
                <div className="next-image">
                    <button
                        onClick={() => { 
                            setQueryDate(`${props.yyyy}-${props.mm}-${props.dd}`);   
                        }}>
                        <img src='arrow.svg' alt='arrow'></img>
                    </button>
                </div>
            </div>
        </ImagesContainer>
    )
}