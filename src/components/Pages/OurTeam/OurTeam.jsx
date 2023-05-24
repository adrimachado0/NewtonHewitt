import { useState, useEffect, useRef } from "react"

import Header from "../../Header/Header"
import Footer from "../Home/HomeFooter/Footer"

import SearchBar from "../../../hooks/SearchBar"

import Founders from "../OurFounders/Founders/Founders"
import { TeamsInfo } from "../../../data/data"
import SideBar from "../OurFounders/Founders/SideBar"

const OurTeam = () => {

    const [peoplesState, setPeoplesState] = useState(TeamsInfo)

    const [open, setOpen] = useState(false)

    const [sidebarInfo, setSidebarInfo] = useState({})


    const [filtroInput, setFiltroInput] = useState("")

    const [filtroDependency, setFiltroDependency] = useState("")

    const [filtroTags, setFiltroTags] = useState("")

    const [personasFiltradas, setPersonasFiltradas] = useState()

    const onSearch = (inputValue) => {
      setFiltroInput(inputValue)
    }

    useEffect(() => {
      if(filtroInput && filtroDependency && !filtroTags) {
        const prueba = TeamsInfo.filter(team => {
          return team.name.toLowerCase().includes(filtroInput.toLowerCase()) && team.dependency.toLowerCase() === filtroDependency.toLowerCase() 
        })
        setPeoplesState(prueba)
      }
      if(filtroInput && !filtroDependency && !filtroTags) {
        const prueba = TeamsInfo.filter(team => {
          return team.name.toLowerCase().includes(filtroInput.toLowerCase())
        })
        setPeoplesState(prueba)
      }
      if(!filtroInput && filtroDependency && !filtroTags) {
        const prueba = TeamsInfo.filter(team => {
          return team.dependency.toLowerCase() === filtroDependency.toLowerCase() 
        })
        setPeoplesState(prueba)
      }
      if(!filtroInput && !filtroDependency && filtroTags) {
        const prueba = TeamsInfo.filter(team => {
          return team.tags.toLowerCase() === filtroTags.toLowerCase()
        })
        setPeoplesState(prueba)
      }
      if(!filtroInput && filtroDependency && filtroTags) {
        const prueba = TeamsInfo.filter(team => {
          return team.tags.toLowerCase() === filtroTags.toLowerCase() && team.dependency.toLowerCase() === filtroDependency.toLowerCase()
        })
        setPeoplesState(prueba)
      }
      if(filtroInput && filtroDependency && filtroTags) {
        const prueba = TeamsInfo.filter(team => {
          return team.name.toLowerCase().includes(filtroInput.toLowerCase()) && team.tags.toLowerCase() === filtroTags.toLowerCase() && team.dependency.toLowerCase() === filtroDependency.toLowerCase()
        })
        setPeoplesState(prueba)
      }

      
      if (!filtroInput && !filtroDependency && !filtroTags) {
        setPeoplesState(TeamsInfo)
      }
    }, [filtroDependency, filtroInput, filtroTags])

  return (
    <div>
        <Header />
        <div className="our-companies contenedor m-top">
            <h1>Meet our star team</h1>
            <SearchBar 
              onSearch={onSearch}
              filtroDependency={filtroDependency}
              setFiltroDependency={setFiltroDependency}
              filtroTags={filtroTags}
              setFiltroTags={setFiltroTags}
            />
            <Founders 
                setSidebarInfo={setSidebarInfo}
                peoplesState={peoplesState}
                setPeoplesState={setPeoplesState}
                open={open}
                setOpen={setOpen}
            />
        </div>
        <SideBar 
            sidebarInfo={sidebarInfo}
            setSidebarInfo={setSidebarInfo}
            peoplesState={peoplesState}
            open={open}
            setOpen={setOpen}
        />
        <footer className="home-footer">
            <Footer />
        </footer>      
    </div>
  )
}

export default OurTeam