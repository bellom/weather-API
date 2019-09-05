const loadDOM = () => {
    let body  = document.querySelector(".forecast-table");

    body.innerHTML =    `<div class="container">
                            <div class="forecast-container">
                                <div class="today forecast">
                                    <div class="forecast-content">
                                        <div class="location">Unknown</div>
                                        <div class="degree">
                                            <div class="num"><i class="loadTemp">0</i><sup>o</sup><i class="loadLetter">F</i></div>
                                            <div class="forecast-icon">
                                            </div>	
                                        </div>
                                        <div class="degree"> <i id="f">F</i> -|- <i id="c">C</i>
                                        </div>
                                    </div>
                                </div>
                                <div class="forecast">
                                    <div class="forecast-header">
                                        <div class="day">Humidity</div>
                                    </div>
                                    <div class="forecast-content">
                                        <div class="forecast-icon">
                                            <img src="img/icon-3.svg" alt="icon3">
                                        </div>
                                        <div class="degree"><i class="humidity">0</i>%</div>
                                    </div>
                                </div>
                                <div class="forecast">
                                    <div class="forecast-header">
                                        <div class="day">Wind</div>
                                    </div>
                                    <div class="forecast-content">
                                        <div class="forecast-icon">
                                            <img src="img/icon-2.svg" alt="icon2">
                                        </div>
                                        <div class="degree"><i class="wind">0</i> mph</div>
                                    </div>
                                </div>
                                <div class="forecast">
                                    <div class="forecast-header">
                                        <div class="day">Pressure</div>
                                    </div>
                                    <div class="forecast-content">
                                        <div class="forecast-icon">
                                            <img src="img/icon-4.svg" alt="icon4">
                                        </div>
                                        <div class="degree"><i class="pressure">0</i></div>
                                    </div>
                                </div>
                            </div>
                        </div>`
                    
};

export default loadDOM;