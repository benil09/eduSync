
import { Routes ,Route } from 'react-router-dom'
import SignupPage from './Pages/SignupPage.jsx';
import Home from './Pages/Home.jsx';

function App() {

  return (
     <>
      <Routes>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
     </>
  );
}

export default App;
