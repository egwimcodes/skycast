import React, { useEffect, useState } from 'react'
import './Body.css'
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { TbWind } from "react-icons/tb";
import { FaDroplet } from "react-icons/fa6";
import { FaSun } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";
import Footer from "../Footer/Footer"


export default function Body() {
  const [data, setData] = useState('')
  const [nameparam, setNameParam] = useState('nnewi')

  // useEffect(() => {
  //   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nameparam}&appid=bc48158e57383356400a8467be70f78d`)
  //     .then((res) => res.json())
  //     .then((data) => setData(data))
  //     .catch((error) => console.warn(error))

  // }, [])
  useEffect(() => {

    try {
      const currentWeather = async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nameparam}&appid=bc48158e57383356400a8467be70f78d`)
        const response_data = await response.json()
        setData(response_data)
        console.log(response_data)
      }
    } catch (error) {
     console.warn(error)
    }
  }, [])


  return (
    <>
      <div className="body-container">
        <div className="body-content">
          <div className="search">
            <input type="text" placeholder='Search for a cities....'
            />
            <FcSearch className='search-icon' />
          </div>
          <div className="body-content-detail">
            <div className="left-body">
              <div className="left-cards first">

                <div className="write-up">
                  <div className="write-up-one">
                    <h2>{data.name}</h2>
                    <p>Chance of rain is 60%</p></div>

                  <div className="write-up-two">
                    <h1>31<sup>o</sup></h1>
                  </div>
                </div>
                <div className="symbol">
                  <img src="sun.png" alt="" />
                </div>

              </div>
              <div className="left-cards second">
                <h5>Todays FORECAST</h5>
                <div className="today-forcast-content">
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
                        <h2>30<sup>o</sup></h2>
                      </div>
                    </div>
                    <div className="air-condition-details">
                      <TbWind className='air-condition-icon' />
                      <div className="icon-text">
                        <p>Wind</p>
                        <h2>0.2 km/h</h2>
                      </div>
                    </div>
                    <div className="air-condition-details">
                      <FaDroplet className='air-condition-icon' />
                      <div className="icon-text">
                        <p>Chance of rain</p>
                        <h2>0%</h2>
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
