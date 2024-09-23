import React, { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";

const seats = Array.from({ length: 100 }, (_, i) => `A ${i + 1}`);

const SeatSelection = ({ movie, onSeatSelect }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seat) => {
    setSelectedSeats((prevSeats) =>
      prevSeats.includes(seat)
        ? prevSeats.filter((s) => s !== seat)
        : [...prevSeats, seat]
    );
  };

  return (
    <div>
      <Typography variant="h6">
        Select Seats for {movie.title} ({movie.time})
      </Typography>
      <Grid container spacing={2} style={{ margin: "10px 0" }}>
        {seats.map((seat, index) => (
          <Grid item xs={4} md={2} key={index}>
            <Button
              variant={selectedSeats.includes(seat) ? "contained" : "outlined"}
              onClick={() => handleSeatClick(seat)}
            >
              {seat}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        disabled={!selectedSeats.length}
        onClick={() => onSeatSelect(selectedSeats)}
      >
        Confirm Seats
      </Button>
    </div>
  );
};

export default SeatSelection;
