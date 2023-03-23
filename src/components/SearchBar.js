import { useRef, useContext } from "react";
import Button from "../UI/Button";
import DataAndStateContext from "../store/data-and-state-context";

import classes from "./SearchBar.module.css";

const SearchBar = (props) => {
  const cityInputRef = useRef();
  const ctx = useContext(DataAndStateContext);

  const searchCityHandler = async (event) => {
    ctx.clearDataFn();
    ctx.setLoadingState(true);

    try {
      event.preventDefault();

      const enterCity = cityInputRef.current.value;
      if (!enterCity) throw new Error("Please enter a city name");

      // Geocoding API - getting latitude and longitude
      const cityRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${enterCity.toLowerCase()}`
      );
      if (!cityRes.ok) throw new Error("No city found");

      const cityData = await cityRes.json();
      if (!cityData.results) throw new Error("No city found");
      const cityLatitude = cityData.results[0].latitude;
      const cityLongitude = cityData.results[0].longitude;

      // Weather Forecase API
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${cityLatitude}&longitude=${cityLongitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_sum&current_weather=true&timezone=auto`
      );

      if (!weatherRes.ok) throw new Error("No weather data found");
      console.log(weatherRes);

      const weatherData = await weatherRes.json();

      ctx.getCityHandler(cityInputRef.current.value);
      ctx.updateDataFn(weatherData);

      cityInputRef.current.value = "";
    } catch (error) {
      ctx.setErrorState(error.message);
      return;
    }

    ctx.setLoadingState(false);
    cityInputRef.current.value = "";
  };

  return (
    <div className={classes.nav}>
      <div className={classes.logo}>Weather Forecast</div>
      <form onSubmit={searchCityHandler}>
        <div className={classes.searchContainer}>
          <input
            className={classes.input}
            id="search"
            type="text"
            placeholder="city name"
            ref={cityInputRef}
          />
          <Button type="submit">search</Button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
