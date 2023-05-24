import Etiquetas from "../../../../../Buttons/Etiquetas"

const SmallCardFundManager = () => {
  return (
    <div className="aside-small border secondary-green">
        <div className='flex align-items'>
            <Etiquetas>Fund manager</Etiquetas>
        </div>
        <p className={`xxl no-margin m-top-small`}>17,502</p>
        <p className={`sub-parrafo no-margin`}>Investors on Newton Hewitt & CO.</p>
        <p className="sub-parrafo underline aside-footer">Lead a Rolling Fund</p>
    </div>
  )
}

export default SmallCardFundManager