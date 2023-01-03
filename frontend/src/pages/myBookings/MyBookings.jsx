import { Container } from "@mui/material";
import "./mybookings.css";

import { useMyBookingsData } from "../../hooks/useMyBookingsData";
import Spinner from "../../components/Spinner";

const MyBookings = () => {
  const { data: bookings, isLoading } = useMyBookingsData();

  if (isLoading) {
    return <Spinner />;
  }
  console.log(bookings);
  return (
    <Container sx={{ marginTop: "110px", marginBottom: "20px" }}>
      {
        bookings ? <table>
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
            {bookings?.map(
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
        </table> : <h1>No Booking found</h1>
      }
    </Container>
  );
};

export default MyBookings;
