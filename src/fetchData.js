/* eslint-disable no-redeclare */
/* global, fetch document */

const fetchData = () => {
  let location = document.getElementById("city");
  let city = location.value;
  let fetchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fa1c7f10e6e75b7dc652e684202b5bd1`;
  let displayLocation = document.querySelector(".location");

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
      const loadTemp = document.querySelector(".loadTemp");
      const celsius = Math.round(((fahren - 32) * 5) / 9);
      const statusF = document.getElementById("f");
      const statusC = document.getElementById("c");
      const loadLetter = document.querySelector(".loadLetter");
      const loadHumidity = document.querySelector(".humidity");
      const loadPressure = document.querySelector(".pressure");
      const loadWind = document.querySelector(".wind");
      
      displayLocation.textContent = `${cityName}, ${country}`;
      loadTemp.textContent = fahren;
      loadHumidity.textContent = humidity;
      loadPressure.textContent = Math.round(pressure);
      loadWind.textContent = Math.round(deg);

      statusF.addEventListener("click", () => {
        loadTemp.textContent = fahren;
        loadLetter.textContent = "F";
      });

      statusC.addEventListener("click", () => {
        loadTemp.textContent = celsius;
        loadLetter.textContent = "C";
      });
    })
    .catch((err) => {
      displayLocation.textContent = "Location Not Found !!";
      return err;
    });
};

export default fetchData;
