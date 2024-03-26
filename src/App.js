
import './App.css';
import Navbar  from "./components/Header";
import { BrowserRouter as Router,Route,Routes,Swithch } from 'react-router-dom';
import home from './components/home';
import rooms from './components/rooms';
import about from './components/about';
import contact from './components/contact';
function App() {
  let page=""
  return (
   <>
 <Router>
   <Navbar/>
    <Routes>
  <Route path='/' Component={home}></Route>
  <Route path='/about' Component={about}></Route>
  <Route path='/room' Component={rooms}></Route>
  <Route path='/contact' Component={contact}></Route>
    </Routes>
    </Router>
   </>
  );
}

export default App;
