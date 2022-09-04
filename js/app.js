// Do not show your api Key in JS 

const API_KEY = `387de25b277a22eb9ea09d1a26cdf0d7`;

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))

}

const displayTemperature = data => {
    // const temperature = document.getElementById('temperature');
    // temperature.innerText = data.main.temp;
    setInnerTextById('temperature', data.main.temp);
    setInnerTextById('condition', data.weather[0].main)
    // console.log(data.weather[0].main);
}

const setInnerTextById = (id, text) => {
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}
document.getElementById('btn-search').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    const city = inputField.value;
    // set city
    document.getElementById('city').innerText = city;

    loadTemperature(city);

})
loadTemperature('dhaka')