import React from "react";
import "../MovieCard/MovieCard.css";
import { Card, Button } from "react-bootstrap";
import Rating from "@material-ui/lab/Rating";
// import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const MovieCard = ({ movie, handleData }) => {
  // const [value, setValue] = React.useState(2);

  return (
    <div className="movies" key={movie.id}>
      <Card style={{ width: "20rem" }}>
        <Card.Img
          variant="top"
          width="540px"
          height="400px"
          src={movie.image}
          alt={movie.name}
        />
        <Card.Body className="cardbody">
          <Card.Title className="movietitle">{movie.name}</Card.Title>
          <Card.Text className="movieinfo">
            <li>Type : {movie.type}</li>
            <li>Description : {movie.description}</li>
            {/* <li>Rating : {movie.rating}</li> */}
            <li>Date : {movie.date}</li>

             <Box component="fieldset" mb={3} borderColor="transparent">
             {/* <Typography component="legend">Read only</Typography> */}
             <Rating name="read-only" value={movie.rating} readOnly />
             </Box>
             
          </Card.Text>
          <Button
            variant="warning"
            onClick={() => handleData(movie.name, movie.date)}
          >
            More details
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
