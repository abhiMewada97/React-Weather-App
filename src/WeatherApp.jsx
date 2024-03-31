import { useState } from 'react';
import InfoBox from './InfoBox.jsx'
import SearchBox from "./SearchBox.jsx"

export default function WeatherApp() {

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike:32.7,
        humidity: 15,
        temp: 35.13,
        tempMax: 35.13,
        tempMin: 33.99,
        weather: "few clouds",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div>
          <SearchBox className="searchbox" updateInfo={updateInfo}/>
          <InfoBox info={weatherInfo}/>
        </div>
    );
}