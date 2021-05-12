import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root")
    const store = configureStore()
    // window.getState = store.getState;
    // window.dispatch = store.dispatch; // just for testing!
    ReactDOM.render(<Root store={ store } />, root)
})


// // import React from "react";
// import ReactDOM from "react-dom";

// document.addEventListener("DOMContentLoaded", () => {
//   const root = document.getElementById("root");
//   ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
// });