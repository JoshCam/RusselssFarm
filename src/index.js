import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
const initialState = {
  animalData: [
    {
      animal: "dog",
      audio: "./sounds/dog.wav",
      img: "./img/dog.svg",
      firstLetter: "./sounds/D.wav",
      secondLetter: "./sounds/O.wav",
      thirdLetter: "./sounds/G.wav",
    },
    {
      animal: "cat",
      audio: "./sounds/cat.wav",
      img: "./img/cat.svg",
      firstLetter: "./sounds/C.wav",
      secondLetter: "./sounds/A.wav",
      thirdLetter: "./sounds/T.wav",
    },
    {
      animal: "cow",
      audio: "./sounds/cow.wav",
      img: "./img/cow.svg",
      firstLetter: "./sounds/C.wav",
      secondLetter: "./sounds/O.wav",
      thirdLetter: "./sounds/W.wav",
    },
    {
      animal: "owl",
      audio: "./sounds/owl.wav",
      img: "./img/owl.svg",
      firstLetter: "./sounds/O.wav",
      secondLetter: "./sounds/W.wav",
      thirdLetter: "./sounds/L.wav",
    },
    {
      animal: "pig",
      audio: "./sounds/pig.wav",
      img: "./img/pgi.svg",
      firstLetter: "./sounds/P.wav",
      secondLetter: "./sounds/I.wav",
      thirdLetter: "./sounds/G.wav",
    },
    {
      animal: "hen",
      audio: "./sounds/hen.wav",
      img: "./img/hen.svg",
      firstLetter: "./sounds/H.wav",
      secondLetter: "./sounds/E.wav",
      thirdLetter: "./sounds/N.wav",
    },
  ],
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_SCREEN_MODE":
      return { ...state, screenMode: action.screenMode };
    default:
      return state;
  }
}
const store = createStore(reducer);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
