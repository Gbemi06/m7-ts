import { Card, Button, Container } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { Song } from "../types/SongsResponse";

interface SongComponentProps {
  song: Song;
}

const DisplayCard = ({ song }: SongComponentProps) => {
  const navigate = useNavigate();
  // let idRoute = "/" + data.company_name;
  //let idFavorite = "/favorites";

  let location = useLocation();

  return (
    <Container>
      <Card>
        <Card.Img variant="top" src={song.album.cover_medium} />
        <Card.Body>
          <Card.Title>{song.album.title}</Card.Title>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DisplayCard;
