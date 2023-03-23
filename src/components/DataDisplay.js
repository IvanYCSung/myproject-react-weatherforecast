import { useContext } from "react";
import TodayTemp from "./TodayTemp";
import WeeklyTemp from "./WeeklyTemp";
import DataAndStateContext from "../store/data-and-state-context";
import classes from "./DataDisplay.module.css";

const DataDisplay = (props) => {
  const ctx = useContext(DataAndStateContext);

  return (
    <div className={classes.container}>
      {ctx.data ? <TodayTemp /> : ""}
      <WeeklyTemp></WeeklyTemp>
    </div>
  );
};

export default DataDisplay;
