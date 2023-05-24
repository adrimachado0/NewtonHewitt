import Etiquetas from "../../../../../Buttons/Etiquetas"

const MidCardContent = () => {
  return (
    <div className="aside-mid border">
        <div className="aside-startups-gap">
            <Etiquetas>Startups</Etiquetas>
        </div>
        <div>
            <p className="sub-parrafo no-margin startups-text">Throughout the process of working with Newton Hewitt & CO, startups experience a collaborative and supportive environment that is designed to help them achieve their goals. By taking a comprehensive approach to company building and offering a wide range of resources and support.</p>
            <p className="sub-parrafo no-margin startups-founder">MARIE SCHEENEGAS</p>
            <p className="sub-parrafo no-margin">CO-FOUNDER, MOTIF</p>
        </div>
        <div className="aside-footer">
            <p className="sub-parrafo underline"></p>
        </div>
    </div>
  )
}

export default MidCardContent