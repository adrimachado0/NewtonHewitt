
import Existence from '../../../imgCompanies/existencebackground.png'
import Shaper from    '../../../imgCompanies/shaperbackground.png'
import Squared from   '../../../imgCompanies/squaredbackground.png'
import Workables from '../../../imgCompanies/workablesbackground.png'

import twitterLogo from '../logosRedesCompany/logoTwitterCompany.png'
import linkedinLogo from '../logosRedesCompany/logoLinkedinCompany.png'
import youtubeLogo from '../logosRedesCompany/logoYoutubeCompany.png'
import gmailLogo from '../logosRedesCompany/logoGmailCompany.png'
import ButtonCompany from '../../../../../Buttons/ButtonCompany'

const imagenesBackground = {
    "existence":Existence,
    "shaper":Shaper,
    "squared+":Squared,
    "workables":Workables,
    "random":Squared,
}

const CompanyHeader = ({datosPage}) => {

    return (
        <div className='company-header companias-padding'>
            <div className="company-header-title flex flex-column">
                <h1 className="main-title capitalize">
                    {datosPage.name}
                </h1>
                <p className='main-title-text'>
                    {datosPage.text}
                </p>
                <div className="flex align-items">
                    <img className="company-header-logo" src={twitterLogo} alt="Twitter logo"/>
                    <img className="company-header-logo" src={linkedinLogo} alt="LinekdIn logo"/>
                    <img className="company-header-logo" src={youtubeLogo} alt="YouTube logo"/>
                    <img className="company-header-logo" src={gmailLogo} alt="Gmail logo"/>
                    <ButtonCompany buttonName="button-name"/>
                </div>            
            </div>
            <div className='card-company border-company'>
                <img src={imagenesBackground[datosPage.cardBackground]} className='background-company' alt={`Imagen la company ${datosPage.name}`}/>
            </div>
        </div>
  )
}

export default CompanyHeader