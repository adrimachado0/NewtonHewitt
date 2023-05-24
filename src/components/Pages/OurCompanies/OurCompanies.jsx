import { useState, useEffect } from "react"

import Header from "../../Header/Header"
import Footer from "../Home/HomeFooter/Footer"
import Companies from "./Companies/Companies"


const OurCompanies = () => {


    return (
    <div>
        <Header />
        <div className="our-companies contenedor m-top">
            <h1 className="title-company">Discover our companies</h1>
            <Companies />
        </div>
        <footer className="home-footer">
            <Footer />
        </footer>
    </div>
  )
}

export default OurCompanies