export default function Weather(props) {
    return (
        <aside id="weather">
            <h2>Weather</h2>
            <div id="weather-today">
                <i id="weather-today-icon" className="fa-solid fa-question"></i>
                <span id="weather-today-sr" className="sr-only">???</span>
                <span id="weather-today-temp">00</span><span className="weather-metric">&deg;C</span>
            </div>
            <div id="weather-forecast">
                <div id="weather-day-1" className="weather-day">
                    <span id="weather-day-1-name" className="weather-day-name">???</span>
                    <i id="weather-day-1-icon" className="fa-solid fa-sun"></i>
                    <span id="weather-day-1-sr" className="sr-only">???</span>
                    <span id="weather-day-1-temp" className="weather-day-temp">00&deg;C</span>
                    <span id="weather-day-1-temp-like" className="weather-day-temp-like" title="feels like"> | 00&deg;C</span>
                </div>
                <div id="weather-day-2" className="weather-day">
                    <span id="weather-day-2-name" className="weather-day-name">???</span>
                    <i id="weather-day-2-icon" className="fa-solid fa-sun"></i>
                    <span id="weather-day-2-sr" className="sr-only">???</span>
                    <span id="weather-day-2-temp" className="weather-day-temp">00&deg;C</span>
                    <span id="weather-day-2-temp-like" className="weather-day-temp-like" title="feels like"> | 00&deg;C</span>
                </div>
                <div id="weather-day-3" className="weather-day">
                    <span id="weather-day-3-name" className="weather-da-name">???</span>
                    <i id="weather-day-3-icon" className="fa-solid fa-sun"></i>
                    <span id="weather-day-3-sr" className="sr-only">???</span>
                    <span id="weather-day-3-temp" className="weather-day-temp">00&deg;C</span>
                    <span id="weather-day-3-temp-like" className="weather-day-temp-like" title="feels like"> | 00&deg;C</span>
                </div>
                <div id="weather-day-4" className="weather-day">
                    <span id="weather-day-4-name" className="weather-day-name">???</span>
                    <i id="weather-day-4-icon" className="fa-solid fa-sun"></i>
                    <span id="weather-day-4-sr" className="sr-only">???</span>
                    <span id="weather-day-4-temp" className="weather-day-temp">00&deg;C</span>
                    <span id="weather-day-4-temp-like" className="weather-day-temp-like" title="feels like"> | 00&deg;C</span>
                </div>
            </div>
        </aside>
    );
  }