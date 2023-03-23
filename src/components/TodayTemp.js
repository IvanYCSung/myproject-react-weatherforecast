import { Fragment, useContext } from "react";
import DataAndStateContext from "../store/data-and-state-context";
import classes from "./TodayTemp.module.css";

const TodayTemp = (props) => {
  const ctx = useContext(DataAndStateContext);
  const ctxWeatherData = ctx.data.daily;
  const ctxWeatherDataUnits = ctx.data.daily_units;

  return (
    <Fragment>
      <div
        className={`${classes.container} ${
          classes[ctx.weatherCode[ctx.data.current_weather.weathercode]]
        }`}
      >
        <div className={classes.dateAndCity}>
          <div className={classes.date}>
            {ctxWeatherData.time[0].replaceAll("-", ".")}
          </div>
          <div className={classes.city}>{ctx.city}</div>
        </div>
        <div>
          <div className={classes.currentTemp}>
            {ctx.data.current_weather.temperature}
          </div>
          <div className={classes.currentTempC}>
            {ctxWeatherDataUnits.temperature_2m_max}
          </div>
        </div>

        <div className={classes.todayTempMax}>
          MAX {ctxWeatherData.temperature_2m_max[0]}{" "}
          {ctxWeatherDataUnits.temperature_2m_max}
        </div>
        <div className={classes.todayTempMin}>
          MIN {ctxWeatherData.temperature_2m_min[0]}{" "}
          {ctxWeatherDataUnits.temperature_2m_min}
        </div>

        <div className={classes.rainUVContainer}>
          <div className={classes.rain}>
            PRECIPITATION {ctxWeatherData.precipitation_sum[0]}{" "}
            {ctxWeatherDataUnits.precipitation_sum}
          </div>
          <div className={classes.uvIndex}>
            UV INDEX {ctxWeatherData.uv_index_max[0]}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TodayTemp;
