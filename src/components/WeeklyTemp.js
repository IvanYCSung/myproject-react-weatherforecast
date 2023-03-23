import { useContext } from "react";
import DataAndStateContext from "../store/data-and-state-context";
import classes from "./WeeklyTemp.module.css";

const WeeklyTemp = (props) => {
  const ctx = useContext(DataAndStateContext);
  const weeklyTempData = ctx.data.daily;

  const weeklyTempDisplay = weeklyTempData.weathercode
    .filter((data, index) => index !== 0)
    .map((data, index) => (
      <div
        className={`${classes["temp-container"]}
          ${classes[ctx.weatherCode[data]]}`}
        key={index + 1}
      >
        <div className={classes.temp}>
          {weeklyTempData.temperature_2m_max[index + 1]}
        </div>
        <div className={classes.temp}>
          {weeklyTempData.temperature_2m_min[index + 1]}
        </div>
      </div>
    ));

  return <div className={classes.container}>{weeklyTempDisplay}</div>;
};

export default WeeklyTemp;
