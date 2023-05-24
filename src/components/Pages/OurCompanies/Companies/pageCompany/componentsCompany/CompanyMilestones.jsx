
const CompanyMilestones = ({datosPage}) => {

    return (
        <div className="company-milestones companias-padding">
            <div>
                <h3 className="company-title-h3">
                    Milestones
                </h3>
                {
                    Object.keys(datosPage).length &&
                    datosPage.milestones.map((milestone, key) => (
                        <p className="company-parrafo-p no-margin" key={key}>{milestone}</p>
                    ))
                }
            </div>
            <div>
                <h3 className="company-title-h3">
                    Team
                </h3>
                {
                    Object.keys(datosPage).length &&
                    datosPage.team.map((teams, key) => (
                        <p className="company-parrafo-p no-margin" key={key}>{teams}</p>
                    ))
                }
            </div>
            <div>
                <h3 className="company-title-h3">
                    Partner
                </h3>
                {
                    Object.keys(datosPage).length &&
                    datosPage.partner.map((partners, key) => (
                        <p className="company-parrafo-p no-margin" key={key}>{partners}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default CompanyMilestones