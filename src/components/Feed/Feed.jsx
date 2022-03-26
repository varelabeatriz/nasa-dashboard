import Axios from 'axios';
import React, { useState } from 'react';

export function Feed (){

    const [image, setImage ] = useState([]);
    const [imageUrl, setImageUrl ] = useState('');
    const [date, setDate ] = useState('2001-04-19');

    const url = `https://api.nasa.gov/planetary/apod?api_key=n8y6D1t17guEP26zaoJpQRuIbkihNKIgFf1S3baD&date=${date}`

    const getData = async () => {
        const result = await Axios.get(url);
        setImage(result);
        setImageUrl(image.data.hdurl);
    }

    const onChange = (e) => {
        setDate(e.target.value);
    }

    return (
        <div>
            <p>Hello World</p>

            <label htmlFor="date"></label>
            <input type="text" name='date' onChange={onChange}/>

            <button onClick={()=> {getData()}}>Get Data</button>

            {image ? (
                <div>
                    <p>Got image</p>
                    <img src={imageUrl} alt="" />
                </div>
            ) : (
                <p>No image</p>
            )}

        </div>
    )
}