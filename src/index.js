import fetchData from "./fetchData";
// import loadDOM from "./loadDOM";


document.addEventListener('click', (e) => {
    if(e.target.id === "checkBtn"){
        // loadDOM();
        fetchData();
    }
});
