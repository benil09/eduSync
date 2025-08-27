
import { Routes ,Route } from 'react-router-dom'
import SignupPage from './Pages/SignupPage.jsx';
import Home from './Pages/Home.jsx';
import LoginPage from './Pages/LoginPage.jsx';
import Navbar from './Components/Navbar.jsx';
import SignupPage2 from './Pages/SignupPage2.jsx';

function App() {

  return (
     <>
     <Navbar/>
      <Routes>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/signup2' element={<SignupPage2/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
     </>
  );
}

export default App;
