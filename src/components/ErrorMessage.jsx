import { Alert } from "@mui/material";
import { useWeather } from "../context/WeatherContext";

const ErrorMessage = () => {
  const { error } = useWeather();
  return <Alert severity="error">{error}</Alert>;
};

export default ErrorMessage;
