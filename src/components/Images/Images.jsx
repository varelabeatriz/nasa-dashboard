import { useQuery } from "react-query";
import Axios from 'axios';

export function Images (props){

    const { data, isLoading, error } = useQuery("images", () =>  
        Axios.get("https://api.nasa.gov/planetary/apod?api_key=n8y6D1t17guEP26zaoJpQRuIbkihNKIgFf1S3baD").then((response) => response.data)
    );

    if(isLoading) {
        return "Loading...";
    }

    if(error) {
        return "Error!";
    }

    return (
        <div>
            <h1>Images Page</h1>
            <h2>Today</h2>
            <h3>{props.month} {props.dd}, {props.yyyy}</h3>
            <h3>{data.title}</h3>
            <button>See previous day</button>
        </div>
    )
}