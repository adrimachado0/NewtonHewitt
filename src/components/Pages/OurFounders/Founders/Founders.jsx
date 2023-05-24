import { 
    handleButtonNameSort, 
    handleButtonCompanySort, 
    handleButtonCurrentStageSort,
    handleButtonFoundersSort, 
} from "../../../../logic/logic"

const Founders = (
    {
      setSidebarInfo,
      peoplesState,
      setPeoplesState,
      setOpen,
      personasFiltradas,
    }) => {

    return (
        <div className="our-founders-founders">
            <table className="founders-table">
                <thead>
                    <tr className="sub-parrafo">
                        <th className="start">{`Founder name`}<button onClick={() => {handleButtonNameSort(peoplesState, setPeoplesState)}} className="founder-head-button">{"<>"}</button></th>
                        <th>{`Company`}<button onClick={() => {handleButtonCompanySort(peoplesState, setPeoplesState)}} className="founder-head-button">{"<>"}</button></th>
                        <th>{`Current stage`}<button onClick={() => {handleButtonCurrentStageSort(peoplesState, setPeoplesState)}} className="founder-head-button">{"<>"}</button></th>
                        <th>{`Founders`}<button onClick={() => {handleButtonFoundersSort(peoplesState, setPeoplesState)}} className="founder-head-button">{"<>"}</button></th>
                        <th className="end">{`First partnered`}<button className="founder-head-button">{"<>"}</button></th>
                    </tr>
                </thead>
                <tbody className="founder-body">
                    {peoplesState.map((peoples, i) => (
                        <tr className="founders-body" key={i} onClick={() => {setOpen(true); setSidebarInfo(peoples);}}>
                            <td className="start founder-center"><span><img loading="lazy" src={peoples.image} alt="founder image" className="founder-image"/></span><p>{peoples.name}</p></td>
                            <td><p>{peoples.company}</p></td>
                            <td><p>{peoples.currentStage}</p></td>
                            <td><p>{peoples.founders}</p></td>
                            <td className="end"><p>{peoples.firstPartnered}</p></td>
                            <td><p>{peoples.dependency}</p></td>
                            <td><p>{peoples.tags}</p></td>
                        </tr>                                    
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Founders