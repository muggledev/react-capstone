import React from "react";
import "../../styles/pages/home.scss";
import cakeVideo from "../../assets/long-cake-decorating.mp4";

function Home() {
  return (
    <div className="home">
      <video
        className="hero-video"
        src={cakeVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="slogan">
        <h1>Whisk a little, shop a lot — sprinkle on the magic you've got!</h1>
      </div>
    </div>
  );
}

export default Home;
