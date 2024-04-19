import facebook from '../../Assets/icons/facebook.svg' // Importing Facebook icon
import insta from '../../Assets/icons/insta.svg' // Importing Instagram icon
import linkdin from '../../Assets/icons/linkdin.svg' // Importing LinkedIn icon
import twitter from '../../Assets/icons/twitter.svg' // Importing Twitter icon
import utube from '../../Assets/icons/utube.svg' // Importing YouTube icon
import pinterest from '../../Assets/icons/pinterest.svg' // Importing Pinterest icon
import './index.css' // Importing custom CSS for Footer

// Footer component
const Footer = () => {
    return(
        <div className='footer-div' id='information'>
            {/* Contact information */}
            <div className='div-1'>
                <p className='get'>Get in touch</p>
                <p className='support'>support@amrutam.co.in<br/><br/>
                    Amrutam Pharmaceuticals Pt Ltd., chitragupt ganj, Nai Sadak, Lashkar, Gwalior - 474001<br/><br/>
                    +91 9713171999
                </p>
                {/* Social media icons */}
                <div className='icons-div div-2'>
                    <img src={facebook} alt="facebook" className='footer-icon'/>
                    <img src={insta} alt="insta" className='footer-icon'/>
                    <img src={utube} alt="utube" className='footer-icon'/>
                    <img src={twitter} alt="twitter" className='footer-icon'/>
                    <img src={linkdin} alt="linkdin" className='footer-icon'/>
                    <img src={pinterest} alt="pinterest" className='footer-icon'/>
                </div>
            </div>
            {/* Information links */}
            <div className='div-3'>
                <p className='get'>Information</p>
                <p className='links'>About Us</p>
                <p className='links'>Terms and Conditions</p>
                <p className='links'>Privacy Policy</p>
                <p className='links'>Privacy Policy for Mobile Apps</p>
                <p className='links'>Shipping and Returns Policy</p>
                <p className='links'>International Delivery</p>
                <p className='links'>For Businesses, Hotels and Resorts</p>
            </div>
            {/* Newsletter subscription */}
            <div className='div-4'>
                <h1 className='subsribe'>Subscribe to our Newsletter and join Amrutam Family today!</h1>
                <div>
                    <input type="text" placeholder='Your Email Address' className='input'/>
                    <button type='button' className='subscribe-btn'>
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Footer // Exporting Footer component
