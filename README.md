# Real-time Weather App

A dynamic weather dashboard app that fetches real-time data from the **OpenWeatherMap API**. This project demonstrates asynchronous JavaScript programming, API integration, and modern DOM manipulation techniques.

## Key Features

- **Live Weather Data:** Fetches accurate temperature, humidity, and weather conditions for any city worldwide.
- **Asynchronous Fetching:** Uses `async/await` and `Fetch API` for smooth, non-blocking data retrieval.
- **Dynamic UI:** Automatically updates the interface and displays contextual Emojis based on weather conditions (e.g., ⛈️ for thunderstorms).
- **Error Handling:** Gracefully handles invalid city names or network errors with user-friendly feedback.

## Technical Highlights (Code Logic)

- **Modern ES6+ Syntax:** Extensive use of **Object Destructuring** to extract nested JSON data cleanly.
    ```javascript
    const { main: { temp, humidity }, weather: [{ description }] } = data;
    ```
- **Smart Logic:** implemented `switch(true)` pattern to efficiently handle weather ID ranges for Emoji mapping.
- **Async/Await:** ensuring the UI remains responsive while waiting for the server response.

## Tech Stack
- Vanilla JavaScript, HTML, CSS, OpenWeatherMap API

## How to Run

1. ### **Clone the repository**
    ```bash
    git clone https://github.com/LittleCat1041/js-weather-app.git
    ```
2. ### **Setup API Key**
 - 1. Open `index.js`.
 - 2. Replace the `apikey` variable in ```const apikey = "YOUR_API_KEY_HERE";``` with your own OpenWeatherMap API key (Free tier).
 
4. ### **Run the game**
#### Option 1: VS Code Live Server (Recommended)
1. Open the folder in **VS Code**.
2. Install the **"Live Server"** extension.
3. Right-click on `index.html` and select **"Open with Live Server"**.
#### Option 2: Direct Open (Quick & Easy)
1. Navigate to the project folder.
2. Simply **double-click** the `index.html` file to open it in your default web browser.

## Screenshots

<img width="982" height="702" alt="image" src="https://github.com/user-attachments/assets/905997dd-4545-4820-b6aa-1a74f47dfd37" />
