import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
    const IMG_URL = "https://assamtribune.com/h-upload/2022/03/01/1330873-clouds-weather.webp";
    const RAIN_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSviPZnvZUjZSnx0EPyzLDejyq5q0rKngp84w&usqp=CAU";
    const HOT_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQShtBIeH95T-O7iYK7Mx7nU7aUlxMi4TvBHA&usqp=CAU";
    const COLD_URL = "https://www.findingtheuniverse.com/wp-content/uploads/2017/01/Blue2Bhour2BFinland_by_Laurence2BNorah.jpg";

    return (
        <div> 
            <h2>WeatherInfo</h2> 
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={
                    info.humidity > 80
                    ? RAIN_URL
                    : info.temp > 25
                    ? HOT_URL
                    : COLD_URL
                    }
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city} {
                  info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 25 ? <AcUnitIcon/> : <WbSunnyIcon/> }
                </Typography>
                <Typography variant="body2" color="text.secondary" component={"span"}>
                <p>Temprature = {info.temp}&deg;C </p>
                <p>Humidity = {info.humidity}</p>
                <p>Max Temprature = {info.tempMax}</p>
                <p>Min Temprature = {info.tempMin}</p>
                <p>The weather can be described as <i>{info.weather}</i> and feels like  {info.feelsLike}&deg;C</p>
                </Typography>
            </CardContent>
            
            </Card>
        </div>
    );
}