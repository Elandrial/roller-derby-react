import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getFaIcon } from '../../../../utility/weather/weather';

/**
 * 
 * Generates the Today layout for the Weather component 
 */
export default function Today({data}){
    let icon = getFaIcon(data.main);
    let temp = Math.round(data.temp);

    return(
        <div id="weather-today">
            <FontAwesomeIcon icon={['fas', icon.icon]} title={icon.aria}/>
            <span id="weather-today-sr" className="sr-only">{icon.aria}</span>
            <span id="weather-today-temp">{temp}</span><span className="weather-metric">&deg;C</span>
        </div>
    );
}