import React from "react";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";

const movies = [
  { title: "Age Of Ultron", time: "2:00 PM" },
  { title: "Civil War", time: "4:00 PM" },
  { title: "End Game", time: "6:00 PM" },
  { title: "Infinity War", time: "2:00 PM" },
  { title: "The First Aventure", time: "4:00 PM" },
  { title: "The Winter Soildier", time: "6:00 PM" },
];

const MovieList = ({ onMovieSelect }) => {
  return (
    <Grid container spacing={3}>
      {movies.map((movie, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h5">{movie.title}</Typography>
              <Typography variant="subtitle1">{movie.time}</Typography>
              <Button variant="contained" onClick={() => onMovieSelect(movie)}>
                Book Now
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
