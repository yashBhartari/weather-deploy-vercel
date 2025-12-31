import { Card, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useWeather } from "../context/WeatherContext";

const CurrentWeather = () => {
  const { weather } = useWeather();

  return (
    <motion.div
      whileHover={{ rotateY: 10, rotateX: -10, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 150 }}
      style={{ perspective: 1000 }}
    >
      <Card sx={{ p: 3, mt: 3, textAlign: "center", borderRadius: 4 }}>
        <Typography variant="h5">{weather.name}</Typography>

        <motion.img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />

        <Typography variant="h3">
          {Math.round(weather.main.temp)}°C
        </Typography>

        <Typography>{weather.weather[0].description}</Typography>
      </Card>
    </motion.div>
  );
};

export default CurrentWeather;
