import fetchData from "./fetchData";

const checkBtn = document.getElementById("checkBtn");

checkBtn.addEventListener("click", e => {
    e.preventDefault();
    fetchData();
});
