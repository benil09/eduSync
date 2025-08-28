
import { Routes ,Route } from 'react-router-dom'
import SignupPage from './Pages/SignupPage.jsx';
import Home from './Pages/Home.jsx';
import LoginPage from './Pages/LoginPage.jsx';
import Navbar from './Components/Navbar.jsx';
import SignupPage2 from './Pages/SignupPage2.jsx';
import { useEffect, useState } from 'react';
import Footer from './Components/Footer.jsx';

function App() {

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
    document.documentElement.classList.remove("theme-light", "theme-dark");
    document.documentElement.classList.add(`theme-${theme}`);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
     <>
     <Navbar/>
      <Routes>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/signup2' element={<SignupPage2/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
     </>
  );
}

export default App;
