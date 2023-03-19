import React from 'react';
import '../App.css';
import beachPic from "./beachesPageBeachPic.jpg";
import MapContainer from '../components/map/MapContainer'
import Form from './form'

const WeatherSearch = () =>{

    return(
        <div className="Mapp">

            <div className="container h-100">
                <Form/>
            </div>
        </div>
        
    );
} 
export default WeatherSearch;
