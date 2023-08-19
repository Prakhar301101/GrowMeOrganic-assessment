import {Routes,Route} from "react-router-dom";
import './App.css'

//pages
import Form from './pages/Form'
import Next from "./pages/Next";

function App() {
    return(
        <>
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/Page2" element={<Next />} />
          </Routes>		
        </>
    );
}

export default App
