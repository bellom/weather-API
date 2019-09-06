import fetchData from "./fetchData";

const checkBtn = document.getElementById("checkBtn");

checkBtn.addEventListener("click", e => {
  if (e.target.id === "checkBtn") {
    e.preventDefault();
    fetchData();
  }
});
