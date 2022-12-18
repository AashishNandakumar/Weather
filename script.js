const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "be506b3889msh49735ecc0e786e7p1c066cjsn8558dafb41a1",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      sunrise.innerHTML = new Date(response.sunrise * 1000).toLocaleTimeString(
        "default"
      );
      sunset.innerHTML = new Date(response.sunset * 1000).toLocaleTimeString(
        "default"
      );
      // wind_degrees.innerHTML = response.wind_degrees;

      temp3.innerHTML = response.temp;
      min_temp3.innerHTML = response.min_temp;
      max_temp3.innerHTML = response.max_temp;
      cloud_pct3.innerHTML = response.cloud_pct;
      feels_like3.innerHTML = response.feels_like;
      humidity3.innerHTML = response.humidity;
      wind_speed3.innerHTML = response.wind_speed;
      sunrise3.innerHTML = new Date(response.sunrise * 1000).toLocaleTimeString(
        "default"
      );
      sunset3.innerHTML = new Date(response.sunset * 1000).toLocaleTimeString(
        "default"
      );
      wind_degrees3.innerHTML = response.wind_degrees;

      temp4.innerHTML = response.temp;
      min_temp4.innerHTML = response.min_temp;
      max_temp4.innerHTML = response.max_temp;
      cloud_pct4.innerHTML = response.cloud_pct;
      feels_like4.innerHTML = response.feels_like;
      humidity4.innerHTML = response.humidity;
      wind_speed4.innerHTML = response.wind_speed;
      sunrise4.innerHTML = new Date(response.sunrise * 1000).toLocaleTimeString(
        "default"
      );
      sunset4.innerHTML = new Date(response.sunset * 1000).toLocaleTimeString(
        "default"
      );
      wind_degrees4.innerHTML = response.wind_degrees;

      temp5.innerHTML = response.temp;
      min_temp5.innerHTML = response.min_temp;
      max_temp5.innerHTML = response.max_temp;
      cloud_pct5.innerHTML = response.cloud_pct;
      feels_like5.innerHTML = response.feels_like;
      humidity5.innerHTML = response.humidity;
      wind_speed5.innerHTML = response.wind_speed;
      sunrise5.innerHTML = new Date(response.sunrise * 1000).toLocaleTimeString(
        "default"
      );
      sunset5.innerHTML = new Date(response.sunset * 1000).toLocaleTimeString(
        "default"
      );
      wind_degrees5.innerHTML = response.wind_degrees;

      temp6.innerHTML = response.temp;
      min_temp6.innerHTML = response.min_temp;
      max_temp6.innerHTML = response.max_temp;
      cloud_pct6.innerHTML = response.cloud_pct;
      feels_like6.innerHTML = response.feels_like;
      humidity6.innerHTML = response.humidity;
      wind_speed6.innerHTML = response.wind_speed;
      sunrise6.innerHTML = new Date(response.sunrise * 1000).toLocaleTimeString(
        "default"
      );
      sunset6.innerHTML = new Date(response.sunset * 1000).toLocaleTimeString(
        "default"
      );
      wind_degrees6.innerHTML = response.wind_degrees;

      temp7.innerHTML = response.temp;
      min_temp7.innerHTML = response.min_temp;
      max_temp7.innerHTML = response.max_temp;
      cloud_pct7.innerHTML = response.cloud_pct;
      feels_like7.innerHTML = response.feels_like;
      humidity7.innerHTML = response.humidity;
      wind_speed7.innerHTML = response.wind_speed;
      sunrise7.innerHTML = new Date(response.sunrise * 1000).toLocaleTimeString(
        "default"
      );
      sunset7.innerHTML = new Date(response.sunset * 1000).toLocaleTimeString(
        "default"
      );
      wind_degrees7.innerHTML = response.wind_degrees;

      temp8.innerHTML = response.temp;
      min_temp8.innerHTML = response.min_temp;
      max_temp8.innerHTML = response.max_temp;
      cloud_pct8.innerHTML = response.cloud_pct;
      feels_like8.innerHTML = response.feels_like;
      humidity8.innerHTML = response.humidity;
      wind_speed8.innerHTML = response.wind_speed;
      sunrise8.innerHTML = new Date(response.sunrise * 1000).toLocaleTimeString(
        "default"
      );
      sunset8.innerHTML = new Date(response.sunset * 1000).toLocaleTimeString(
        "default"
      );
      wind_degrees8.innerHTML = response.wind_degrees;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Bangalore");
