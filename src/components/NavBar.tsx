import { useState } from 'react';
import { NavRefs } from "./NavComponents/NavRefs"
import { Button } from './NavComponents/Button';

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  

  return (
    <nav className={`navBar ${isMenuOpen ? 'menu-active' : ''}`}>
      <button className="menu-toggle" aria-label="Abrir menú" onClick={()=>setIsMenuOpen(!isMenuOpen)}>
        <span className="menu-icon"></span>
      </button>
      <img src="chicks-logo-large.svg" alt="chicks-logo" className="img-logo" />
      <section className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
        <NavRefs value="currency"/>
        <NavRefs value="items"/>
        <NavRefs value="accounts"/>
        <NavRefs value="services"/>
        <NavRefs value="swap"/>
        <NavRefs value="sell"/>
        <div className={`nav-links-div ${isMenuOpen ? 'show' : ''}`}>
        <NavRefs value="USD"/>
        <Button/>
        </div>
      </section>
      <section className={` nav-right-links ${isMenuOpen ? 'show' : ''}`}>
        <NavRefs value="USD "/>
        <Button/>
      </section>
    </nav>  
  )
}