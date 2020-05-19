import React from "react";
import "./assets/scss/main.scss";
import LandingPage from "./components/LandingPage/LandingPage";
import Navigation from "./components/Navigation/Navigation";
import Features from "./components/Features/Features";
import About from "./components/About/About";

//Choose the project from the "components" folder to see the example
function App() {
  return (
    <div className="App">
      <Navigation />
      <LandingPage />
      <Features />
      <About />
    </div>
  );
}

export default App;
