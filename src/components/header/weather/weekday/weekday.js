import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getFaIcon } from '../../../../utility/weather/weather';

export default function Weekday({data}){
    let dayName = data.date.toLocaleDateString('en-US', { weekday: 'long' });
    let dayTemp = data.temp;
    let dayTempLike = data.tempLike;
    let icon = getFaIcon(data.main);

    return(
        <div className="weather-day" key={"weatherDay" + data.id}>
            <span className="weather-day-name">{dayName}</span>
            <span className="weather-icon"><FontAwesomeIcon icon={['fas', icon.icon]} title={icon.aria}/></span>
            <span className="sr-only">{icon.aria}</span>
            <span className="weather-day-temp">{dayTemp}&deg;C</span>
            <span className="weather-day-temp-like" title="feels like"> | {dayTempLike}&deg;C</span>
        </div>
    );
}