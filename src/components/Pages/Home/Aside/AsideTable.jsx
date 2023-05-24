import investorImage from '../../../../assets/usuario.webp';

const AsideTable = ({number, user, usd}) => {
  return (
    <div className="table-underline">
        <div className="aside-table inline">
            <p className="sub-parrafo">#{number}</p>
            <div className="inline">
                <img loading='lazy' className="aside-table-img" src={investorImage} alt='Investor image'/>
                <p className="sub-parrafo table-user">{user}</p>
            </div>

            <p className="sub-parrafo">${usd}M</p>
        </div>        
    </div>

  )
}

export default AsideTable