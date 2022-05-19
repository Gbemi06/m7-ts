import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Song, SongsResponse } from "../types/SongsResponse";
import DisplayCard from "./DisplayCard";

function Homepage() {
  const [search, setSearch] = useState<Song[]>([]);
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const fetchSongs = async () => {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`
    );
    console.log(response);
    if (response.ok) {
      let data = (await response.json()) as SongsResponse;
      console.log(data);
      setSearch(data.data);
    } else {
      console.log("error");
    }
  };
  // console.log(search);

  return (
    <>
      <div>
        <Form.Group className="mb-3" controlId="roleValue">
          <Form.Label>Search</Form.Label>
          <Form.Control
            type="text"
            placeholder="Type here"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Form.Group>
        <Button className="py-3" variant="primary" onClick={() => fetchSongs()}>
          Search Button
        </Button>
      </div>
      <Row>
        {search.map((song, i) => (
          <Col md={3} className="my-3" key={i}>
            <Link to={"" + song.album.id}>
              <DisplayCard song={song} />
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Homepage;
