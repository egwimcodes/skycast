import React, { useEffect, useState } from 'react'
import { TiWeatherPartlySunny } from "react-icons/ti";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaMap } from "react-icons/fa6";
import { VscSettings } from "react-icons/vsc";
import './Sidebar.css'

export default function Sidebar() {

    const [active, setactive] = useState('weather')

    switch (active) {
        case 'weather':
            console.log('weather')
            break;
        case 'cities':
            console.log('cities')
            break;
        case 'map':
            console.log('map')
            break;
        case 'settings':
            console.log('settings')
            break;
            
    }


    useEffect(() => {
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
                            <li id='weather' className={`nav-items ${active === 'weather' ? 'active' : ''}`} onClick={() => setactive('weather')}>
                                <TiWeatherPartlySunny className={`nav-icons ${active === 'weather' ? 'active' : ''}`}/>
                                <h4>Weather</h4>
                            </li>
                        </a>
                        <a>
                            <li id='cities' className={`nav-items ${active === 'cities' ? 'active' : ''}`} onClick={() => setactive('cities')}>
                                <TfiMenuAlt className={`nav-icons ${active === 'cities' ? 'active' : ''}`}/>
                                <h4>Cities</h4>
                            </li>
                        </a>
                        <a>
                            <li id='map' className={`nav-items ${active === 'map' ? 'active' : ''}`} onClick={() => setactive('map')}>
                                <FaMap className={`nav-icons ${active === 'map' ? 'active' : ''}`}/>
                                <h4>Map</h4>
                            </li>
                        </a>
                        <a>
                            <li id='settings' className={`nav-items ${active === 'settings' ? 'active' : ''}`} onClick={() => setactive('settings')}>
                                <VscSettings className={`nav-icons ${active === 'settings' ? 'active' : ''}`}/>
                                <h4>Settings</h4>
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
        </>
    )
}
