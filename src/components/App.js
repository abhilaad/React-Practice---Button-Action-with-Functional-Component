import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div id="main">
      <button
        id="click"
        onClick={function () {
          setShow(!show);
        }}
      >
        Toggle P
      </button>
      {show ? (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      ) : null}
    </div>
  );
}
