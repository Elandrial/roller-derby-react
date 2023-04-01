/**
 * This provides the functionality required to interact with the OpenWeather API
 */

const options = {
    api: '16e3b60234fdcc79c62cef050072c516',
    days: 5,
    lat: -35.02, //Albany, WA
    lon: 117.88,
    fa:{
        default:
            {icon: 'fa-circle-question', aria:'Unknown'},
        'Thunderstorm':
            {icon: 'fa-bolt', aria:'Thunderstorm'},
        'Drizzle':
            {icon: 'fa-cloud-drizzle', aria:'Drizzling'},
        'Rain':
            {icon: 'fa-cloud-showers-heavy',aria:'Raining'},
        'Snow':
            {icon: 'fa-snowflakes',aria:'Snowing'},
        'Mist':
            {icon: 'fa-cloud-fog',aria:'Mist'},
        'Smoke':
            {icon: 'fa-smoke',aria:'Smokey'},
        'Haze':
            {icon: 'fa-sun-haze',aria:'Hazey'},
        'Dust':
            {icon: 'fa-sun-dust',aria:'Dusty'},
        'Fog':
            {icon: 'fa-cloud-fog',aria:'Foggy'},
        'Tornado':
            {icon: 'fa-tornado',aria:'Tornado'},
        'Clear':
            {icon: 'fa-sun',aria:'Clear'},
        'Clouds':
            {icon: 'fa-cloud',aria:'Cloudy'},
        'Sand':
            {icon: 'fa-cloud',aria:'Sand'},
        'Ash':
            {icon: 'fa-cloud',aria:'Ash'},
        'Squal':
            {icon: 'fa-cloud',aria:'Squal'}
    }

};

export function getFaIcon(keyword){
    let output = options.fa.default;
    if(keyword in options.fa)
    {
        output = options.fa[keyword];
    }
    return output;
}

export async function getForecast(){
    let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${options.lat}&lon=${options.lon}&appid=${options.api}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    let parsedData = parseHourlyForecast(data);
    return parsedData;
}


function parseHourlyForecast(data){
    let output = [];
    let keys = {};

    for (let i in data.list){
        let date = new Date(data.list[i].dt_txt);
        let key = `D${date.getMonth()}-${date.getDay()}`;

        //TODO: find median values rather than skip the rest
        if(!(key in keys)){
            keys[key] = 1;
            output.push(data.list[i]);
        }
    }
    return output;
}

