import shortcutsImage from '../../../imgCompanies/shortcutsimage.webp'

const CompanyShortcuts = () => {
  return (
    <div className='companias-padding'>
        <h3 className='company-title-h3'>Shortcuts</h3>
        <div className='company-shortcuts'>
            <div className='card-company company-shortcuts-border'>
                <img loading='lazy' className='company-shortcuts-img' src={shortcutsImage} alt="Pitch deck image"/>
                <p className='name-company'>Pitch deck</p>
            </div>
            <div className='card-company company-shortcuts-border'>
                <img loading='lazy' className='company-shortcuts-img' src={shortcutsImage} alt="BrandBook image" />
                <p className='name-company'>Brandbook</p>
            </div>
            <div className='card-company company-shortcuts-border'>
                <img loading='lazy' className='company-shortcuts-img' src={shortcutsImage} alt="Metrics image" />
                <p className='name-company'>Metrics</p>
            </div>
            <div className='card-company company-shortcuts-border'>
                <img loading='lazy' className='company-shortcuts-img' src={shortcutsImage} alt="Partenerships image" />
                <p className='name-company'>Partnerships</p>
            </div>
        </div>
    </div>
  )
}

export default CompanyShortcuts