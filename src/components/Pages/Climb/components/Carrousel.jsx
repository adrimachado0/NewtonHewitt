import { useState } from "react"

import week1 from '../imgNuevas/week1-min-min-min.webp'
import week2 from '../imgNuevas/week2-min-min-min.webp'
import week3 from '../imgNuevas/week3-min-min-min.webp'
import week4 from '../imgNuevas/week4-min-min-min.webp'
import week5 from '../imgNuevas/week5-min-min-min.webp'
import week6 from '../imgNuevas/week6-min-min-min.webp'
import week7 from '../imgNuevas/week7-min-min-min.webp'
import week8 from '../imgNuevas/week8-min-min-min.webp'
import week9 from '../imgNuevas/week9-min-min-min.webp'
import week10 from '../imgNuevas/week10-min-min-min.webp'
import week11 from '../imgNuevas/week11-min-min-min.webp'
import week12 from '../imgNuevas/week12-min-min-min.webp'

const Carrousel = () => {

    const [weeks, setWeeks] = useState([
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
    ])

    const images = {
        "week1":week1,
        "week2":week2,
        "week3":week3,
        "week4":week4,
        "week5":week5,
        "week6":week6,
        "week7":week7,
        "week8":week8,
        "week9":week9,
        "week10":week10,
        "week11":week11,
        "week12":week12,
    }

    const [seleccionado, setSeleccionado] = useState(1)

    const handleClickUpdate = (seleccionado) => {
        setSeleccionado(seleccionado)
        console.log(seleccionado)
    }

    return (
        <div className="climb-subttle contenedor center m-top flex-column align-items">
            <h2>
                Become a climber
            </h2>
            <p className="sub-title">Join the CLIMB program, the epic 12-week bootcamp for founders who want to build the next generation of companies.</p>
            <div className="weeks">
                <p className="week-title">Week</p>
                {
                    weeks.map((week, key) => (
                        <div key={key + 1} className={`week ${week === seleccionado && "background-white"}`}  onClick={() => setSeleccionado(week)}>
                            <p>{week}</p>
                        </div>
                    ))
                }
            </div>
            <div className={`carrousel week-${seleccionado}`}>
                <div className="image-carrousel">
                        <div className={`slide`}>
                            <img loading="eager" src={images[`week${seleccionado}`]} alt={`Imagen de la semana`}/>
                        </div>
                </div>
                <div className="week-info-top">
                    <div className="week-info-top-left">
                        <p className="week">{seleccionado}</p>
                        <p className="week-parrafo">Week</p>
                    </div>
                    <button>Get in touch</button>
                </div>
                <div className="carrousel-bottom no-gap etiqueta-m-bottom ">
                    <p className="carrousel-title">Mindset mastery</p>
                    <p className="no-margin">Learn how to overcome limiting beliefs, cultivate a growth mindset, and develop the resilience to face challenges head-on</p>
                </div>
            </div>
        </div>
    )
}

export default Carrousel