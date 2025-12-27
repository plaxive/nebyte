

import "../Styles/Sections.css"


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper container" >
        <footer>
            <div className="left">
              <div className="logo">
                <h3>Ne<span>byte</span> </h3>
                <p>Never miss a booking section</p>
              </div>
            </div>
            <div className="right">
               <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Contact</a></li>
               </ul>
            </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer
