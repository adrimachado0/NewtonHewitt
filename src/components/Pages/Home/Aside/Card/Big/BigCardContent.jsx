import Etiquetas from "../../../../../Buttons/Etiquetas"

const BigCardContent = ({background}) => {
    return (
        <div className={`${background} border aside-big`}>
            <div>
                <Etiquetas>Fund manager</Etiquetas>
                <p>Newton Hewitt & CO's fund managers are experts in their field and have extensive experience in managing investments in various sectors and markets. They are responsible for identifying the most promising investment opportunities, conducting thorough research on them, and making informed decisions on resource allocation.</p>
            </div>
            <div className="aside-footer">
                <p className="sub-parrafo underline">Learn more about networked banking</p>
            </div>
        </div>
    )
}

export default BigCardContent