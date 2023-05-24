/** Big Cards **/
import BigCardCompany from './Card/Big/BigCardCompany';
import BigCardInvestors from './Card/Big/BigCardInvestors';
import BigCardContent from './Card/Big/BigCardContent';
import BigCardTable from './Card/Big/BigCardTable';

/** Mid Cards **/
import MidCardContent from './Card/Medium/MidCardContent';

/** Small Cards **/
import SmallCardUsers from './Card/Small/SmallCardUsers';
import SmallCardFundManager from './Card/Small/SmallCardFundManager';

const HomeAside = () => {
  return (
    <div>
        <aside className="aside">
            <BigCardContent background="secondary-orange" />
            <SmallCardUsers />
            <MidCardContent />
            <BigCardTable />
            <SmallCardUsers />        
            <BigCardInvestors background="secondary-lightblue"/>
            <BigCardContent/>
            <SmallCardFundManager /> 
            <SmallCardUsers background="secondary-red"/> 
            <BigCardInvestors background="black" colorParrafos="card-parrafos-white"/>
            <BigCardCompany />
        </aside>
    </div>
  )
}

export default HomeAside