import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} /> 
          </Routes>
          <Routes>
            <Route path="/create" element={<Create />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
