import Popup from 'reactjs-popup' // Importing Popup component from 'reactjs-popup' library

import 'reactjs-popup/dist/index.css' // Importing CSS for Popup component

import threline from '../../Assets/icons/threline.svg' // Importing icon
import logo from '../../Assets/images/logo.png' // Importing logo image
import './index.css' // Importing custom CSS for Header

// Header component
const Header = () => {
  return (
    <>
         {/* Mobile navigation */}
         <nav className="navbar-mobile">  
           <div className="popup-container">
            {/* Popup menu */}
            <Popup
              modal
              trigger={
                <button type="button" className="trigger-button">
                  <img src={threline} className="threline"/>
                </button>
              }
            >
              {close => (
                <>
              <div className="popup-div">
                {/* Navigation links */}
                <a className="nav-link popup-link" href="#home">Home</a>
                <a className="nav-link popup-link" href="#services">Services</a>
                <a className="nav-link popup-link" href="#discover">Discover</a>
                <a className="nav-link popup-link" href="#consultation" >Consultation</a>
                <a className="nav-link popup-link" href="#approach">approach</a>
                <a className="nav-link popup-link" href="#stories">stories</a>
                <a className="nav-link popup-link" href="#experts">experts</a>
                <a className="nav-link popup-link" href="#download">download</a>
                <a className="nav-link popup-link" href="#information">information</a>
              </div>
                  {/* Close button */}
                  <button
                    type="button"
                    className=" trigger-button-close"
                    onClick={() => close()}
                  >
                    Close
                  </button>
                </>
              )}
            </Popup>
           </div>
           {/* Logo */}
           <img src={logo} className="logo" />
     </nav>
     {/* Desktop navigation */}
     <nav className="navbar-desktop-div">
       {/* Logo */}
       <a className="navbar-brand" href="#">
         <img src={logo} className="logo" />
       </a>
       <div className="">
         <div className="navbar-nav">
           {/* Navigation links */}
           <a className="nav-link " href="#home">Home</a>
           <a className="nav-link " href="#services">Services</a>
           <a className="nav-link " href="#discover">Discover</a>
           <a className="nav-link " href="#consultation" >Consultation</a>
           <a className="nav-link " href="#approach">approach</a>
           <a className="nav-link " href="#stories">stories</a>
           <a className="nav-link " href="#experts">experts</a>
           <a className="nav-link " href="#download">download</a>
           <a className="nav-link " href="#information">information</a>
         </div>
       </div>
     </nav>
    </>
  )
}

export default Header // Exporting Header component
