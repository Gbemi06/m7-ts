import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Artist, SongsResponse } from "../types/SongsResponse";

function AlbumList() {
  const params = useParams();
  console.log(params.albumId);

  const [trackDetails, setTrackDetails] = useState<Artist[]>([]);

  useEffect(() => {
    fetchTrack();
  }, []);

  const fetchTrack = async () => {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/track/${params.albumId}`
    );
    console.log(response.body);
    if (response.ok) {
      let data = await response.json();
      console.log(data);
      //setTrackDetails(data);
    } else {
      console.log("error");
    }
  };
  // console.log(search);
  return <div>AlbumList</div>;
}

export default AlbumList;
