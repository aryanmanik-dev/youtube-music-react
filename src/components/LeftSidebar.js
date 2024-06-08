import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import "./style.css";
const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <div className="card text-start">
        <div className="card-body">
          <h4 className="card-title mb-3">
            <img
              style={{ height: "30px", marginRight: "10px" }} // Added margin to the right of the image
              src="https://music.youtube.com/img/on_platform_logo_dark.svg"
              alt=""
            />
          </h4>
          <p className="card-text">
            <HomeIcon style={{ marginRight: "5px" }} /> Home{" "}
          </p>
          <p className="card-text">
            <ExploreIcon style={{ marginRight: "5px" }} /> Explore{" "}
          </p>
          <p className="card-text">
            <LibraryAddIcon style={{ marginRight: "5px" }} /> Library{" "}
          </p>
          <p className="card-text">
            <ControlPointIcon style={{ marginRight: "5px" }} /> Upgrade{" "}
          </p>
        </div>
      </div>

      <div className="card text-start mt-3">
        <div className="card-body">
          <h4 className="card-title">
            <DynamicFeedIcon style={{ marginRight: "5px" }} /> Your Library{" "}
          </h4>
          <p className="card-text">Create Your First Playlist </p>
          <p>It's easy we will help you</p>

          <button className="btn btn-dark">Create Playlist</button>
        </div>

        <div className="card-body">
          <p className="card-text">Let's find some podcasts to follow</p>
          <p>We will keep you updated on new episodes</p>

          <button className="btn btn-dark">Browse Podcasts</button>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
