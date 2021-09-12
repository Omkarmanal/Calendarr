import './App.css';
import React,{useState} from "react";
import LoginButton from './components/LoginButton';
// import LogOutButton from './components/LogOutButton';
import Profile from './components/Profile';
import {useAuth0} from "@auth0/auth0-react"
import LoginPage from './components/LoginPage';
import Navbar from './components/Navbar';
import Sidemenu from './components/Sidemenu';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const {isLoading} = {useAuth0};

if(isLoading) return <div>Loading...</div>

  return (
    <>
 
      <LoginButton/>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Sidemenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Profile/>
      {/* <LogOutButton/> */}
      
      </>
  );
}

export default App;
