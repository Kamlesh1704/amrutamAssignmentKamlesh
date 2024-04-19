// Importing images
import yoga from '../../Assets/images/yoga.png'
import ribbon from '../../Assets/images/ribbon.png'
import ayurved from '../../Assets/images/ayurved.png'
import strong from '../../Assets/images/strong.png'
import heart from '../../Assets/images/heart.png'
import plus from '../../Assets/images/plus.png'
import lotus from '../../Assets/images/lotus.png'

// Importing CSS file
import './index.css'

// Data for discover lists
const discoverList = [
    {
        imageUrl: heart,
        heading: "Personalized Wellness",
        para: "treatments made just for you based on your individual doshas, (body type)",
    },
    {
        imageUrl: ribbon,
        heading: "Focus on prevention",
        para: "Stop problems even before they start.",
    },
    {
        imageUrl: lotus,
        heading: "Mind-Body Connection",
        para: "Keep your mind and body in sync for a happy life.",
    },
    {
        imageUrl: plus,
        heading: "Holistic Healing",
        para: "Fix the root problem for long-lasting health.",
    },
    {
        imageUrl: ayurved,
        heading: "Natural Remedies",
        para: "Using herbs and natural therapies for healing.",
    },
    {
        imageUrl: strong,
        heading: "Boosting immunity",
        para: "Stay strong and healthy for life, not just for today.",
    },
]

const discoverList1 = [
    {
        imageUrl: heart,
        heading: "Personalized Wellness",
        para: "treatments made just for you based on your individual doshas, (body type)",
    },
    {
        imageUrl: ribbon,
        heading: "Focus on prevention",
        para: "Stop problems even before they start.",
    },
    {
        imageUrl: lotus,
        heading: "Mind-Body Connection",
        para: "Keep your mind and body in sync for a happy life.",
    },
]

const discoverList2 = [
    {
        imageUrl: plus,
        heading: "Holistic Healing",
        para: "Fix the root problem for long-lasting health.",
    },
    {
        imageUrl: ayurved,
        heading: "Natural Remedies",
        para: "Using herbs and natural therapies for healing.",
    },
    {
        imageUrl: strong,
        heading: "Boosting immunity",
        para: "Stay strong and healthy for life, not just for today.",
    },
]

// Discover component
const Discover = () => {
    return (
        <div className="discover-div" id='discover'>
            {/* Heading */}
            <h1 className="discover-heading">Discover Ayurveda’s magic with us </h1>
            {/* Paragraph */}
            <p className="discover-para">Ayurvedic treatment aims to balance your body and mind, bringing harmony and vitality. It's like a journey to better health using ancient wisdom, 
                a totally effective approach for a better life. </p>
            {/* Main content */}
            <div className='flex-list'>
                {/* First list */}
                <ul className='mobile-list-1'>
                    {discoverList1.map(eachList => (
                        <li className='list-items-1'>
                            <div className="">
                                <h3 className="headings">{eachList.heading}</h3>
                                <p className="paras">{eachList.para}</p>                            
                            </div>
                            <div className='discover-img-div'>
                                <img src={eachList.imageUrl} className=""/>
                            </div>
                        </li>
                    ))}
                </ul>
                {/* Yoga image */}
                <img src={yoga} className="yoga-girl" />
                {/* Second list */}
                <ul className='mobile-list-2'>
                    {discoverList2.map(eachList => (
                        <li className='list-items-1'>
                            <div className="order">
                                <h3 className="headings ">{eachList.heading}</h3>
                                <p className="paras ">{eachList.para}</p>                            
                            </div>
                            <div className='discover-img-div'>
                                <img src={eachList.imageUrl} className=""/>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Yoga image for mobile */}
            <img src={yoga} className="yoga-girl-mobile" />            
            {/* Third list */}
            <ul className="discover-list-ul">
                {discoverList.map(eachList => (
                    <li className="discover-list-li">
                        <div className="discover-img-div">
                            <img src={eachList.imageUrl} className="discover-img-li"/>
                        </div>
                        <h3 className="discover-heading-li">{eachList.heading}</h3>
                        <p className="discover-para-li">{eachList.para}</p>
                    </li>
                ))}
            </ul>          
        </div>
    )
}

export default Discover
