import React from "react";
import { useForm } from "react-hook-form";
import { Button, TextField, Grid, Typography } from "@mui/material";

const BookingForm = ({ selectedMovie, selectedSeats, onFormSubmit }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    onFormSubmit(data);
  };

  return (
    <div>
      <Typography variant="h6">Complete Your Booking</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Full Name"
              {...register("fullName", { required: true })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              {...register("email", { required: true })}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              Movie: {selectedMovie.title} ({selectedMovie.time})
            </Typography>
            <Typography variant="body1">
              Seats: {selectedSeats.join(", ")}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained">
              Confirm Booking
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default BookingForm;
