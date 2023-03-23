import { useState } from "react";
import SearchBar from "./components/SearchBar";
import DataDisplay from "./components/DataDisplay";
import Modal from "./UI/Modal";
import LoadingSpinner from "./UI/LoadingSpinner";
import DataAndStateContext from "./store/data-and-state-context";

function App() {
  const [city, setCity] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getCityHandler = (city) => {
    const cityCapitalized = city.toUpperCase();
    setCity(cityCapitalized);
  };

  const getDataHandler = (data) => {
    setData(data);
  };
  const errorHandler = (error) => {
    setError(error);
  };
  const clearErrorHandler = () => {
    setError(null);
  };
  const clearDatafn = () => {
    context.city = "";
    context.data = "";
    context.error = "";
  };
  const setLoadingState = (state) => {
    setIsLoading(state);
  };

  const weatherCode = {
    0: "clear-sky",
    1: "clear-sky",
    2: "cloudy-sky",
    3: "cloudy-sky",
    45: "cloudy-sky",
    48: "cloudy-sky",
    51: "drizzling-raining-sky",
    53: "drizzling-raining-sky",
    55: "drizzling-raining-sky",
    56: "drizzling-raining-sky",
    57: "drizzling-raining-sky",
    61: "drizzling-raining-sky",
    63: "drizzling-raining-sky",
    65: "drizzling-raining-sky",
    66: "drizzling-raining-sky",
    67: "drizzling-raining-sky",
    71: "snowing-sky",
    73: "snowing-sky",
    75: "snowing-sky",
    77: "snowing-sky",
    80: "drizzling-raining-sky",
    81: "drizzling-raining-sky",
    82: "drizzling-raining-sky",
    85: "snowing-sky",
    86: "snowing-sky",
    95: "thunderstorm-sky",
    96: "thunderstorm-sky",
    99: "thunderstorm-sky",
  };

  const context = {
    city: city,
    data: data,
    error: error,
    loadingState: isLoading,
    weatherCode: weatherCode,
    getCityHandler: getCityHandler,
    updateDataFn: getDataHandler,
    setErrorState: errorHandler,
    clearErrorState: clearErrorHandler,
    clearDataFn: clearDatafn,
    setLoadingState: setLoadingState,
  };

  console.log(context);

  return (
    <DataAndStateContext.Provider value={context}>
      {error && <Modal error={error} />}
      <SearchBar />
      {!data && isLoading ? <LoadingSpinner /> : ""}
      {data ? <DataDisplay /> : ""}
    </DataAndStateContext.Provider>
  );
}

export default App;
