import { WeeksInfo } from "../../../../data/data"

const Faqs = () => {
  return (
    <div className="flex flex-column align-items m-top">
        <h2 className="faqs-title">Faqs</h2>
        <div className="faqs-contenedor">
            {
                WeeksInfo.map((week, key) => (
                    <div key={key} className="faqs-week">
                        <p>0{week.week}/</p>
                        <p className="faqs-questions">{week.questions}</p>
                        <p className="faqs-info sub-parrafo">{week.info}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Faqs