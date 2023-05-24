import Etiquetas from "../../../../../Buttons/Etiquetas"
import AsideTable from "../../AsideTable"

const BigCardTable = () => {
  return (
    <div className="secondary-lima aside-big border">
        <div>
          <Etiquetas>Investors</Etiquetas>
        </div>
        <div>
          <p className={`medium`}>Largest Investors</p>
        </div>
        <div className="m-top">
            <AsideTable user="Transferwise" number="1" usd="57.9" />
            <AsideTable user="Transferwise" number="1" usd="57.9" />
            <AsideTable user="Transferwise" number="1" usd="57.9" />
            <AsideTable user="Transferwise" number="1" usd="57.9" />


                      
        </div>
        <div className="aside-footer">
            <p className="sub-parrafo underline">Learn more about networked banking</p>
        </div>
    </div>
  )
}

export default BigCardTable