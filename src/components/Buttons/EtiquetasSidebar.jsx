
const EtiquetasSidebar = ({children, background}) => {
  return (
        <div className={`sidebar-etiqueta ${background}`}>
            <button className="sidebar-etiqueta-button">{children}</button>
        </div>
  )
}

export default EtiquetasSidebar