import Datagrid from "../components/Datagrid"
import Dropdown from "../components/Dropdown"


const next:React.FC = () => {
  return (<>
  <section className="body-container"><Datagrid /> </section>
  <section className="body-container"><Dropdown/> </section>
   </>
  )
}

export default next