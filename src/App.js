import React, { useState } from 'react';

import './App.css';



function App() {
  const [x, setx] = useState(52);
  const [y, sety] = useState(55);

  const body = document.querySelector("body");
  if (!body) {
    throw new ReferenceError("Body section not found.");
  }

  function createHeart() {
    const heart = document.createElement("i");
    heart.className = "fa-solid fa-heart";
    heart.style.left = (Math.random() * 100) + "vw";
    heart.style.animationDuration = (Math.random() * 3) + 2 + "s"
    body.appendChild(heart);
  }
  setInterval(createHeart, 1000);
  setInterval(function name(params) {
    var heartArr = document.querySelectorAll(".fa-heart")
    if (heartArr.length > 200) {
      heartArr[0].remove()
    }

  }, 100);

  const clickedYes = () => {
    alert("Buď jsi nemohla chytit tlačítko ne, nebo jsi opravdu chtěla být mým valentýnem. V obou připadech mi napiš na facebook a domluvíme <3.");
  }

  function onNoClick() {
    setx(Math.random() * 100);
    sety(Math.random() * 100);
  }

  var noStyle = {
    left: x + "%",
    top: y + "%",
    position: "absolute",
  };

  return (
    <div className="wrapper">
    <p className="pre-valentine">
      Budeš mým
    </p>
    <p className="valentine">Valentýnem?</p>
      <button
          type="submit"
          onClick={clickedYes}
      >
        ANO!
      </button>
      <button
          style={noStyle}
          onClick={onNoClick}
      >
        ne
      </button>
    </div>
  );
}

export default App;
