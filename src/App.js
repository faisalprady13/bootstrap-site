import React from "react";
import "./assets/scss/main.scss";
import LandingPage from "./components/LandingPage/LandingPage";
import Navigation from "./components/Navigation/Navigation";
import Features from "./components/Features/Features";
import About from "./components/About/About";

import Blob1 from "./assets/img/Blob/blob-1.svg";
import Blob2 from "./assets/img/Blob/blob-2.svg";
import Blob3 from "./assets/img/Blob/blob-3.svg";
import Blob4 from "./assets/img/Blob/blob-4.svg";

//Choose the project from the "components" folder to see the example
function App() {
  return (
    <div className="App">
      <Navigation />
      <LandingPage />
      <div className="blob-wrapper customized">
        <img src={Blob1} className="blob-2" alt="blob 2" />
        <img src={Blob2} className="blob-3" alt="blob 3" />
        <img src={Blob3} className="blob-4" alt="blob 4" />

        <Features />
        <About />
      </div>
    </div>
  );
}

export default App;
