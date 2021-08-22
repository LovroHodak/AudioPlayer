import React, { useState } from "react";
import "./App.css";
import Slider from "./components/slider/Slider";
import song from "./file_example_MP3_700KB.mp3";
import { PercentageProvider } from "./hooks/use-percentage";

function App() {
  return (
    <PercentageProvider>
      <div className="App">
        <h1>AudioPlayer Component</h1>
        <Slider />
        <audio src={song} controls />
      </div>
    </PercentageProvider>
  );
}

export default App;
