import Slider from 'react-slick' // Importing Slider component from react-slick library

import 'slick-carousel/slick/slick.css' // Importing CSS for Slider
import 'slick-carousel/slick/slick-theme.css' // Importing CSS theme for Slider
import dpgirl from '../../Assets/images/dpgirl.png' // Importing image
import hat from '../../Assets/icons/hat.svg' // Importing icon
import link from '../../Assets/icons/link.svg' // Importing icon
import arrow from '../../Assets/images/arrow.png' // Importing image
import './index.css' // Importing custom CSS

// Data for experts slider
const sliderList = [
    {
        dpUrl: dpgirl,
        name:"Dr. Vaishali Sharma",
        speaciality:"Ayurveda Practitioner (BAMS, MD)",
        experience:"25 years of experience",
    },
    {
        dpUrl: dpgirl,
        name:"Dr. Vaishali Sharma",
        speaciality:"Ayurveda Practitioner (BAMS, MD)",
        experience:"25 years of experience",
    },
    {
        dpUrl: dpgirl,
        name:"Dr. Vaishali Sharma",
        speaciality:"Ayurveda Practitioner (BAMS, MD)",
        experience:"25 years of experience",
    },
]

// Component for Experts section
const Experts = () => {
    const settings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
      const settingsdesktop = {
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
      }      
    return(
        <div className='expert-div' id='experts'>
            {/* Section heading */}
            <h1 className='expert-heading'>Meet our Ayurveda experts </h1>
            {/* Mobile slider */}
            <div className="slider-container-expert">
              <Slider {...settings}>
                {
                    sliderList.map(each => (
                        <div>
                            <div className='expert-item'>
                                {/* Doctor's image */}
                                <img src={each.dpUrl} alt={each.name} className='expert-img'/>
                                {/* Doctor's name */}
                                <p className='expert-name'>{each.name}</p>
                                {/* Doctor's specialty */}
                                <p className='expert-spe'>{each.speaciality}</p>
                                <div className='hatt-div'>
                                    {/* Experience icon */}
                                    <img src={hat}  alt='hat icon'/>
                                    {/* Doctor's experience */}
                                    <p className='expert-ex'>{each.experience}</p>
                                </div>
                                <div className='hat-div'>
                                    {/* Specialization icon */}
                                    <img src={link} alt='link icon' />
                                    {/* Doctor's specialization */}
                                    <p className='expert-skin'>Skin Specialist</p>
                                </div>
                                {/* Book session button */}
                                <button type='button' className='expert-btn session'>
                                    Book a session
                                </button>                        
                            </div>
                        </div>
                   ))
                }
              </Slider>
            </div>
            {/* Desktop slider */}
            <div className="slider-container-expert-desktop">
              <Slider {...settingsdesktop}>
                {
                    sliderList.map(each => (
                        <div>
                            <div className='expert-item'>
                                {/* Doctor's image */}
                                <img src={each.dpUrl} alt={each.name} className='expert-img'/>
                                {/* Doctor's name */}
                                <p className='expert-name'>{each.name}</p>
                                {/* Doctor's specialty */}
                                <p className='expert-spe'>{each.speaciality}</p>
                                <div className='hatt-div'>
                                    {/* Experience icon */}
                                    <img src={hat}  alt='hat icon'/>
                                    {/* Doctor's experience */}
                                    <p className='expert-ex'>{each.experience}</p>
                                </div>
                                <div className='hat-div'>
                                    {/* Specialization icon */}
                                    <img src={link} alt='link icon' />
                                    {/* Doctor's specialization */}
                                    <p className='expert-skin'>Skin Specialist</p>
                                </div>
                                {/* Book session button */}
                                <button type='button' className='expert-btn session'>
                                    Book a session
                                </button>                        
                            </div>
                        </div>
                   ))
                }
              </Slider>
              {/* Button to find more experts */}
              <button type="button" className='more-expert'>
                <p>Find More Experts</p>
                <img src={arrow} alt="arrow" className='arrow'/>
              </button>
            </div>                    
        </div>
    )
}

export default Experts // Exporting Experts component
