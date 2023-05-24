import { useState } from "react"

import Header from "../../Header/Header"
import Footer from "../Home/HomeFooter/Footer"

import SearchBar from "../../../hooks/SearchBar"

import Founders from "./Founders/Founders"
import { FoundersInfo } from "../../../data/data"
import SideBar from "./Founders/SideBar"

const OurFounders = () => {

    const [peoplesState, setPeoplesState] = useState(FoundersInfo)

    const [open, setOpen] = useState(false)

    const [sidebarInfo, setSidebarInfo] = useState({})

    const onSearch = (inputValue) => {
        if(inputValue === "") return setPeoplesState(FoundersInfo)
        let foundersNameActualizados = FoundersInfo.filter(founder => {
            return founder.name.toLowerCase().includes(inputValue.toLowerCase())
        })
        setPeoplesState(foundersNameActualizados)
    }

    return (
        <div>
            <Header />
            <div className="our-companies contenedor m-top">
                <h1>Discover our companies</h1>
                <SearchBar onSearch={onSearch}/>
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

export default OurFounders