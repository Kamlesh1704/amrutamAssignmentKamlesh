import Header from "../Header" // Importing Header component
import Welcome from '../Welcome' // Importing Welcome component
import ServiceList from "../ServiceList" // Importing ServiceList component
import Discover from "../Discover" // Importing Discover component
import Consultation from "../Consultation" // Importing Consultation component
import Approach from '../Approach' // Importing Approach component
import Stories from '../Stories' // Importing Stories component
import Experts from '../Experts' // Importing Experts component
import AmrutamApp from '../AmrutamApp' // Importing AmrutamApp component
import Footer from '../Footer' // Importing Footer component

// Home component
const Home = () => {
    return (
        <>
          {/* Rendering components */}
          <Header />
          <Welcome />
          <ServiceList />
          <Discover />
          <Consultation />
          <Approach />
          <Stories />
          <Experts />
          <AmrutamApp />
          <Footer />
        </>
    )
}

export default Home // Exporting Home component
