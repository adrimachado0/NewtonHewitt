import companyImage from '../../../../../../assets/cardcompany.webp' 
import vectorCompany from '../../../../../../assets/Vector.png' 
import Etiquetas from '../../../../../Buttons/Etiquetas'

const CardCompany = () => {
  return (
    <div className='border aside-big secondary-gray'>
        <div className='flex flex-column no-gap company'>
            <div className={`fit-content`}>
                <img loading='lazy' className={`card-company-vector`} src={vectorCompany} alt='Profit image'/>
                <img loading='lazy' className={`card-company-image`} src={companyImage} alt="Company image" />
            </div>
            <div className={`p-top-medium`}>
                <p className={`card-company-text`}>2022</p>
            </div>
            <div className={`p-top-medium`}>
                <p className={`card-company-text`}><span><img loading='lazy' className={`card-company-image`} src={companyImage} alt="Company image"/></span> Year</p>
            </div>
            <div className={`p-top-medium`}>
                <p className={`card-company-text`}>In <span><img loading='lazy' className={`card-company-image`} src={companyImage} alt="Company image"/></span> review</p>
            </div>
            <div className={`p-top-medium`}>
                <img loading='lazy' className={`card-company-image`} src={companyImage} alt="Company image"/>
            </div>
        </div>
        <Etiquetas>Company</Etiquetas>
        <div>
            <p className='sub-parrafo'>A look at how AngelList helped startups, Investors, & fund managers accelerate innovation in 2022.</p>
            <p className='aside-footer sub-parrafo underline'>Explore the review</p>
        </div>
    </div>
  )
}

export default CardCompany