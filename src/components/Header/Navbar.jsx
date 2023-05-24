import logoNewton from '../../assets/newtonlightlogo.webp';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {

  const [location, setLocation] = useState(useLocation().pathname)

  const scrollTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div className="contenedor">
        <nav className='header-nav'>
            <Link to="/"><img loading='lazy' src={logoNewton} className='header-logo-img' alt="Newton Hewitt Logo"/></Link>
            <div>
                <ul className='header-nav-ul'>
                    <li onClick={scrollTop} className={`${location === "/ourfounders" ? "redondo" : "no-redondo"}`}><Link to="/ourfounders"><p className='header-nav-ul-p'>Our founders</p></Link></li>
                    <li onClick={scrollTop} className={`${location === "/ourcompanies" ? "redondo" : "no-redondo"}`}><Link to="/ourcompanies"><p className='header-nav-ul-p'>Our companies</p></Link></li>
                    <li onClick={scrollTop} className={`${location === "/ourteam" ? "redondo" : "no-redondo"}`}><p className='header-nav-ul-p'><Link to="/ourteam">Our team</Link></p></li>
                    <li><p className='header-nav-ul-p'>Builders</p></li>
                    <li onClick={scrollTop} className={`${location === "/climb" ? "redondo" : "no-redondo"}`}><Link to="/climb" ><p className='header-nav-ul-p'>Climb</p></Link></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}


export default Navbar