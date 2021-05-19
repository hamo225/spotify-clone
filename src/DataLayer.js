import React, { createContext, useContext, useReducer } from "react";

// 1 create context - preparet the data layer
export const DataLayerContext = createContext();

// 2 Create Data layer
export const DataLayer = ({ initialState, reducer, children }) => (
  //children is the app. Whatever the data layer is wrapped around
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

// how to access data from the data layer
export const useDataLayerValue = () => {
  return useContext(DataLayerContext);
};
