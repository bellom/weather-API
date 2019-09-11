/* global, fetch document */

const displayLocation = document.querySelector(".location");
const loadTemp = document.querySelector(".loadTemp");
const loadHumidity = document.querySelector(".humidity");
const loadPressure = document.querySelector(".pressure");
const loadWind = document.querySelector(".wind");
const statusF = document.getElementById("f");
const statusC = document.getElementById("c");
const loadLetter = document.querySelector(".loadLetter");

const loadDOM = (temp, pressure, humidity, cityName, country, deg, fahren) => {
  const celsius = Math.round(((fahren - 32) * 5) / 9);

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
};

const displayErr = () => {
  displayLocation.textContent = "";
  loadTemp.textContent = "0";
  loadHumidity.textContent = "0";
  loadPressure.textContent = "0";
  loadWind.textContent = "0";
  displayLocation.textContent = "Location Not Found !!";

  statusF.addEventListener("click", () => {
    loadTemp.textContent = "0";
    loadLetter.textContent = "F";
  });

  statusC.addEventListener("click", () => {
    loadTemp.textContent = "0";
    loadLetter.textContent = "C";
  });
};

export { loadDOM, displayErr };
