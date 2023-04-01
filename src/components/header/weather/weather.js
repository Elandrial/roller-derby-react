import { ErrorBoundary } from "react-error-boundary";
import * as WeatherAPI from '../../../utility/weather/weather';
import React, { useEffect } from 'react';
import Today from './today/today';
import Weekday from './weekday/weekday';

/**
 * 
 * Generates the a weather forecast panel based on the output from an API call, uses Today and Weekday components to render the data 
 */
export default function Weather(props) {
    useEffect(getForecast, []);
    const [forecast, setForecast] = React.useState({
            today: {
                main:"",
                temp:0,
                },
            weekdays:[{
                    id:1,
                    main:"",
                    date:new Date(),
                    temp:0,
                    tempLike:0
                },
                {
                    id:2,
                    main:"",
                    date:new Date(),
                    temp:0,
                    tempLike:0
                },
                {
                    id:3,
                    main:"",
                    date:new Date(),
                    temp:0,
                    tempLike:0
                },
                {
                    id:4,
                    main:"",
                    date:new Date(),
                    temp:0,
                    tempLike:0
                }
            ]
        });

    function getForecast(){
        WeatherAPI.getForecast()
            .then((data) => {
                let fc = {
                    today:{},
                    weekdays:[]
                };
                fc.today.main = data[0].weather[0].main;
                fc.today.temp = Math.round(data[0].main.temp)
                for(let i=1; i <= Math.min(data.length,4); i++){
                    fc.weekdays.push({
                        id: i,
                        main : data[i].weather[0].main,
                        date : new Date(data[i].dt_txt),
                        temp : Math.round(data[i].main.temp),
                        tempLike : Math.round(data[i].main.feels_like)
                    });
                }
                setForecast(fc);
            });
    }
    
    function fallbackRender({ error, resetErrorBoundary }) {
        return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre style={{ color: "red" }}>{error.message}</pre>
        </div>
        );
    }

    const logError = (error, info) => {
      // TODO: Do something with the error
    };

    if(forecast !== undefined){
        return (
        <ErrorBoundary
            fallbackRender={fallbackRender}
            onError={logError}
        >
            <aside id="weather">
                <h2>Weather</h2>
                <Today data={forecast.today} />
                <div id="weather-forecast" key="weather-forecast">
                    {
                        forecast["weekdays"].map((data) => {
                            return (<Weekday data={data} key={data.id}/>);
                        })
                    }
                </div>
            </aside>
            </ErrorBoundary>
        );
    }
    else{
        return (
            <aside id="weather">
                <h2>Weather</h2>
            </aside>);
    }
  }