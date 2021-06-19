import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  animalData: [
    {
      dog: "./sounds/dog.mp3",
      img: "./img/dog.svg",
      firstLetter: "./sounds/d.mp3",
      secondLetter: "./sounds/o.mp3",
      thirdLetter: "./sounds/g.mp3",
    },
    {
      cat: "./sounds/cat.mp3",
      img: "./img/cat.svg",
      firstLetter: "./sounds/c.mp3",
      secondLetter: "./sounds/a.mp3",
      thirdLetter: "./sounds/t.mp3",
    },
    {
      cow: "./sounds/cow.mp3",
      img: "./img/cow.svg",
      firstLetter: "./sounds/c.mp3",
      secondLetter: "./sounds/o.mp3",
      thirdLetter: "./sounds/w.mp3",
    },
    { owl: "./sounds/owl.mp3", img: "./img/owl.svg" },
    // { pig: "./sounds/pig.mp3", img: "./img/pig.svg" },
    // { hen: "./sounds/hen.mp3", img: "./img/hen.svg" },
  ],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "RESET":
      return { ...state, count: 0 };
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
