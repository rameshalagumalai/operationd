import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Test from './Test';
import Complete from './Complete';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/test' element={<Test />} />
          <Route path='/complete' element={<Complete />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
