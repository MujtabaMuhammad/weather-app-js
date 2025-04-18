**Weather App**

A simple web-based application that provides real-time weather information based on a user's input for latitude and longitude. The app retrieves data from the OpenWeatherMap API, showing details such as temperature (in Fahrenheit), humidity, and a brief description of the current weather.

**Features**

- Users can input latitude, longitude, and an API key to fetch the current weather.
- Displays the temperature in Fahrenheit, humidity, and weather description for the specified location.
- Simple, responsive layout with Bootstrap styling.

**Technologies Used**

- HTML, CSS (Bootstrap): For the basic structure and styling of the web page.
- JavaScript (Fetch API): For making asynchronous requests to the OpenWeatherMap API and handling responses.
- OpenWeatherMap API: To retrieve real-time weather data based on latitude and longitude inputs.

**API Key Requirement**

In the initial version of this app, no API key was required. However, due to security and usage restrictions, users are now required to provide their own API key from OpenWeatherMap to use the app.

**Setup and Installation**

1. Clone the Repository:
    - git clone <https://github.com/your-username/weather-app.git>
2. OpenWeatherMap API Key:
    - Sign up at OpenWeatherMap and generate an API key.
    - Copy the API key and use it as input in the app.
3. Open the App in a Browser:
    - Open the index.html file in your web browser to launch the Weather App.

**Usage**

1. In the form, enter the Latitude and Longitude of the location you want to check the weather for.
2. Enter your API Key from OpenWeatherMap.
3. Click on the Send button.
4. The weather information for the specified location will be displayed, including:

- Temperature in Fahrenheit.
- Humidity percentage.
- Weather description.

**File Structure**

- index.html: The main HTML file for the app.
- weatherApi.js: JavaScript file containing the logic for fetching weather data from the OpenWeatherMap API.

For detailed code, refer to these files in the repository.

**Contact**

For questions, suggestions, or collaboration, please reach out:

- **Email:** <mujtaba.rana97@gmail.com>

**License**

This project is licensed under the MIT License. See the LICENSE file for more details.



# 🌤️ Weather App

A simple web-based application that provides real-time weather information based on a user's input for latitude and longitude using the OpenWeatherMap API. Displays temperature (in °F), humidity, and a brief weather description.

---

## Features

- Users input **latitude**, **longitude**, and an **API key** to fetch current weather.
- Displays:
  - Temperature in Fahrenheit
  - Humidity
  - Weather description
- Clean, responsive layout styled with **Bootstrap**.

---

## Technologies Used

- **HTML & CSS (Bootstrap)** – Page structure and styling  
- **JavaScript (Fetch API)** – API requests and dynamic data handling  
- **OpenWeatherMap API** – Real-time weather data source

---

## API Key Requirement

To use the app, you’ll need a free API key from [OpenWeatherMap](https://openweathermap.org/api). Input it along with your desired coordinates.

---

## Setup and Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/MujtabaMuhammad/weatherApp.git
   ```

2. **Get an API key**  
   Sign up at [OpenWeatherMap](https://openweathermap.org) and generate an API key.

3. **Run the app**  
   Open `index.html` in your browser.

---

## Usage

1. Enter the **latitude** and **longitude** of your desired location.  
2. Enter your **OpenWeatherMap API key**.  
3. Click **Send**.  
4. Weather data will appear, including:
   - Temperature (°F)
   - Humidity
   - Description

---

## File Structure

```
weatherApp/
├── index.html           # Main interface
├── weatherApi.js        # API interaction logic
```

---

## Contact

Questions, suggestions, or collaborations?  
Email: mujtaba.rana97@gmail.com

---

## License

This project is licensed under the [MIT License](LICENSE).

