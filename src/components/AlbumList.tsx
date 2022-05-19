import { useEffect, useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Artist, SongsResponse, Song } from "../types/SongsResponse";

function AlbumList() {
  const { albumId } = useParams();
  console.log(albumId);

  const [trackDetails, setTrackDetails] = useState<Song | null>(null);

  useEffect(() => {
    fetchTrack();
  }, []);

  const fetchTrack = async () => {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/track/" + albumId
    );
    console.log(response);
    if (response.ok) {
      let data = (await response.json()) as Song;
      console.log(data);
      setTrackDetails(data);
    } else {
      console.log("error");
    }
  };
  console.log(trackDetails);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={trackDetails?.album?.cover} />
        <Card.Body>
          <Card.Title>{trackDetails?.artist?.name}</Card.Title>
          <Card.Text></Card.Text>
          <Button variant="primary">{trackDetails?.album?.title}</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AlbumList;
