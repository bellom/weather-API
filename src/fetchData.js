import loadDOM from "./loadDOM";

const fetchData = () => {
  loadDOM();
  let location = document.getElementById("city");
  let city = location.value;
  let fetchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fa1c7f10e6e75b7dc652e684202b5bd1`;

  fetch(fetchUrl, { mode: "cors" })
    .then(response => {
      return response.json();
    })
    .then(response => {
      const cityName = response.name;
      const { temp, humidity, pressure } = response.main;
      const { deg } = response.wind;
      const { country } = response.sys;

      let displayLocation = document.querySelector(".location");
      displayLocation.textContent = `${cityName}, ${country}`;

      let loadTemp = document.querySelector(".loadTemp");
      let fahren = Math.round((temp * 9) / (5 + 32));
      let celsius = Math.round(((fahren - 32) * 5) / 9);
      loadTemp.textContent = fahren;
      let statusF = document.getElementById("f");
      let statusC = document.getElementById("c");
      let loadLetter = document.querySelector(".loadLetter");
      let loadHumidity = document.querySelector(".humidity");
      let loadPressure = document.querySelector(".pressure");
      let loadWind = document.querySelector(".wind");

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
    .catch(err => {
      let displayLocation = document.querySelector(".location");
      displayLocation.textContent = "Location Not Found !!";
    });
};

export default fetchData;
