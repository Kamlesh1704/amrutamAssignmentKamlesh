import React from 'react'; // Importing React
import './index.css'; // Importing custom CSS for Welcome component

// Welcome component
const Welcome = () => {
    return (
        <div className="welcome-div" id='home'>
            <div className="welcome-gradient">
                <div className="welcome-content-div">
                    <p className="namaste-para">Namaste, Welcome to Amrutam</p>
                    <h3 className="welcome-heading">Step into Holistic Healing 
                    with Ayurveda  Book 
                    Consultation with 
                    certified Experts.</h3>
                    <p className="para-2">Dive into the world of ayurveda and Experience Personalized Health Solutions and Holistic Guidance 
                        from Trusted Ayurvedic Doctors Anytime, anywhere.</p>
                    <button type="button" className="book-button">
                        Book an Appointment
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Welcome; // Exporting Welcome component
