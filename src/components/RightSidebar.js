import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import baseURL from "../api.js";
const RightSidebar = () => {
  const [recommendedSongs, setRecommendedSongs] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseURL}/recommend`, {
        params: { gl: "IN" },
        headers: {
          "X-RapidAPI-Key":
            "a62672ecf3msh43d9d53bbe93bfep100cb3jsn076aceda4595",
          "X-RapidAPI-Host": "youtube-music-api3.p.rapidapi.com",
        },
      });
      console.log(response.data.results);
      setRecommendedSongs(response.data.results || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="right-sidebar">
      <div className="row">
        {recommendedSongs.length > 0 ? (
          recommendedSongs.map((song) => (
            <div className="col-md-3 mb-3" key={song.videoId}>
              <Link to={`/playlist/${song.author}`}>
                <div className="card p-3" style={{ height: "330px" }}>
                  <img
                    src={song.thumbnail}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <div className="card-title">{song.author}</div>
                    <p className="card-text">{song.title}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="col-md-12">
            <div class="alert alert-success" role="alert">
              No data found
            </div>
          </div>
        )}

        {/* <div className="col-md-3">
          <div class="card p-3" style={{ height: "280px" }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4gVADuZzPo_SkmBWe4Zj9maAI8jmDmZbsBg&usqp=CAU"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <div class="card-title">Today's Top Hits</div>
              <p class="card-text">Nikii is on the top of 50s</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div class="card p-3" style={{ height: "280px" }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4gVADuZzPo_SkmBWe4Zj9maAI8jmDmZbsBg&usqp=CAU"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <div class="card-title">Today's Top Hits</div>
              <p class="card-text">Nikii is on the top of 50s</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div class="card p-3" style={{ height: "280px" }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4gVADuZzPo_SkmBWe4Zj9maAI8jmDmZbsBg&usqp=CAU"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <div class="card-title">Today's Top Hits</div>
              <p class="card-text">Nikii is on the top of 50s</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default RightSidebar;
