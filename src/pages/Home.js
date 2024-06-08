import LeftSidebar from "../components/LeftSidebar.js";
import RightSidebar from "../components/RightSidebar.js";
const Home = () => {
  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-3">
            <LeftSidebar />
          </div>
          <div className="col-md-9">
            <RightSidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
