import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header title="My React App" />
      <Content />
      <Footer />
    </div>
  );
}

function Header({ title }) {
  return <h1>{title}</h1>;
}

function Content() {
  const [isClicked, setIsClicked] = useState("false");
  const [text, setText] = useState("");

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
  };
  if (isClicked) {
    return (
      <div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter some text to display below..."
        ></textarea>
        <button onClick={handleButtonClick}>Hide Text Box</button>
        <p>{text}</p>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={handleButtonClick}>Display Text Box</button>
      </div>
    );
  }
}

function Footer() {
  return (
    <footer>
      <p>Created by Imrul Imtiaz</p>
      <p>Copyright 2023</p>
    </footer>
  );
}

export default App;
