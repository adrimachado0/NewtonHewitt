import { useState } from "react"
import Header from "../../Header/Header"
import Footer from "../Home/HomeFooter/Footer"

import Carrousel from "./components/Carrousel"
import Get from "./components/Get"
import Faqs from "./components/Faqs"


const Climb = () => {

    return (
        <div>
            <Header />
            <div className="contenedor">
                <div className="climb-title center m-top flex-column align-items">
                    <h1>Ready to climb?</h1>
                </div>
                <Carrousel />
                <Get />
                <Faqs />
            </div>
            <footer className="home-footer">
                <Footer />
            </footer>
        </div>
    )
}

export default Climb