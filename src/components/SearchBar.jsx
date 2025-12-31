import { Autocomplete, TextField, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchCities } from "../services/weatherService";
import { useWeather } from "../context/WeatherContext";

const SearchBar = () => {
  const { searchWeather } = useWeather();

  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🔹 Fetch cities as user types
  useEffect(() => {
    const delay = setTimeout(async () => {
      if (inputValue.length < 1) {
        setOptions([]);
        return;
      }

      setLoading(true);
      try {
        const cities = await fetchCities(inputValue);

        const formatted = cities.map((c) => ({
          label: `${c.name}, ${c.country}`,
          city: c.name,
        }));

        setOptions(formatted);
      } catch (err) {
        setOptions([]);
      } finally {
        setLoading(false);
      }
    }, 300); // debounce

    return () => clearTimeout(delay);
  }, [inputValue]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      style={{ marginBottom: 16 }}
    >
      <Autocomplete
        fullWidth
        options={options}
        loading={loading}
        inputValue={inputValue}
        onInputChange={(e, value) => setInputValue(value)}
        onChange={(e, value) => {
          if (value) searchWeather(value.city);
        }}
        noOptionsText="Start typing city name"
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search city or country"
            placeholder="Type city name..."
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading && <CircularProgress size={20} />}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />
    </motion.div>
  );
};

export default SearchBar;
