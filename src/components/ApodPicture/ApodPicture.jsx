import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ApodPictureContainer } from './styles';

export function ApodPicture(){

    const [image, setImage ] = useState([]);

    const url = `https://api.nasa.gov/planetary/apod?api_key=n8y6D1t17guEP26zaoJpQRuIbkihNKIgFf1S3baD`;

    const getData = async () => {
        const result = await Axios.get(url);
        setImage(result.data);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <ApodPictureContainer>
            {image ? (
                <div className='astronomy-picture'>
                    <img src={image.hdurl} alt="" />
                    <div>
                        <h3>{image.title}</h3>
                        <small>Astronomy Picture of the Day</small>
                        <p>{image.explanation}</p>
                        <button>See previous pictures</button>
                    </div>
                </div>
            ) : (
                <p>Couldn't get image</p>
            )}
        </ApodPictureContainer>
    )
}