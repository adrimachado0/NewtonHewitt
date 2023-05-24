import Etiquetas from '../../../../../Buttons/Etiquetas'
import AsideInvestorsImg from '../../../../../../assets/asideinvestorsimage.webp'

const BigCardInvestors = ({background, colorParrafos}) => {
    return (
        <div className={`big-card-investors aside-big border ${background} ${colorParrafos} p-top-small`}>
            <div className="investors-center">
                <p className={`sub-parrafo`}>Apoorva Govind</p>
                <img loading='lazy' src={AsideInvestorsImg} className={`center investors-image`} alt="Investors image" />
            </div>
            <div>
                <Etiquetas>Investors</Etiquetas>
                <p className={`sub-parrafo `}>AngelList helped Lenny Rachitsky (along with Dan Rumennik) turn the Airbnb Alumni Syndicate into one of the top-performing alumni investing networks.</p>
            </div>
            <div className="aside-footer">
                <p className={`sub-parrafo underline `}>Lead a Syndicate</p>
            </div>
        </div>
      )
}

export default BigCardInvestors