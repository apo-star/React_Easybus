import { Box, Container, Typography } from "@mui/material";
import "./mybookings.css";

import { useMyBookingsData } from "../../hooks/useMyBookingsData";
import Spinner from "../../components/Spinner";

const MyBookings = () => {
  const { data: bookings, isLoading } = useMyBookingsData();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Container sx={{ marginTop: "110px", marginBottom: "20px" }}>
      {bookings.length < 1 ? (
        <Box
          minHeight={"80vh"}
          display={"flex"}
          sx={{
            flexDirection: "column",
            py: "100px",
            alignItems: "center",
            justifyContent: "center",
            mt: "80px",
            backgroundColor: "#0a09090f",
            width: "auto",
            mx: "auto",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "30px",
              fontWeight: "600",
              color: "gray",
            }}
          >
            No Booking Available
          </Typography>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="59"
            height="51"
            className="m-auto"
          >
            <g fill="none" fillRule="evenodd">
              <path d="M1 48V4.851C1 2.625 2.79.821 4.998.821L17.945 1c1.435 0 7.204 6.005 8.639 6.005h27.672c2.208 0 3.998 1.846 3.998 4.072V49a1 1 0 0 1-1 1H3a2 2 0 0 1-2-2z"></path>
              <path d="M3 15h53a2 2 0 0 1 2 2v31a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V17a2 2 0 0 1 2-2z"></path>
              <path
                stroke="#757A97"
                d="M.5 47V5.03C.5 2.53 2.5.5 4.972.5h12.863c.788 0 1.708.687 4.614 3.141 2.462 2.08 3.568 2.905 3.969 2.905h27.61c2.471 0 4.472 2.03 4.472 4.531V47a3.5 3.5 0 0 1-3.5 3.5H4A3.5 3.5 0 0 1 .5 47z"
              ></path>
              <path
                stroke="#757A97"
                d="M4 14.5A3.5 3.5 0 0 0 .5 18v29A3.5 3.5 0 0 0 4 50.5h51a3.5 3.5 0 0 0 3.5-3.5V18a3.5 3.5 0 0 0-3.5-3.5H4z"
              ></path>
            </g>
          </svg>
        </Box>
      ) : (
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
        </table>
      )}
    </Container>
  );
};

export default MyBookings;
