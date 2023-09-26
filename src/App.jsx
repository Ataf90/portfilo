import Topbar from "./coomponents/topbar/Topbar";
import Intro from "./coomponents/intro/Intro"
import Portfolio from "./coomponents/portfolio/Portfolio"
import Works from "./coomponents/works/Works"
import Testimonials from "./coomponents/testimonials/Testimonials" 
import Contact from "./coomponents/contact/Contact"
import "./app.scss"
import { useState } from "react";
import Menu from "./coomponents/menu/Menu";

function App() {
  const [menuOpen,setMenuOpen]  = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen = {setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen = {setMenuOpen}/>
      <div className="sections">
      <Intro/>
      <Portfolio/>
      <Works/>
      <Testimonials/>
      <Contact/>
      </div>
    </div>
  );
}

export default App;
