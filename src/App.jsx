import { useState } from "react";
import "./App.css";
const App = () => {
  const [backgroundColor, setBackgroundColor] = useState(false);
  const [colorName, setColorName] = useState("");
  const [hexName, setHexName] = useState("");

  const handleChangeColor = (color) => {
    if ("#e0e0e0" === color) {
      setBackgroundColor(true);
      setColorName("changeCon1");
      setHexName(color);
    } else if ("#6fcf97" === color) {
      setBackgroundColor(true);
      setColorName("changeCon2");
      setHexName(color);
    } else if ("#56ccf2" === color) {
      setBackgroundColor(true);
      setColorName("changeCon3");
      setHexName(color);
    } else if ("#bb6bd9" === color) {
      setBackgroundColor(true);
      setColorName("changeCon4");
      setHexName(color);
    } else {
      alert("error: Unknown background");
    }
  };

  return (
    <div className={backgroundColor ? `${colorName}` : "container"}>
      <img
        alt="color-pic"
        src="https://img.freepik.com/free-vector/colorful-rainbow-background_23-2147815902.jpg?t=st=1734880791~exp=1734884391~hmac=c21fa3f987213dc65100492a25e51e29406c07b59cbdf59d25cb249d1109feae&w=996"
      />
      <h1>Color Picker</h1>
      <div className="btn-container">
        <button className="btn1" onClick={() => handleChangeColor("#e0e0e0")}>
          #e0e0e0
        </button>
        <button className="btn2" onClick={() => handleChangeColor("#6fcf97")}>
          #6fcf97
        </button>
        <button className="btn3" onClick={() => handleChangeColor("#56ccf2")}>
          #56ccf2
        </button>
        <button className="btn4" onClick={() => handleChangeColor("#bb6bd9")}>
          #bb6bd9
        </button>
      </div>
      <p className="color-name">
        Background Color :{" "}
        <span>{backgroundColor ? `${hexName}` : "#ffffff"}</span>
      </p>
      <p>
        Try clicking on one of the colors above to change the background color
        of this page!
      </p>
    </div>
  );
};

export default App;
