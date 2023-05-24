import Leaf from '../../../../assets/leafhomenewton.webp';
import World from '../../../../assets/worldHomeNewton.png';
import ButtonHome from '../../../Buttons/ButtonHome';

const HomeMain = () => {
  return (
    <div className="main">
        <div className="main-first">
            <div className="sticky">
                <h1 className="main-title">
                    Creating possibilities
                </h1>
                <p className='main-title-text'>
                    We are introducing a completely revolutionary way of doing business that will change the way people see reality
                </p>
                <div>
                    <ButtonHome buttonName="Get in touch"/>
                </div>                
            </div>
        </div>
        <div className="main-second">
            <div className="sticky-second">
                <img loading='lazy' className="leaf-home" src={Leaf} alt="Image of a Leaf"/>
                <h2 className='main-second-title'>Change the way you look at things and the things you look at change.</h2>
                <p className="center">Wayne W. Dyer</p>
                <img loading='lazy' className="world-home" src={World} alt="Picture of the World" />
            </div>
        </div>
    </div>
  )
}

export default HomeMain