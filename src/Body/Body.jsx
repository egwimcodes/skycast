import React from 'react'
import './Body.css'
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { TbWind } from "react-icons/tb";
import { FaDroplet } from "react-icons/fa6";
import { FaSun } from "react-icons/fa";

export default function Body() {
  return (
    <>
      <div className="body-container">
        <div className="body-content">
          <div className="search">
            <input type="text" placeholder='Search for a cities....' />
          </div>
          <div className="body-content-detail">
            <div className="left-body">
              <div className="left-cards first">

                <div className="write-up">
                  <div className="write-up-one">
                    <h2>Madrid</h2>
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
                  <button>See More</button>
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
                  </div>
                  <div className="air-condition-content-d">
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

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
