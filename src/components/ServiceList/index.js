import speech from '../../Assets/images/speech.png' // Importing image
import shield from '../../Assets/images/shield.png' // Importing image
import doctor from '../../Assets/images/doctor.png' // Importing image
import paper from '../../Assets/images/paper.png' // Importing image
import './index.css' // Importing custom CSS for ServiceList component

// Array of service items
const serviceList = [
    {
        imageUrl: speech,
        service: "Convenient online & In-clinic consultations",
    },
    {
        imageUrl: shield,
        service: "Safe and effective treatment",
    },
    {
        imageUrl: doctor,
        service: "Experienced Ayurvedic Practitioners",
    },
    {
        imageUrl: paper,
        service: "Personalized Treatment Plans & Guidance",
    },
]

// ServiceList component
const ServiceList = () => {
    return (
        <ul className="service-list" id='services'>
            {/* Mapping through service items */}
            {serviceList.map(eachService => (
                <li className="service-item">
                    <div className="image-div">
                        {/* Rendering service image */}
                        <img src={eachService.imageUrl} className="service-img"/>
                    </div>
                    {/* Rendering service name */}
                    <p className="service-name">{eachService.service}</p>
                </li>
            ))}
        </ul>
    )
}

export default ServiceList // Exporting ServiceList component
