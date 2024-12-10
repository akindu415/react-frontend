import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConfigForm from './pages/ConfigForm';

function App(){
  return(
    <Router>
      <Routes>
         {/* Configuration page at the root URL */}
        <Route path="/" element={<ConfigForm />} />
      </Routes>
    </Router> 
  );
}

export default App;
