import Header from "../../../../Header/Header";
import CompanyHeader from "./componentsCompany/companyHeader";
import Footer from "../../../Home/HomeFooter/Footer";

import { CompaniesInfo } from "../../../../../data/data"

import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

import CompanyMilestones from "./componentsCompany/CompanyMilestones"
import CompanyWhyInvested from './componentsCompany/CompanyWhyinvested'
import CompanyShortcuts from './componentsCompany/CompanyShortcuts'
import CompanyInvest from './componentsCompany/CompanyInvest'

const PageCompany = () => {

  const [location, setLocation] = useState(useLocation().pathname.split("/")[useLocation().pathname.split("/").length - 1])

  const [datosPage, setDatosPage] = useState({})

  useEffect(() => {
    const datosFiltrados = CompaniesInfo.filter(compania => compania.name === location)
    setDatosPage({...datosFiltrados[0]})
  }, [])

  return (
    <div>
      <Header />
      <div className="page-company contenedor m-top">
        <div className="separador">
          <CompanyHeader location={location} datosPage={datosPage}/>
        </div>
        <div className="separador">
          <CompanyMilestones datosPage={datosPage}/>
        </div>
        <div className="separador">
          <CompanyWhyInvested datosPage={datosPage} />
        </div>
        <div className="separador">
          <CompanyShortcuts datosPage={datosPage} />
        </div>
        <div className="separador">
          <CompanyInvest datosPage={datosPage}/>
        </div>
      </div>
      <footer className="home-footer">
        <Footer />
      </footer>
    </div>
  )
}

export default PageCompany