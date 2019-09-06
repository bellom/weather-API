/* eslint-disable no-redeclare */
/* global, fetch document */

import { loadDOM, displayErr } from "./loadDOM";

const fetchData = () => {
  let location = document.getElementById("city");
  let city = location.value;
  let fetchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fa1c7f10e6e75b7dc652e684202b5bd1`;
  
  fetch(fetchUrl, { mode: "cors" })
    .then(response => {
      return response.json();
    })
    .then(response => {
      const cityName = response.name;
      const { country } = response.sys;
      const { temp, humidity, pressure } = response.main;
      const { deg } = response.wind;
      const fahren = Math.round((temp * 9) / (5 + 32));
      
      loadDOM (temp, pressure, humidity, cityName, country, deg, fahren);

    })
    .catch((err) => {
      displayErr();
      return err;
    });
};

export default fetchData;
