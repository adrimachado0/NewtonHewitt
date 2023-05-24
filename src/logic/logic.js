export const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)
    return random + fecha
};

export const handleButtonNameSort = (foundersState, setFoundersState) => {
    const foundersNameOrdenados = (foundersState.map(founder => founder.name)).sort()
    let foundersNameActualizados = []
    for(let i = 0; i < foundersNameOrdenados.length ; i++) {
        foundersNameActualizados.push(foundersState.filter(founder => {
            return founder.name === foundersNameOrdenados[i]
        }))
        foundersNameActualizados[i] = foundersNameActualizados[i][0]
    }
    setFoundersState(foundersNameActualizados)
}

export const handleButtonCompanySort = (foundersState, setFoundersState) => {
    let companiasOrdenadas = []
    for(let i = 0; i < foundersState.length; i++) {
        companiasOrdenadas.push(foundersState[i].company)
    }
    let setSinrepetido = new Set(companiasOrdenadas);
    let arregloSinRepetidos = Array.from(setSinrepetido)
    arregloSinRepetidos.sort()
    const FoundersOrdened = []
    for(let i = 0; i < foundersState.length; i++) {
        const Poronga = foundersState.filter(founder => {
            return founder.company === arregloSinRepetidos[i]
        })
        Poronga.length > 0 && Poronga.forEach(fundador => FoundersOrdened.push(fundador))
    }
    setFoundersState(FoundersOrdened)
}

export const handleButtonCurrentStageSort = (foundersState, setFoundersState) => {
    let companiasOrdenadas = []
    for(let i = 0; i < foundersState.length; i++) {
        companiasOrdenadas.push(foundersState[i].currentStage)
    }
    let setSinrepetido = new Set(companiasOrdenadas);
    let arregloSinRepetidos = Array.from(setSinrepetido)
    arregloSinRepetidos.sort()
    const FoundersOrdened = []
    for(let i = 0; i < foundersState.length; i++) {
        const Poronga = foundersState.filter(founder => {
            return founder.currentStage === arregloSinRepetidos[i]
        })
        Poronga.length > 0 && Poronga.forEach(fundador => FoundersOrdened.push(fundador))
    }
    setFoundersState(FoundersOrdened)
}

export const handleButtonFoundersSort = (foundersState, setFoundersState) => {
    let companiasOrdenadas = []
    for(let i = 0; i < foundersState.length; i++) {
        companiasOrdenadas.push(foundersState[i].founders)
    }
    let setSinrepetido = new Set(companiasOrdenadas);
    let arregloSinRepetidos = Array.from(setSinrepetido)
    arregloSinRepetidos.sort()
    const FoundersOrdened = []
    for(let i = 0; i < foundersState.length; i++) {
        const Poronga = foundersState.filter(founder => {
            return founder.founders === arregloSinRepetidos[i]
        })
        Poronga.length > 0 && Poronga.forEach(fundador => FoundersOrdened.push(fundador))
    }
    setFoundersState(FoundersOrdened)
}

export const nextFounder = (foundersState, sidebarInfo, setSidebarInfo) => {
    if(foundersState.indexOf(sidebarInfo) + 1 > foundersState.length - 1) {
        return
    } else {
        setSidebarInfo(foundersState[foundersState.indexOf(sidebarInfo) + 1])
    }
}

export const beforeFounder = (foundersState, sidebarInfo, setSidebarInfo) => {
    if(foundersState.indexOf(sidebarInfo) - 1 < 0) {
        return
    } else {
        setSidebarInfo(foundersState[foundersState.indexOf(sidebarInfo) - 1])
    }
}