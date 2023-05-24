import Header from '../../Header/Header.jsx'
import HomeMain from './Main/HomeMain.jsx'
import HomeAside from './Aside/HomeAside.jsx'
import Footer from './HomeFooter/Footer'

const Home = () => {

  return (
    <div>
      <Header />
      <div className={`contenedor homepage`}>
        <HomeMain/>
        <HomeAside />
      </div>
      <footer className='home-footer'>
        <Footer />
      </footer>
    </div>
  )
}

export default Home