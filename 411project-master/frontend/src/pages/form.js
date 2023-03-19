import React, { useState, useEffect } from "react";
import { Component } from "react";


class Form extends Component{

    constructor(props){
        super(props)
        this.state = {
            username: '',
            beachTemp:'',
            beachDesc:'',
            beachHumid:'',
            beachPress:'',
            beachWind:'',
            tempMax:'',
            tempLow:'',
            feelsLike:'',

            displayCard: false
            
        }
    }


handleUserName = event => {
    this.setState(
        {
            username: event.target.value
        }
    )
}


handleSubmit = event => {
    alert(`${this.state.username}`)
    
    const url = 'http://127.0.0.1:5000/beachdata?query=' + `${this.state.username}`;
    fetch(url).then(response => response.json()).then(data=> this.setState({beachTemp: data.temperature,beachDesc: data.description,beachHumid:data.humidity,beachPress: data.pressure,beachWind:data.wind,
        tempMax: data.temp_max, tempLow:data.temp_min, feelsLike:data.feels_like,displayCard:!this.state.displayCard})
       )

    
    event.preventDefault()


}
render(){
    return(
        <div>
            
        <form onSubmit = {this.handleSubmit}>
        <div>
            <label> Enter a beach</label>
            <input type = 'text' value = {this.state.username} onChange={this.handleUserName}/>
        </div>
        <button type = "submit">submit</button>
       </form>

        {this.state.displayCard ?
          <div ><h2>The weather at {this.state.username} is {this.state.beachDesc}</h2><div><h2>The temperature is: {this.state.beachTemp} F</h2></div>  
          <div><h2>The humidity is {this.state.beachHumid}</h2></div>
          <div><h2>The pressure is {this.state.beachPress}</h2></div>
          <div><h2>The wind speed is {this.state.beachWind}</h2></div>
          <div><h2>High:  {this.state.tempMax}</h2></div>
          <div><h2>Low:  {this.state.tempLow}</h2></div>
          <div><h2>Feels Like {this.state.feelsLike}</h2></div>
          </div>
          :
           null
        }
       
</div>

    )
}
}
export default Form