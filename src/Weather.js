import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState(null);

  function handleRequest(response) {
    const { main, weather, wind } = response.data;
    setTemperature(main.temp);
    setDescription(weather[0].description);
    setHumidity(main.humidity);
    setWind(wind.speed);
    setIcon(`https://openweathermap.org/img/w/${weather[0].icon}.png`);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (city.length !== 0) {
      let apiKey = "f5e814a04eddfab1740f07bf0328eee2";
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

      axios.get(url).then(handleRequest);
    }
  }

  return (
    <div className="center">
      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => setCity(event.target.value)}
          type="text"
          placeholder="Enter a city"
        />
        <input type="submit" value="Search" />
      </form>

      {temperature !== null && (
        <ul>
          <li>City: {city}</li>
          <li>Temperature: {Math.round(temperature)}˚C</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity} %</li>
          <li>Wind: {wind} km/h</li>
          <img alt="icon" src={icon} />
        </ul>
      )}
    </div>
  );
}
