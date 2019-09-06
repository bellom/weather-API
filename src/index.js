import fetchData from "./fetchData";

document.addEventListener('click', (e) => {
    if(e.target.id === "checkBtn"){
        fetchData();
    }
});
