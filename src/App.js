import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import './App.css';



function App() {

  const [x, setx] = useState(52);
  const [y, sety] = useState(55);
  const form = useRef();


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


  /* code for moving button */
  const popUp = () => {
    alert("Aha, chytila jsi tlačítko ne? \nTen kdo stiskne toto tlačítko vyhrává jeden volný lístek na rande 14. února s vhodným svobodným pánem, kterému můžete napsat na email - vachal.vojta@email.cz");
  }

  const clickedYes = () => {
    alert("Buď jsi nemohla chytit tlačítko ne, nebo jsi opravdu chtěla být mým valentýnem. V obou připadech mi napiš na facebook a domluvíme <3.");
  }


  function mouseOver() {
    setx(Math.random() * 100);
    sety(Math.random() * 100);
  }

  var noStyle = {
    left: x + "%",
    top: y + "%",
    position: "absolute",
  };

  var yesStyle = {
    left: "40%",
    top: "55%",
    position: "absolute",
  }

  return (
    <>
    <p className="pre-valentine">
      Budeš mým
    </p>
    <p className="valentine">Valentýnem?</p>
      <button
          style={yesStyle}
          type="submit"
          onClick={clickedYes}
      >
        ANO!
      </button>
      <button
          onMouseOver={mouseOver}
          style={noStyle}
          onClick={popUp}
      >
        ne
      </button>
    </>
  );
}

export default App;
