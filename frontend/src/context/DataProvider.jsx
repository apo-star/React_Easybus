import React, { createContext, useEffect, useState } from "react";

import { auth } from "../config/firebase.config";

export const DataContext = createContext();
const DataProvider = ({ children }) => {
  const [bookedseats, setBookedSeats] = useState("");
  const [bookedBus, setBookedBus] = useState({});
  const [journeyDate, setJourneyDate] = useState("30/12/2022");
  return (
    <DataContext.Provider
      value={{
        setBookedSeats,
        bookedseats,
        setBookedBus,
        bookedBus,
        setJourneyDate,
        journeyDate,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
