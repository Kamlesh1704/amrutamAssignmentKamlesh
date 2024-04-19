import React from 'react';
import './index.css';

// Data for consultation list
const listData = [
    { 
        heading: 'स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।"',
        paragraph: '[ Meaning: The Goal of Ayurveda is to maintain the health of a healthy person and to cure the disease of a diseased person. ]',
    },
    { 
        imageUrl: "https://s3-alpha-sig.figma.com/img/176b/ed5d/116ec373d4d09fe1dc2dad43869868d9?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T-BS59qFdwG4k4SvtMK44hzcBrLByEYnmkLeagoMhYiknUKV2cTC2EudBwtVEJPCEbibIRnFTOHNukcm-faw7tCn6uP03T59Fvt8S2DclDtsbIuFm~jZ~3MXukjCCD3v4YpU7HW37hfU-jRaVnKESDHj46tvEKuzNdErG~LKoHsBCjjc~oGm1CpK2Z6TWLWpejl8IfLs6dLu5UH1-EGg2ev9dWCswk6VipOs-zPbHCyZXIVnDOxcvdyf1hHC8X44agxtAxehcp7CtgL-1atV~vgDTjK62eF6m-pII6ZR~mVE9cN7~Y63RVvpAW-P-XFBwBNaBPVAWJO5NKlZtg2n0Q__" 
    }, 
    { 
        heading: 'precise diagnosis',
        paragraph: 'Ayurveda\'s core principles revolve around Vata, Pitta, and Kapha doshas, guiding you with precise diagnosis and treatment.',
    },   
    { 
        imageUrl:  "https://s3-alpha-sig.figma.com/img/23ad/ed32/94aa2a9dd47c19df140900a908a8c26c?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VVZXsvlPdkNnQcmWaBDKR1wBEj5MhTbDxixff0YyT~yVkxcDNymZfaKT7WpEz5C6VEYHUm6q0pOomYCTZIOiwj00dtTHdmaBZrtsuTNOg-xiy9l9m94O6drv9z6~ZiGLNNycQ36kGnuafas~RQ0PsF0hibtUOh~1XM3sqmeymgRxljEvYcNrKCbAt7G35pEyr-AXg76alPRarKrkoHP1X1u6uuywEhzwxS26JfbHQ5GgHTBlaQjUYk4F2dTA8FJYM~SvcmIfcyU1SOtWstpkLg1dputk5WkH0ksj8JXaj0LioIo8TEXSnlz9qwPQdtZ9ROYn4s6CxHHLrb9Q1zgASQ__" 
    }, 
    { 
        heading: 'Individual Treatment',
        paragraph: 'All Treatments are personalized based on a person\'s unique constitution and health concerns.',
    },     
    { 
        imageUrl:  "https://s3-alpha-sig.figma.com/img/63a4/2853/caf304c4ff88f018f79dedae521d759e?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J-1ZZbmuk1M7HZBspJf95gc6mYMHoDHR6VaA62O7ilpZg0d38y2A95F8Ml-yh0psazQGZQGYnCjBHpiwNJzh6jw8CUeyk8sM5j3M9FUYolkxOJy~5qFMatrkHObjQV6coXouH8HuxGwYqk-EhKvPQBzhFTNQsSvvVzTJlv6bjILM0pAme07kvKNVsR3rl1fj33Ve1-N-TpVd1tWE9s0U9A-n5~6gG7Va22w38fFyz1wDEJKwiYFxmsbZKCPxvOF5e5t7INhf9u5hdB-duupqCDGyrkwV9jmzgh5StRasVuAer7hKi73D2-mMas5paODJos3~YCp36qWxtj-XPUnuYA__" 
    },      
];

// Component for Consultation section
const Consultation = () => {
    return (
        <div className="consultation-div" id='consultation'>
            {/* Section 1 */}
            <div className="consultation-div-1">
                <h1 className="consultation-heading-1">What sets Ayurvedic consultations apart?</h1>
                <ul className='consuultation-list'>
                {listData.map((eachList, index) => (
                    <li key={index} className='list-consult-item'>
                    {eachList.heading && (
                        <div className="list-card">
                        <h1 className="list-heading-consult">{eachList.heading}</h1>
                        <p className="list-para-consult">{eachList.paragraph}</p>
                        </div>
                    )}
                    {eachList.imageUrl && (
                        <img src={eachList.imageUrl} alt={`Image ${index}`} className="list-img-consult" />
                    )}
                    </li>
                ))}
                </ul>
            </div>
            {/* Section 2 */}
            <div className='consultation-div-2'>
                <div className='consultation-div-shadow'>
                <div>
                  <h1 className='consultation-div-2-heading'>Ready to restore harmony in your mind, body and spirit?</h1>
                  <button type="button" className='consultation-div-2-button'>Book a consultation</button>
                </div> 
                </div>
            </div>
        </div>
    );
};

export default Consultation; // Exporting Consultation component
