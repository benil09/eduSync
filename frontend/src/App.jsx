
import { Routes ,Route } from 'react-router-dom'
import SignupPage from './Pages/SignupPage.jsx';

function App() {

  return (
     <>
      <Routes>
        <Route path='/signup' element={<SignupPage/>}/>
      </Routes>
     </>
  );
}

export default App;
