const weatherForm = document.querySelector('.weatherForm');
const cityInput = document.querySelector('.cityInput');
const card = document.querySelector('.card');
const apikey = 'YOUR_API_KEY_HERE';

weatherForm.addEventListener("submit", async event => {
    // ป้องกันไม่ให้ Browser รีเฟรชหน้าจอ เพื่อให้ประสบการณ์ใช้งานเหมือน Application (SPA)
    event.preventDefault();

    const city = cityInput.value;

    if (city) {
        try {
            // รอรับข้อมูลจาก API จนเสร็จก่อนจะทำงานต่อ (await) โดยไม่ทำให้หน้าจอค้าง
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error) { 
            console.error(error);
            displayError(error);
        }
    }
    else { 
        displayError('Please enter valid city');
    }
});

async function getWeatherData(city) {
    
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

    const responce = await fetch(apiurl);

    if (!responce.ok) {
        throw new Error('Could not fetch weather data');
    }
    
    return await responce.json();
}

function displayWeatherInfo(data) {
    /*ดึงข้อมูลที่ซับซ้อน (Nested Object) ออกมาเป็นตัวแปรให้อ่านง่ายขึ้นทันที
    เช่น ดึง temp จาก main, ดึง description จาก weather array ตัวแรก*/
    console.log(data);
    const { name: city,
            main: { temp, humidity },
            weather: [{ description, id }] } = data;
    card.textContent = '';
    card.style.display = 'flex';
    

    const cityDisplay = document.createElement('h1');
    const tempDisplay = document.createElement('p');
    const humidityDisplay = document.createElement('p');
    const descDisplay = document.createElement('p');
    const weatherEmoji = document.createElement('p');
    
    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);
    
    cityDisplay.classList.add('cityDisplay');
    tempDisplay.classList.add('tempDisplay');
    humidityDisplay.classList.add('humidityDisplay');
    descDisplay.classList.add('descDisplay');
    weatherEmoji.classList.add('weatherEmoji');

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId) {
    
    // ใช้ switch(true) เพื่อตรวจสอบช่วงของ Weather ID (Range) แทนการเขียน if-else หลายชั้น
    switch (true) { 
        case (weatherId >= 200 && weatherId < 300):
            return "⛈️";
        case (weatherId >= 300 && weatherId < 400):
            return "🌧️";
        case (weatherId >= 500 && weatherId < 600):
            return "🌧️";
        case (weatherId >= 600 && weatherId < 700):
            return "❄️";
        case (weatherId >= 700 && weatherId < 800):
            return "🌫️";
        case (weatherId === 800):
            return "☀️";
        case (weatherId >= 801 && weatherId < 810):
            return "☁️";
        default:
            return "❓";
    }
}

function displayError(message) { 

    const errorDisplay = document.createElement('p');
    errorDisplay.textContent = message;
    errorDisplay.classList.add('errorDisplay');

    card.textContent = '';
    card.style.display = 'flex';
    card.appendChild(errorDisplay);

}
