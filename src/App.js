import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import MovieList from "./MovieList";
import SeatSelection from "./SeatSelection";
import BookingForm from "./BookingForm";
import Confirmation from "./Confirmation";
import BookingHistory from "./BookingHistory";
import { Container, Typography, Button } from "@mui/material";
import Cinema from "./img/cinema(2).png";
const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookingDetails, setBookingDetails] = useState(null);
  const [bookingHistory, setBookingHistory] = useState([]);

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookingHistory(storedBookings);
  }, []);

  const handleBookingSubmit = (details) => {
    const newBooking = {
      movie: selectedMovie,
      seats: selectedSeats,
      details,
    };

    const updatedBookings = [...bookingHistory, newBooking];
    setBookingHistory(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));

    setBookingDetails(details);
  };

  const handleDeleteBooking = (index) => {
    const updatedBookings = bookingHistory.filter((_, i) => i !== index);
    setBookingHistory(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
  };

  const handleClearAll = () => {
    setBookingHistory([]);
    localStorage.removeItem("bookings");
  };

  return (
    <Router>
      <Container sx={{ backgroundImage }}>
        <Typography variant="h3" gutterBottom>
          Cinema Booking System
        </Typography>
        <nav>
          <Button component={Link} to="/movies" variant="outlined">
            Movie List
          </Button>
          <Button
            component={Link}
            to="/history"
            variant="outlined"
            style={{ marginLeft: "10px" }}
          >
            Booking History
          </Button>
        </nav>

        <Routes>
          <Route
            path="/movies"
            element={
              <>
                {!selectedMovie && (
                  <MovieList
                    onMovieSelect={(movie) => setSelectedMovie(movie)}
                  />
                )}

                {selectedMovie && !selectedSeats.length && (
                  <SeatSelection
                    movie={selectedMovie}
                    onSeatSelect={(seats) => setSelectedSeats(seats)}
                  />
                )}

                {selectedSeats.length > 0 && !bookingDetails && (
                  <BookingForm
                    selectedMovie={selectedMovie}
                    selectedSeats={selectedSeats}
                    onFormSubmit={handleBookingSubmit}
                  />
                )}

                {bookingDetails && (
                  <Confirmation
                    selectedMovie={selectedMovie}
                    selectedSeats={selectedSeats}
                    bookingDetails={bookingDetails}
                  />
                )}
              </>
            }
          />
          <Route
            path="/history"
            element={
              <BookingHistory
                bookings={bookingHistory}
                onDelete={handleDeleteBooking}
                onClearAll={handleClearAll}
              />
            }
          />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
