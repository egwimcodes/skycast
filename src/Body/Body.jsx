import React, { useEffect, useState } from 'react'
import './Body.css'
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { TbWind } from "react-icons/tb";
import { FaDroplet } from "react-icons/fa6";
import { FaSun } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";
import { GiSunrise, GiSunset } from "react-icons/gi";
import Footer from "../Footer/Footer"


export default function Body() {
  const url_query = 'https://api.openweathermap.org/data/2.5/weather?'
  const key = 'appid=bc48158e57383356400a8467be70f78d'
  const units = 'units=metric'
  const [data, setData] = useState('')
  const [nameparam, setNameParam] = useState('nnewi')
  const [name, setName] = useState('q=' + nameparam)
  const [currentDayTime, setCurrentDayTime] = useState('')
  const [WeatherIcon, setWeatherIcon] = useState('')

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nameparam}&appid=bc48158e57383356400a8467be70f78d&units=metric`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.warn(error))

  }, [nameparam])



  const setNameParams = (e) => {
    setNameParam(e.target.value)
  }
  

  function formatUnixTimestamp(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    const options = {
      hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true
    };
    return date.toLocaleString('en-US', options);
  }
  
  useEffect(() => {
    const updateDateTime = () => {
      const date = new Date();
      const options = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
        hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true
      };
      setCurrentDayTime(date.toLocaleString('en-US', options));
    };

    // Initial call to set the current time immediately
    updateDateTime();

    // Set interval to update the time every second
    const intervalId = setInterval(updateDateTime, 1000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    switch (data.cod === 200 && data.weather[0].main) {
      case 'Clouds':
        setWeatherIcon('cloud.png')
        break;
      case 'Clear':
        setWeatherIcon('sunny.png')
        break;
      case 'Rain':
        setWeatherIcon('rain.png')
        break;
      case 'Snow':
        setWeatherIcon('snow.png')
        break;
      default:
        setWeatherIcon('sun.png')
    }
  }, [data])
  return (
    <>
      <div className="body-container">
        <div className="body-content">
          <div className="search">
            <input type="text" placeholder='Search for a cities....' onChange={(e) => setNameParams(e)}
            />
            <FcSearch className='search-icon' />
          </div>
          <div className="body-content-detail">
            <div className="left-body">
              <div className="left-cards first">

                <div className="write-up">
                  <div className="write-up-one">
                    <h2>{data.name}</h2>
                    <p>{data.cod == 200 && currentDayTime}</p></div>

                  <div className="write-up-two">
                    <h1>{data.cod === 200 && data.main.temp.toFixed()}<sup>oC</sup> { data.cod === 200 && data.weather[0].main}</h1>
                  </div>
                </div>
                <div className="symbol">
                  <img src={data.cod == 200 ? WeatherIcon : 'sun.png'} alt="" />
                </div>

              </div>
              <div className="left-cards second">
                <div className="forcast-header">
                  <h5>Todays FORECAST</h5>
                    <div className="sunrise">
                      <GiSunrise className='sun_rise'/>
                      <div className="sun-detail">
                        <p>Sunrise</p>
                        <h6>{data.cod == 200 && formatUnixTimestamp(data.sys.sunrise)}</h6>
                      </div>
                    </div>
                  <div className="sunset">
                    <GiSunset className='sun_set'/>
                    <div className="sun-detail">
                      <p>Sunset</p>
                      <h6>{data.cod == 200 && formatUnixTimestamp(data.sys.sunset)}</h6>
                    </div>
                  </div>
                </div>
                <div className="today-forcast-content">
                  <div className="today-forcast-info">
                    <p>6:00 AM</p>
                    <img src="sun.png" alt="" />
                    <h5>{data.cod === 200 && data.main.temp} <sup>o</sup></h5>
                  </div>
                  <div className="today-forcast-info">
                    <p>6:00 AM</p>
                    <img src="sun.png" alt="" />
                    <h5>25 <sup>o</sup></h5>
                  </div>
                  <div className="today-forcast-info">
                    <p>6:00 AM</p>
                    <img src="sun.png" alt="" />
                    <h5>25 <sup>o</sup></h5>
                  </div>
                  <div className="today-forcast-info">
                    <p>6:00 AM</p>
                    <img src="sun.png" alt="" />
                    <h5>25 <sup>o</sup></h5>
                  </div>
                </div>
              </div>
              <div className="left-cards third">
                <div className="air-condition-header">
                  <h5>AIR CONDITION</h5>
                  <button>See More </button>
                </div>
                <div className="air-condition-content">
                  <div className="air-condition-content-d">
                    <div className="air-condition-details">
                      <FaTemperatureThreeQuarters className='air-condition-icon' />
                      <div className="icon-text">
                        <p>Real Feel</p>
                        <h2>{data.cod === 200 && data.main.temp.toFixed()}<sup>o</sup></h2>
                      </div>
                    </div>
                    <div className="air-condition-details">
                      <TbWind className='air-condition-icon' />
                      <div className="icon-text">
                        <p>Wind</p>
                        <h2>{data.cod === 200 && data.wind.speed.toFixed()} km/h</h2>
                      </div>
                    </div>
                    <div className="air-condition-details">
                      <FaDroplet className='air-condition-icon' />
                      <div className="icon-text">
                        <p>Chance of rain</p>
                        <h2>{data.cod === 200 && data.main.humidity.toFixed()}%</h2>
                      </div>
                    </div>
                    <div className="air-condition-details">
                      <FaSun className='air-condition-icon' />
                      <div className="icon-text">
                        <p>UV Index</p>
                        <h2>3</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-body">
              <div className="right-body-container">
                <div className="days-forcast-header">
                  <h5>7-DAYS FORECAST</h5>
                </div>
                <div className="days-forcast-contentainer">
                  <div className="days-forcast-content">
                    <div className="days-forcast-today">Today</div>
                    <div className="days-forcast-symbol-condition">
                      <img src="sun.png" alt="" /><h4>Sunny</h4></div>
                    <div className="days-forcast-chance">36<span>/22</span></div></div>

                  <div className="days-forcast-content"><div className="days-forcast-today">Tue</div>
                    <div className="days-forcast-symbol-condition">
                      <img src="sun.png" alt="" /><h4>Sunny</h4></div>
                    <div className="days-forcast-chance">36<span>/22</span></div></div>

                  <div className="days-forcast-content"><div className="days-forcast-today">Wed</div>
                    <div className="days-forcast-symbol-condition">
                      <img src="sun.png" alt="" /><h4>Sunny</h4></div>
                    <div className="days-forcast-chance">36<span>/22</span></div></div>

                  <div className="days-forcast-content"><div className="days-forcast-today">Thu</div>
                    <div className="days-forcast-symbol-condition">
                      <img src="sun.png" alt="" /><h4>Sunny</h4></div>
                    <div className="days-forcast-chance">36<span>/22</span></div></div>

                  <div className="days-forcast-content"><div className="days-forcast-today">Fri</div>
                    <div className="days-forcast-symbol-condition">
                      <img src="sun.png" alt="" /><h4>Sunny</h4></div>
                    <div className="days-forcast-chance">36<span>/22</span></div></div>

                  <div className="days-forcast-content"><div className="days-forcast-today">Sat</div>
                    <div className="days-forcast-symbol-condition">
                      <img src="sun.png" alt="" /><h4>Sunny</h4></div>
                    <div className="days-forcast-chance">36<span>/22</span></div></div>

                  <div className="days-forcast-content"><div className="days-forcast-today">Sun</div>
                    <div className="days-forcast-symbol-condition">
                      <img src="sun.png" alt="" /><h4>Sunny</h4></div>
                    <div className="days-forcast-chance">36<span>/22</span></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
