import React, {useState, useEffect} from "react";
import "./Slider.css";

export default function Slider({onChange, percentage}) {

  // initially input value is position but maybe i dont need it and can leave it as percentage
  /* const [position, setPosition] = useState(0);

  useEffect(() => {
    setPosition(percentage);
  }, [percentage]); */

  console.log(percentage);

  return (
    <div className="slider-container">
      <h1>Slider Component</h1>
      <input
        type="range"
        step="0.01"
        onChange={onChange}
        value={percentage}
      />
    </div>
  );
}
