import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Starrating from "./Starrating";
function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <Starrating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This Movie was rated {movieRating} stars</p>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* // <Starrating maxRating={10} messages={["Terrible","Bad","Okay","Good","Amazing"]}/>
    // <Starrating size={24} color='red' defaultRating={3}/> */}
    {/* <Test/> */}
  </React.StrictMode>
);
