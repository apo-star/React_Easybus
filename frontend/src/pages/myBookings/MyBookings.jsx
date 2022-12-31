import React, { useEffect, useState, useContext } from "react";
import { Container } from "@mui/material";

import "./mybookings.css";

import { AuthContext } from "../../context/AuthProvider";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const url = `http://localhost:5000/api/v1/all-bookings/${user?.email}`;
    fetch(url)
      .then((response) => response?.json())
      .then((data) => setBookings(data));
  }, []);
  return (
    <Container sx={{ marginTop: "110px", marginBottom: "20px" }}>
      <table>
        <caption>My Booking</caption>
        <thead>
          <tr>
            <th scope="col">Departure</th>
            <th scope="col">Arrival</th>
            <th scope="col">Date</th>
            <th scope="col">Fare</th>
            <th scope="col">Status</th>
            <th scope="col">Cancel</th>
          </tr>
        </thead>
        <tbody>
          {bookings?.data?.map(
            ({
              _id,
              departureLocation,
              date,
              fare,
              arrivalLocation,
              status,
            }) => (
              <tr key={_id}>
                <td data-label="Departure">{departureLocation}</td>
                <td data-label="Arrival">{arrivalLocation}</td>
                <td data-label="Date">{date}</td>
                <td data-label="Fare">{fare}</td>
                <td data-label="Status">{status}</td>
                <td data-label="Cancel">Cancel</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </Container>
  );
};

export default MyBookings;
