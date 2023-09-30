import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
// import Home from './pages/home/home';
import LoginPage from './pages/home/loginpage/loginpage';
import Msfreezbe from './pages/ms-freezbe/ms-freezbe';

function App() {
  return (
    <div className="App">
      <Msfreezbe/>
      
      {/* <Routes> */}

{/* <Route path="/home" element={<Home />} /></Routes> */}

    </div>
  );
}

export default App;
