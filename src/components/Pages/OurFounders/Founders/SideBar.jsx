import { useRef } from "react";
import closeButton from '../img/closeButton.png';

import EtiquetasSidebar from "../../../Buttons/EtiquetasSidebar";
import flechaArriba from  '../img/flechaGris.png'
import flechaAbajo from   '../img/flechaBlanca.png'

import { 
        nextFounder,
        beforeFounder
      } from "../../../../logic/logic"

const SideBar = ({
        sidebarInfo,
        setSidebarInfo,
        peoplesState,
        open,
        setOpen,
      }) => {

    /** Scroll ANIMADO **/
    const targetElementRef = useRef(null);  
    const scrollToTop = () => {
        const targetElement = targetElementRef.current;
        if (targetElement) {
          targetElement.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }
    };

    const buttonTop = useRef(null);
    const buttonBottom = useRef(null);
    const scrollToTopAnimation = () => {
      const buttonTopElement = buttonTop.current
      if( buttonTopElement && buttonTopElement.classList.contains('border-blanco')) return scrollToTop()
    }
    const scrollButtonBottom = () => {
      const buttonBottomElement = buttonBottom.current
      if(buttonBottomElement && buttonBottomElement.classList.contains("border-blanco")) return scrollToTop()
    }
    /** ------------------------------------------------------- **/

    return (
      <div ref={targetElementRef} className={`${open ? "sidebar-open" : "sidebar-close"} founders-sidebar content`}>
        <div className="scroll">
            <img className="close-button" src={closeButton} alt="Close button" onClick={() => setOpen(false)}/>
            <div>
                <div className="separador-sidebar">
                    <div className="flex align-items ">
                        <img className='sidebar-img' src={sidebarInfo.image} alt="User image"/>
                        <div className='inline-block'>
                            <h4>{sidebarInfo.name}</h4>
                            <p className="sidebar-gray">{Object.keys(sidebarInfo).length > 0 && sidebarInfo.sidebar.work}</p>
                        </div>
                    </div>
                    {
                        Object.keys(sidebarInfo).length > 0  &&
                        sidebarInfo.sidebar.etiquetas               &&
                        <div className="flex justify-content center m-top-small">
                            {
                                sidebarInfo.sidebar.etiquetas.map((etiqueta, key) => (
                                    <EtiquetasSidebar key={key}>{etiqueta}</EtiquetasSidebar>
                                ))
                            }
                        </div>
                    }
                </div>
                <div className="sidebar separador-sidebar">
                    <h3>Backstory</h3>
                    <p className="sub-parrafo sidebar-gray">{Object.keys(sidebarInfo).length > 0 && sidebarInfo.sidebar.backstore}</p>
                </div>

                <div className="sidebar separador-sidebar">
                    <h3>On the lookout for</h3>
                    <p className="sub-parrafo sidebar-gray">{Object.keys(sidebarInfo).length > 0 && sidebarInfo.sidebar.searchOf}</p>
                </div>

                <div className="sidebar separador-sidebar">
                    <h3>Inspiring quote</h3>
                    <p className="sub-parrafo sidebar-gray">{Object.keys(sidebarInfo).length > 0 && sidebarInfo.sidebar.inspiring}</p>
                </div>
                {
                    Object.keys(sidebarInfo).length > 0 && 
                    sidebarInfo.sidebar.select   
                    ?       
                    (
                        <div className="sidebar ">
                            <h3>Select Track Record</h3>
                            <div className="sidebar-selec">
                                {
                                    sidebarInfo.sidebar.select.map((i, key) => (<p key={key}>{i}</p>))
                                }
                            </div>
                        </div>
                    )
                    : 
                    Object.keys(sidebarInfo).length > 0     &&  
                    sidebarInfo.sidebar.skills              &&
                    (
                        <div >
                            <div className="sidebar separador-sidebar skills-content">
                                {
                                    sidebarInfo.sidebar.skills.map((i, key) => (<p className="skills" key={key}>{i}</p>))
                                }
                            </div>
                            <div className="sidebar redes-content">
                                {
                                    sidebarInfo.sidebar.redes.map((i, key) => (
                                        <div className="redes-border" key={key}>
                                            <img src={i} className="redes"/>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
        <div className="sidebar-footer">
            <button ref={buttonTop} onClick={() => {beforeFounder(peoplesState, sidebarInfo, setSidebarInfo); scrollToTopAnimation()}} className={`flecha flecha-abajo ${peoplesState.indexOf(sidebarInfo) - 1  < 0 ? "border-gris" : "border-blanco"}`}>
                <img className={`${peoplesState.indexOf(sidebarInfo) - 1  < 0 ? "flecha-arriba-gris" : "flecha-arriba-blanco"}`} src={`${peoplesState.indexOf(sidebarInfo) - 1  < 0 ? flechaArriba : flechaAbajo}`} alt="Image arrow" />
            </button>
            <button ref={buttonBottom} onClick={() => {nextFounder(peoplesState, sidebarInfo, setSidebarInfo); scrollButtonBottom()}} className={`flecha flecha-abajo ${peoplesState.indexOf(sidebarInfo) + 1  < peoplesState.length ? "border-blanco" : "border-gris"}`}>
                <img className={`${peoplesState.indexOf(sidebarInfo) + 1  < peoplesState.length ? "flecha-abajo-blanco" : "flecha-abajo-gris"}`} src={`${peoplesState.indexOf(sidebarInfo) + 1  < peoplesState.length ? flechaAbajo : flechaArriba}`} alt="Image arrow" />
            </button>
            <div>
                <p className="no-margin next-founder">
                    {
                        peoplesState.indexOf(sidebarInfo) + 1 < peoplesState.length && "Next Founder"
                    }
                </p>
                <p className={`no-margin sidebar-gray`}>
                    {
                        peoplesState.indexOf(sidebarInfo) + 1 < peoplesState.length && 
                        peoplesState[peoplesState.indexOf(sidebarInfo) + 1].name
                    }
                    {
                        peoplesState.indexOf(sidebarInfo) === peoplesState.length - 1 &&
                        "No more results."
                    }
                </p>
            </div>
        </div>
      </div>
    )
}

export default SideBar