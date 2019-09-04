const fetchData = () => {
    let location = document.getElementById("city");
    let city = location.value;
    let fetchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fa1c7f10e6e75b7dc652e684202b5bd1`;
    
    fetch(fetchUrl, {mode: 'cors'})
    .then((response) => {
        return (response.json())
    })
    .then((response) => {
        console.log(response);
        const { temp } = response.main;
        let loadApiDom = document.getElementById("loadApiDom");
        let fahren = Math.round((temp * 9) / (5 + 32));
        loadApiDom.textContent = fahren;

        // converter 
        let celsius = Math.round(((fahren - 32) * 5) / 9);

        // toggle
        let status = document.querySelector(".inline-block span");
        status.addEventListener('click', () => {
            if (status.textContent === "F"){
                status.textContent = "C";
                loadApiDom.textContent = celsius;
            } else {
                status.textContent = "F";
                loadApiDom.textContent = fahren;
            }
        })
    })
    .catch((err) => {
    console.log(err);
    })
};


export default fetchData;