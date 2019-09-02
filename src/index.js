import loadApi from "./loadApi";


document.addEventListener('click', (e) => {
    if(e.target.id === "checkBtn"){
        loadApi();
    }
});
    