
const CompanyWhyinvested = ({datosPage}) => {
  return (
    <div className="companias-padding">
        <h3 className="company-title-h3">
            Why we invested
        </h3>
        <p className="company-parrafo-p">
            {datosPage.whyInvested}
        </p>
    </div>
  )
}

export default CompanyWhyinvested