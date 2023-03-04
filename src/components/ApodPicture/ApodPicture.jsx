import Axios from 'axios';
import React from 'react';
import { useQuery } from "react-query";
import { ApodPictureContainer } from './styles';
import { useNavigate } from 'react-router-dom';

export function ApodPicture(){
    let navigate = useNavigate();

    const { data, isLoading, error } = useQuery("images-home", () =>  
        Axios.get("https://api.nasa.gov/planetary/apod?api_key=n8y6D1t17guEP26zaoJpQRuIbkihNKIgFf1S3baD").then((response) => response.data)
    );

    if(isLoading) {
        return "Loading...";
    }

    if(error) {
        return "Error!";
    }

    return (
        <ApodPictureContainer>
            {data ? (
                <div className='astronomy-picture'>
                    <img src={data.hdurl} alt="" />
                    <div>
                        <h3>{data.title}</h3>
                        <small>Astronomy Picture of the Day</small>
                        <p>{data.explanation}</p>
                        <button  
                            onClick={()=> {
                                navigate("/images");
                             }}>
                            Read more
                        </button>
                    </div>
                </div>
            ) : (
                <p>Couldn't get image</p>
            )}
        </ApodPictureContainer>
    )
}