import { useState } from "react";
import dataSlider from "./DataSlider";
import ".Slider.css";

export default function Slider() {
  const [slideAnim, setSlideAnim] = useState({
    index: 1,
    inProgess: false,
  });
  return (
    <div>
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={
              slideAnim.index === index + 1 ? "slide active-anim" : "slide"
            }
          ></div>
        );
      })}
    </div>
  );
}
