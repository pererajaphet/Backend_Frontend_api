import {BrowserRouter as Router, Route} from 'react-router-dom';
import Car from './components/Car';
import Home from './components/Home';
import { Routes } from 'react-router';



function App() {

  return (

    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/cars/:id" element={<Car/>} exact/>
        </Routes>
      </Router>
    
    </div>

  );

}



export default App;