// /* global, fetch document */
// import { temp, pressure, humidity } from "./fetchData";

// const loadDOM = () => {

//   const fahren = Math.round((temp * 9) / (5 + 32));
//   const loadTemp = document.querySelector(".loadTemp");
//   const celsius = Math.round(((fahren - 32) * 5) / 9);
//   const statusF = document.getElementById("f");
//   const statusC = document.getElementById("c");
//   const loadLetter = document.querySelector(".loadLetter");
//   const loadHumidity = document.querySelector(".humidity");
//   const loadPressure = document.querySelector(".pressure");
//   const loadWind = document.querySelector(".wind");
//   const displayLocation = document.querySelector(".location");

//   displayLocation.textContent = `${cityName}, ${country}`;
//   loadTemp.textContent = fahren;
//   loadHumidity.textContent = humidity;
//   loadPressure.textContent = Math.round(pressure);
//   loadWind.textContent = Math.round(deg);

//   statusF.addEventListener("click", () => {
//     loadTemp.textContent = fahren;
//     loadLetter.textContent = "F";
//   });

//   statusC.addEventListener("click", () => {
//     loadTemp.textContent = celsius;
//     loadLetter.textContent = "C";
//   });
// };

// export default loadDOM;
