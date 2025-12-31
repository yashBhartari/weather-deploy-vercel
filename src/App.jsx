import { Container } from "@mui/material";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import WeatherDetails from "./components/WeatherDetails";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import { useWeather } from "./context/WeatherContext";

const App = () => {
  const { loading, error, weather } = useWeather();

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Header />
      <SearchBar />

      {loading && <Loader />}
      {error && <ErrorMessage />}

      {weather && (
        <>
          <CurrentWeather />
          <WeatherDetails />
          <Forecast />
        </>
      )}
    </Container>
  );
};

export default App;
