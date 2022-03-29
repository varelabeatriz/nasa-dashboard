import Axios from 'axios';
import React, { useState } from 'react';
import { ApodPictureContainer } from './styles';

export function ApodPicture(){

    const [image, setImage ] = useState([]);
    const [imageUrl, setImageUrl ] = useState('');

    const url = `https://api.nasa.gov/planetary/apod?api_key=n8y6D1t17guEP26zaoJpQRuIbkihNKIgFf1S3baD`

    const getData = async () => {
        const result = await Axios.get(url);
        setImage(result);
        console.log(image);
        setImageUrl(image.data.hdurl);
    }

    return (
        <ApodPictureContainer>
            <button onClick={()=> {getData()}}>Get Data</button>

            {image ? (
                <div className='astronomy-picture'>
                    <img src={imageUrl} alt="" />
                    <div>
                        
                        <small>Astronomy Picture of the Day</small>
                        
                    </div>
                </div>
            ) : (
                <p>No image</p>
            )}
        </ApodPictureContainer>
    )
}