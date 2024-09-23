import React from "react";
import { Card, CardContent, Typography, Grid, Button } from "@mui/material";

const BookingHistory = ({ bookings, onDelete, onClearAll }) => {
  if (!bookings.length) {
    return <Typography variant="body1">No bookings made yet.</Typography>;
  }

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Booking History
      </Typography>
      <Grid container spacing={3}>
        {bookings.map((booking, index) => (
          <Grid item sm={6} key={index} sx={{ width: "200px" }}>
            <Card>
              <CardContent>
                <Typography variant="h6">{booking.movie.title}</Typography>
                <Typography variant="subtitle1">
                  {booking.movie.time}
                </Typography>
                <Typography variant="body2">
                  Seats: {booking.seats.join(", ")}
                </Typography>
                <Typography variant="body2">
                  Name: {booking.details.fullName}
                </Typography>
                <Typography variant="body2">
                  Email: {booking.details.email}
                </Typography>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => onDelete(index)}
                >
                  Delete
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        color="error"
        onClick={onClearAll}
        style={{ marginTop: "20px" }}
      >
        Clear All History
      </Button>
    </div>
  );
};

export default BookingHistory;
