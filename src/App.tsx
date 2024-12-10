import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConfigForm from './pages/ConfigForm';
import TicketPoolStatus from './pages/TicketPoolStatus';

function App(){
  return(
    <Router>
      <Routes>
         {/* Configuration page at the root URL */}
        <Route path="/" element={<ConfigForm />} />
        <Route path="/status" element={<TicketPoolStatus />} />
      </Routes>
    </Router> 
  );
}

export default App;
