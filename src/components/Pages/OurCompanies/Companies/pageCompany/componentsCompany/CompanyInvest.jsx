import ButtonCompany from "../../../../../Buttons/ButtonCompany"

const CompanyInvest = ({datosPage}) => {
    return (
        <div className="companias-padding">
            <h3 className="company-title-h3">Invest on Shaper</h3>
            <p className="company-parrafo-p">
                {datosPage.invest}
            </p>
            <ButtonCompany buttonName="Invest"/>
        </div>
    )
}

export default CompanyInvest