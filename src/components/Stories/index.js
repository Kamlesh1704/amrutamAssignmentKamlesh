import Slider from 'react-slick'; // Importing Slider component from react-slick library
import 'slick-carousel/slick/slick.css'; // Importing slick carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Importing slick carousel theme CSS
import stars from '../../Assets/images/stars.png'; // Importing stars image
import './index.css'; // Importing custom CSS for Stories component

// Array of story items
const sliderList = [
    {
        heading: "Consulted for skin",
        name: "Sophia Moore",
        place: "Chennai",
        date: "17/02/2024",
        service: '"One of a kind service"',
        para: "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis."
    },
    {
        heading: "Consulted for hair",
        name: "Sophia Moore",
        place: "Mumbai",
        date: "17/02/2024",
        service: "One of a kind service",
        para: "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis."
    },
    {
        heading: "Consulted for hair",
        name: "Sophia Moore",
        place: "Chennai",
        date: "17/02/2024",
        service: "One of a kind service",
        para: "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis."
    },
];

// Stories component
const Stories = () => {
    // Settings for mobile slider
    const settings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    // Settings for desktop slider
    const settingsDesktop = {
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <div className='story-div' id='stories'>
            <h3 className='stories-heading'>STORIES FROM OUR VALUED CUSTOMERS!</h3>
            {/* Mobile slider */}
            <div className="slider-container">
                <Slider {...settings}>
                    {/* Mapping through story items */}
                    {sliderList.map(each => (
                        <div>
                            <div className='story-slider-div'>
                                <div className='story-slider-heading'>
                                    <h2>{each.heading}</h2>
                                </div>
                                <div className='story-slider-div-2'>
                                    <div className='story-slider-div-2-1'>
                                        <p className='story-slider-empty'></p>
                                        <div className='story-name'>
                                            <h3 className='story-slider-name'>{each.name}</h3>
                                            <p className='story-slider-place'>{each.place}</p>
                                        </div>
                                    </div>
                                    <p className='story-slider-date'>{each.date}</p>
                                </div>
                                <img src={stars} className='story-slider-star'/>
                                <h2 className='story-slider-service'>{each.service}</h2>
                                <p className='story-slider-para'>{each.para}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            {/* Desktop slider */}
            <div className="slider-container-desktop">
                <Slider {...settingsDesktop}>
                    {/* Mapping through story items */}
                    {sliderList.map(each => (
                        <div>
                            <div className='story-slider-div'>
                                <div className='story-slider-heading'>
                                    <h2>{each.heading}</h2>
                                </div>
                                <div className='story-slider-div-2'>
                                    <div className='story-slider-div-2-1'>
                                        <p className='story-slider-empty'></p>
                                        <div className='story-name'>
                                            <h3 className='story-slider-name'>{each.name}</h3>
                                            <p className='story-slider-place'>{each.place}</p>
                                        </div>
                                    </div>
                                    <p className='story-slider-date'>{each.date}</p>
                                </div>
                                <img src={stars} className='story-slider-star'/>
                                <h2 className='story-slider-service'>{each.service}</h2>
                                <p className='story-slider-para'>{each.para}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>    
        </div>
    );
}

export default Stories; // Exporting Stories component
