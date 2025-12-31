import axios from "axios";

// ✅ ENV se API key
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

// 🔹 Current Weather API
const WEATHER_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// 🔹 Geocoding API (Autocomplete ke liye)
const GEO_BASE_URL = "https://api.openweathermap.org/geo/1.0/direct";

// ==============================
// 🌤️ Fetch Current Weather
// ==============================
export const fetchWeather = async (city) => {
  const response = await axios.get(WEATHER_BASE_URL, {
    params: {
      q: city,
      units: "metric",
      appid: API_KEY,
    },
  });

  return response.data;
};

// ==============================
// 🌍 Fetch Cities (Autocomplete)
// ==============================
export const fetchCities = async (query) => {
  if (!query || query.length < 2) return [];

  const response = await axios.get(GEO_BASE_URL, {
    params: {
      q: query,
      limit: 5, // max suggestions
      appid: API_KEY,
    },
  });

  return response.data;
};

