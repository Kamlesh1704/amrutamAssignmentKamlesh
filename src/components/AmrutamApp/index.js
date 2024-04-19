// Importing images
import iphone from '../../Assets/images/iphone.png'
import appstore from '../../Assets/images/appstore.png'
import googleplay from '../../Assets/images/googleplay.png'

// Importing CSS file
import './index.css'

// Component for Amrutam App
const AmrutamApp = () => {
    return (
        <>
            {/* Mobile view */}
            <div className='app-div'>
                {/* App heading */}
                <h1 className='home-app'>Amrutam Home App</h1>
                {/* App description */}
                <p className='app-para'>The Amrutam Home App is your one-stop app for all things Ayurveda! Apart from mimicking the significant
                    characteristics of our website, 
                    this app offers a wide range of additional features.
                </p>
                {/* iPhone image */}
                <img src={iphone} alt='iphone' className='iphone-img'/>
                {/* Diet consultation */}
                <p className='diet'>Get a diet & lifestyle consultation with Ayurvedic experts across the globe </p>
                {/* Get the app heading */}
                <h3 className='get-heading'>Get the App now</h3>
                {/* App store and Google play buttons */}
                <img className='google-play' src={googleplay} alt='google play' />
                <img className='app-store' src={appstore} alt='app store' />
            </div>

            {/* Desktop view */}
            <div className='app-div-desktop' id='download'>
                {/* Content */}
                <div className='content'>
                    {/* App heading */}
                    <h1 className='home-app'>Amrutam Home App</h1>
                    {/* App description */}
                    <p className='app-para'>The Amrutam Home App is your one-stop app for all things Ayurveda! Apart from mimicking the significant
                        characteristics of our website, 
                        this app offers a wide range of additional features.
                    </p>
                    {/* Diet consultation */}
                    <p className='diet'>Get a diet & lifestyle consultation with Ayurvedic experts across the globe </p>
                    {/* Get the app heading */}
                    <h3 className='get-heading'>Get the App now</h3>
                    {/* Store buttons */}
                    <div className='store-div'>
                        <img className='google-play' src={googleplay} alt='google play' />
                        <img className='app-store' src={appstore} alt='app store' />                
                    </div>
                </div>
                {/* iPhone image */}
                <img src={iphone} alt='iphone' className='iphone-img'/>
            </div>
        </>
    )
}

export default AmrutamApp
