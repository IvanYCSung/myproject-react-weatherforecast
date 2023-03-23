import React from "react";

const DataAndStateContext = React.createContext({
  city: "",
  data: "",
  error: "",
  weatherCode: "",
  loadingState: false,
  updateDataFn: () => {},
  setErrorState: () => {},
  clearErrorState: () => {},
  clearDataFn: () => {},
  setLoadingState: () => {},
});

export default DataAndStateContext;
