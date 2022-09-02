
import './App.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './Home/Home';
import Soultions from './Soultions/Soultions';


import Mobile from './Soultions/Mobile/Mobile';

import UserGrowth from './Soultions/UserGrowth/UserGrowth';

import Revenuces from './Soultions/Revenuces/Revenuces';
import Manged from './Soultions/Manged/Manged';
import Blog from './Resources/Blog/Blog';
import Adx from './Resources/Blog/Adx/Adx';
import AppG from './Resources/Blog/Appgrowth/AppG';
import Gudies from './Resources/Gudies/Gudies'


function App() {
  return (
    <div>
       <Router>
<Navbar/>
        <Routes>
                  {/* <Route exact path='/' element={< Navbar />}></Route> */}
                  <Route exact path='/' element={< Home />}></Route>
                  <Route exact path='/solutions' element={< Soultions />}></Route>
                  <Route exact path='/Mobile' element={< Mobile />}></Route>
                  <Route exact path='/User' element={< UserGrowth />}></Route>
                  <Route exact path='/Revenuces' element={< Revenuces />}></Route>
                  <Route exact path='/Manged' element={< Manged />}></Route>
                  <Route exact path='/Blog' element={< Blog />}></Route>
                  <Route exact path='/Adx' element={< Adx />}></Route>
                  <Route exact path='/AppG' element={< AppG />}></Route>
                  <Route exact path='/Gudies' element={< Gudies />}></Route>

           </Routes>
       </Router>
     
    </div>
  );
}

export default App;
