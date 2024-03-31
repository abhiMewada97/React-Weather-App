import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "ca5589c59649ef56b9180da4a1e99091";

    let getWeatherInfo = async () => {
        try {

            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            // console.log(jsonResponse);
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
                
            };
            console.log(result);
            return result;
        }
        catch (err) {
            throw err;
        }
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    };
    
    let handleSubmit = async (evt) => { 
        try {

            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setError(false);
        }
        catch (err) {
            setError(true); 
        }
    };

    return (
        <div className='SearchBox'>
            <h3>Search for the weather!</h3>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required onChange={handleChange}/>
                <br/> <br/> 
                <Button variant="contained" type="submit">search</Button>
            {error && <h2 style={{color:"red"}}>No such place exists!</h2>}
            </form>
        </div>
    );
}