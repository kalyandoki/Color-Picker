import "./App.css";
const App = () => {
  return (
    <div className="container">
      <img
        alt="color-pic"
        src="https://img.freepik.com/free-vector/colorful-rainbow-background_23-2147815902.jpg?t=st=1734880791~exp=1734884391~hmac=c21fa3f987213dc65100492a25e51e29406c07b59cbdf59d25cb249d1109feae&w=996"
      />
      <h1>Color Picker</h1>
      <div className="btn-container">
        <button className="btn1">#e0e0e0</button>
        <button className="btn2">#6fcf97</button>
        <button className="btn3">#56ccf2</button>
        <button className="btn4">#bb6bd9</button>
      </div>
      <p className="color-name">
        Background Color : <span>#fffff</span>
      </p>
      <p>
        Try clicking on one of the colors above to change the background color
        of this page!
      </p>
    </div>
  );
};

export default App;
