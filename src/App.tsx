import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConfigForm from './pages/ConfigForm';
import TicketPoolStatus from './pages/TicketPoolStatus';
import VendorControl from './pages/VendorControl';
import CustomerControl from './pages/CustomerControl';
import Logs from './pages/Logs';
import Navbar from './pages/Navbar';

function App(){
  return(
    <Router>
      <Navbar />{/* Navigation bar */}
      <Routes>
         {/* Configuration page at the root URL */}
        <Route path="/" element={<ConfigForm />} />
        <Route path="/status" element={<TicketPoolStatus />} />
        <Route path="/vendors" element={<VendorControl />} />
        <Route path="/customers" element={<CustomerControl />} />
        <Route path="/logs" element={<Logs />} />
      </Routes>
    </Router> 
  );
}

export default App;
