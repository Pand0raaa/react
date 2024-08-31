import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from './Nav'
import Scp_Home from './SCP_Home';
import Scp_002 from './SCP_002';
import Scp_003 from './SCP_003';
import Scp_004 from './SCP_004';
import Scp_005 from './SCP_005';
import Scp_006 from './SCP_006';
import Scp_Foundation from './SCP_Foundation';
import './App.css'

function App() {
  return (
    <>
    <Router>
      <Nav/>
     
        <Routes>
          <Route path="Scp_Home" element={<Scp_Home/>} /> 
          <Route path="/Scp_Foundation" element={<Scp_Foundation />} />
          </Routes>
          <Routes>
          <Route path="/Scp_002" element={<Scp_002 />} />
          </Routes>
          <Routes>
          <Route path="/Scp_003" element={<Scp_003 />} />
          </Routes>
          <Routes>
          <Route path="/Scp_004" element={<Scp_004 />} />
          </Routes>
          <Routes>
          <Route path="/Scp_005" element={<Scp_005 />} />
          </Routes>
          <Routes>
          <Route path="/Scp_006" element={<Scp_006 />} />
        </Routes>
    </Router>
    </>   
   )
}


export default App;
