import React from "react";
import { Typography, Button } from "@mui/material";

const Confirmation = ({ selectedMovie, selectedSeats, bookingDetails }) => {
  return (
    <div>
      <Typography variant="h6">Booking Confirmation</Typography>
      <Typography variant="body1">
        Thank you, {bookingDetails.fullName}!
      </Typography>
      <Typography variant="body1">Movie: {selectedMovie.title}</Typography>
      <Typography variant="body1">Time: {selectedMovie.time}</Typography>
      <Typography variant="body1">Seats: {selectedSeats.join(", ")}</Typography>
      <Typography variant="body1">Email: {bookingDetails.email}</Typography>
      <Button variant="contained" onClick={() => window.location.reload()}>
        Book Another Movie
      </Button>
    </div>
  );
};

export default Confirmation;
