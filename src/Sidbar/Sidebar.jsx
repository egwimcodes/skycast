import React, { useEffect, useState } from 'react'
import { TiWeatherPartlySunny } from "react-icons/ti";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaMap } from "react-icons/fa6";
import { VscSettings } from "react-icons/vsc";
import './Sidebar.css'

export default function Sidebar() {

    const [active, setactive] = useState(false)


    useEffect(() => {
        console.log('sidebar')
    })
    return (
        <>
            <div className="sidebar">
                <div className="sidbar-content">
                    <div className="sidbar-logo">
                        <img src="skycast-logo.png" alt="" />
                    </div>
                    <ul className="sidbar-nav">
                        <a>
                            <li id='weather' className="nav-items active">
                                <TiWeatherPartlySunny className='nav-icons active' />
                                <h4>Weather</h4>
                            </li>
                        </a>
                        <a>
                            <li id='cities' className="nav-items">
                                <TfiMenuAlt className='nav-icons' />
                                <h4>Cities</h4>
                            </li>
                        </a>
                        <a>
                            <li id='map' className="nav-items">
                                <FaMap className='nav-icons' />
                                <h4>Map</h4>
                            </li>
                        </a>
                        <a>
                            <li id='settings' className="nav-items">
                                <VscSettings className='nav-icons' />
                                <h4>Settings</h4>
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
        </>
    )
}
