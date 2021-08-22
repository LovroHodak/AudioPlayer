import React, { useState, useRef } from "react";
import "./App.css";
import Slider from "./components/slider/Slider";
import song from "./file_example_MP3_700KB.mp3";

function App() {
  const [percentage, setPercentage] = useState(0);

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef();

  const onChange = (e) => {
    const audio = audioRef.current;
    audio.currentTime = (audio.duration / 100) * e.target.value;
    setPercentage(e.target.value);
  };

  const playSong = () => {
    const audio = audioRef.current;
    audio.volume = 0.1;

    if (!isPlaying) {
      setIsPlaying(true);
      audio.play();
    }

    if (isPlaying) {
      setIsPlaying(false);
      audio.pause();
    }
  }

  return (
    <div className="App">
      <h1>AudioPlayer Component</h1>
      <Slider onChange={onChange} percentage={percentage} />
      <audio ref={audioRef} src={song} />
      <button onClick={playSong}>Play</button>
    </div>
  );
}

export default App;
