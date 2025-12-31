import { Card, Typography, Grid } from "@mui/material";
import { useWeather } from "../context/WeatherContext";

const WeatherDetails = () => {
  const { weather } = useWeather();

  return (
    <Card sx={{ p: 2, mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography>Humidity: {weather.main.humidity}%</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>Wind: {weather.wind.speed} m/s</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>Pressure: {weather.main.pressure}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>Feels Like: {weather.main.feels_like}°C</Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default WeatherDetails;
