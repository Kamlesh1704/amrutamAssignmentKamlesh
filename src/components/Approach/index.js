import Slider from 'react-slick' // Importing Slider component from react-slick library

import 'slick-carousel/slick/slick.css' // Importing CSS for Slider
import 'slick-carousel/slick/slick-theme.css' // Importing CSS theme for Slider

import './index.css' // Importing custom CSS

const sliderList = [ // Data for slider
    {
        number:1,
        name:"Make Appointment",
        para:"You must make an appointment in advance, to choose the service and date.",
    },
    {
        number:2,
        name:"Consultations",
        para:"The next stage involves a thorough consultation with an Ayurveda practitioner.",
    },
    {
        number:3,
        name:"Treatment Planning",
        para:"The Ayurvedic practitioner creates a personalized treatment plan for you",
    },
    {
        number:4,
        name:"Maintenance",
        para:"These visits allow for assessment of progress, adjustments to the treatment.",
    },
]

const Approach = () => {

    const settingsMobile = { // Settings for mobile slider
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      }

      const settingsDesktop = { // Settings for desktop slider
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 4,
      }

    return (
        <div className='approach-div' id='approach'>
            <div className='approach-div-1'>
                <h1 className='approach-div-1-heading'>Our ayurvedic approach</h1>
                <p className='approach-div-1-para'>At Amrutam we follow a unique and personalized approach to healing. Our expert practitioners begin each treatment process by conducting a thorough analysis of the patient’s body type, medical history, and current health conditions.</p>
            </div>
            {/* Mobile slider */}
            <div className="slider-container-mobile">
                <Slider {...settingsMobile}>
                    {sliderList.map(eachList => (
                        <div>
                        <div className='slider-div'>
                            <p className='slider-number'>{eachList.number}</p>
                            <h3 className='slider-heading'>{eachList.name}</h3>
                            <p className='slider-para'>{eachList.para}</p>
                        </div>
                        </div>
                    ))}
                </Slider>
            </div>
            {/* Desktop slider */}
            <div className="slider-container-desktop">
                <Slider {...settingsDesktop}>
                    {sliderList.map(eachList => (
                        <div>
                        <div className='slider-div'>
                            <p className='slider-number'>{eachList.number}</p>
                            <h3 className='slider-heading'>{eachList.name}</h3>
                            <p className='slider-para'>{eachList.para}</p>
                        </div>
                        </div>
                    ))}
                </Slider>
            </div>            
        </div>
    )
}

export default Approach // Exporting Approach component
