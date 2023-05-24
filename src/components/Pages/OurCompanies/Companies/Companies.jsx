
import { Link } from 'react-router-dom'

import Existence from '../imgCompanies/existencebackground.png'
import Shaper from    '../imgCompanies/shaperbackground.png'
import Squared from   '../imgCompanies/squaredbackground.png'
import Workables from '../imgCompanies/workablesbackground.png'

import { CompaniesInfo } from "../../../../data/data"

const imagenesBackground = {
    "existence":Existence,
    "shaper":Shaper,
    "squared+":Squared,
    "workables":Workables,
}

const Companies = () => {



    return (
        <div className='companiesContent'>
            {
                CompaniesInfo.map((datos, i) => (
                    <div key={i}>
                        <Link to={`/page-company/${datos.name}`}>
                            <div 
                                className='card-company border-company'
                            >
                                <img loading='lazy' src={imagenesBackground[datos.cardBackground]} className='background-company'/>
                                <h3 className='name-company'>{datos.name}</h3>
                            </div>                    
                        </Link>                        
                    </div>
                ))
            }
        </div>
    )
}

export default Companies