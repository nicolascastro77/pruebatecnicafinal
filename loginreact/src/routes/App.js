
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from '../pages/Login';
import Coordinador from '../pages/Coordinador';
import Admin from '../pages/Admin';
import Lista from '../pages/Lista';

function App() {
  return (
<BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route exact path='/coordinador' element={<Coordinador/>}/>
      <Route exact path='/admin' element={<Admin/>}/>
      <Route exact path='/lista' element={<Lista/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
