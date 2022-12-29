import React, { createContext, useEffect, useState } from "react";

import { auth } from "../config/firebase.config";

export const DataContext = createContext();
const DataProvider = ({ children }) => {
  const [bookedseats, setBookedSeats] = useState("");
  const [bookedBus, setBookedBus] = useState({});
  const [journeyDate, setJourneyDate] = useState("12/28/2022");
  const [fromToLocation, setFromToLocation] = useState({});
  return (
    <DataContext.Provider
      value={{
        setBookedSeats,
        bookedseats,
        setBookedBus,
        bookedBus,
        setJourneyDate,
        journeyDate,
        fromToLocation,
        setFromToLocation,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
