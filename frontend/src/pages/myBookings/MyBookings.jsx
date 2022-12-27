import React from 'react'
import { Container } from '@mui/material';

import "./mybookings.css"


const MyBookings = () => {
  return (
    <Container sx={{marginTop:"110px",marginBottom:"20px"}}>
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
          <tr>
            <td data-label="Departure">10 AM</td>
            <td data-label="Arrival">12 PM</td>
            <td data-label="Date">31/12/2022</td>
            <td data-label="Fare">$120</td>
            <td data-label="Status">OK</td>
            <td data-label="Cancel">Cancel</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}

export default MyBookings