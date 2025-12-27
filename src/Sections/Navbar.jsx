

import { useState } from "react"
import "../Styles/Sections.css"



const Navbar = () => {

  const [open, setOpen] = useState(false)


  return (
    <div className="nav-wrapper ">
      <div className="nav-bar">
        <nav>
            <div className="logo">
                <h3>Ne<span>byte</span></h3>
            </div>
            <div className="nav-icon" onClick={() => setOpen(!open)}>
              <i class="bi bi-list"></i>
            </div>
            <div className={`mobile animate__animated animate__slideInDown ${open ? "open": ""}`}>

              <div className="close" onClick={() => setOpen(!open)}>
                <i className="bi bi-x"></i>
              </div>

           
            <div className="list">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Contact</a></li>
                    
                </ul>
            </div>
            <div className="login">
                <button>Try for free</button>
            </div>
             </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
