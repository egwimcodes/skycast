import React from "react"
import Sidebar from "./Sidbar/Sidebar"
import Body from "./Body/Body"
import './App.css'
function App() {

  return (
    <>
      <div className="app-container">
        <Sidebar />
        <Body />
      </div>
    </>
  )
}

export default App
