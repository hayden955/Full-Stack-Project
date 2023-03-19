import React from 'react';
import '../App.css';
import beachPic from "./beachesPageBeachPic.jpg";
import MapContainer from '../components/map/MapContainer'


const Beaches = () => {
    // const PLACES_KEY = "AIzaSyAFM9agRaYquHxxOemaUEcd9s3GBVXo60M";
    // const {isLoaded, loadError} = useLoadScript({
    //     googleMapsApiKey: PLACES_KEY,
    //     libraries: ['places']
    // });

    // const mapStyle = {
    //     width: "100vw",
    //     height: "100vh"
    // };

    // const location = {lat: 42.361145, lng: -71.057083};

    // if(loadError) return "ERROR LOADING MAP";
    // if(!isLoaded) return "Loading Maps";

    // const google = window.google;

    // const service = new google.maps.places.PlacesService(_map);
    // const request = {
    // location: location,
    // keyword: "beach"
    // };
    // service.nearbySearch(request, (results, status) => {
    //     if(status == google.maps.places.PlacesServiceStatus.OK){
    //         console.log(results);
    //     }
    // });

    // return (
    //     <div>
    //         <GoogleMap ref={(map) => this._map = map} mapContainerStyle={mapStyle} zoom={15} center={location}>
                
    //         </GoogleMap>
    //     </div>
    // );

    return(
        <div className="Mapp">

            <header className="MApp-header"></header>
            <div className="container h-100">
                <MapContainer/>
            </div>
        </div>
        
    );

    // return (
    //     <div
    //         style={{
    //             display: 'flex',
    //             justifyContent: 'center',
    //             alignItems: 'center',
    //             height: '100vh'
    //         }}
    //     >

    //         <img style = {{
    //                 height: "100vh",
    //                 width: "100%"
    //                 }} 
    //                 src = {beachPic}>
    //         </img>

    //         <form  method = "get" style = {{
    //             position: "absolute", 
    //             top: 225, 
    //             left: 500,
    //             }}>

    //             <div className = "container" style = {{
    //                 width: "400px",
    //                 }}>
                    
    //                 <h1 style = {{
    //                     fontSize: "20px",
    //                     }}> 
    //                     Enter a location below to get beach data!
    //                 </h1>


    //                 <label htmlFor = "city"> 
    //                     <b> Enter the city or town here: </b> 
    //                 </label>
    //                 <input type = "text" placeholder = "Enter City or Town" name = "city" required/>

    //                 <label htmlFor = "state">
    //                     <b> Enter the state here (if applicable): </b>
    //                 </label>
    //                 <input type = "text" placeholder = "Enter State" name = "state" />

    //                 <label htmlFor = "country">
    //                     <b> Enter the country here: </b>
    //                 </label>
    //                 <input type = "text" placeholder = "Enter Country" name = "country" required/>

    //                 <button > Let's Go! </button>
    //             </div>

    //         </form>

    //     </div>
    // );
}

export default Beaches;