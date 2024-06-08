import LeftSidebar from "../components/LeftSidebar.js";
import Footer from "../components/Footer.js";
import Table from "react-bootstrap/Table";
import ReactPlayer from "react-player/youtube";
import ReactAudioPlayer from "react-audio-player";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Common.css";
import baseURL from "../api.js";
import Draggable from "react-draggable";

const AllMusic = () => {
  const [recommendedSongs, setRecommendedSongs] = useState([]);
  const [songPlay, setsongPlay] = useState([]);
  let { artistName } = useParams();
  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseURL}/search`, {
        params: { q: artistName, type: "song" },
        headers: {
          "X-RapidAPI-Key":
            "a62672ecf3msh43d9d53bbe93bfep100cb3jsn076aceda4595",
          "X-RapidAPI-Host": "youtube-music-api3.p.rapidapi.com",
        },
      });
      console.log(response.data.result);

      setRecommendedSongs(response.data.result || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const searchSong = async (id) => {
    try {
      const response = await axios.get(`${baseURL}/music/info`, {
        params: { id: id },
        headers: {
          "X-RapidAPI-Key":
            "a62672ecf3msh43d9d53bbe93bfep100cb3jsn076aceda4595",
          "X-RapidAPI-Host": "youtube-music-api3.p.rapidapi.com",
        },
      });
      console.log("Play", response.data);
      setsongPlay(response.data.basic_info || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div
        className="container-fluid all-music mt-4"
        style={{ marginBottom: "40%" }}
      >
        <div className="row">
          <div className="col-md-3">
            <LeftSidebar />
          </div>
          <div className="col-md-9">
            {/* <div className="changeWidth">
              <ReactPlayer url={songPlay.url_canonical} className="player" />
            </div> */}

            <Draggable
              axis="x"
              handle=".handle"
              defaultPosition={{ x: 0, y: 0 }}
              position={null}
              grid={[25, 25]}
              scale={1}
            >
              <div className="changeWidth">
                <ReactPlayer url={songPlay.url_canonical} className="player" />
              </div>
            </Draggable>
            <div className="row ">
              {recommendedSongs.length > 0 ? (
                recommendedSongs.map((song, index) => (
                  <div className="col-md-4 mb-3" key={song.videoId}>
                    <div class="card" style={{ height: "100px" }}>
                      <div
                        className="card-body d-flex align-items-center"
                        onClick={() => {
                          searchSong(song.videoId);
                        }}
                      >
                        <img
                          src={song.thumbnail}
                          alt=""
                          style={{ height: "50px", marginRight: "10px" }}
                        />
                        <div>
                          <p className="card-title">{song.title}</p>
                          <p className="card-text">{song.author}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div>No</div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <ReactPlayer url={songPlay.url_canonical} className="player" /> */}
      {/* <ReactAudioPlayer src={songPlay.url_canonical} /> */}
      <Footer>
        <ReactPlayer url={songPlay.url_canonical} className="player" />
      </Footer>
    </>
  );
};

export default AllMusic;
