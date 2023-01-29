import './App.css';
import 'semantic-ui-css/semantic.min.css';
import React, { useEffect, useState } from "react";

export default async function App() {

  const [lat, setLat] = useState([]);
  const [lon, setLong] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    console.log("Latitude is:", lat)
    console.log("Longitude is:", lon)
  },
  [lat, lon]);

  await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json())
    .then(result => {
      //console.log(result);
  });

  return (
    <div className="App">

    </div>
  );
}
