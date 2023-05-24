import user from '../../../../../../assets/usuario.webp';

const SmallCardUsers = ({background}) => {
  return (
    <div className={`aside-small border ${background}`}>
        <div className="flex align-items">
            <img loading='lazy' className='userimg' src={user} alt="User image"/>
            <div className='inline-block'>
                <p className="sub-parrafo">Arie Abecassis</p>
                <p className='username'>@arieabec</p>
            </div>
        </div>
        <p className={`sub-parrafo`}>It seems that Newton Hewitt & CO takes very seriously the support of the founders of the companies in which it invests, which is essential for achieving long-term success. Overall, I think it's a very interesting company with a very clear value proposition for those entrepreneurs seeking support to build and develop their businesses.</p>
        <p className="sub-parrafo">11:00 AM · Apr 24, 2023</p>
    </div>
  )
}

export default SmallCardUsers