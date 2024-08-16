export const NavBar = () => {
  return (
<nav className="navBar">
<button className="menu-toggle" aria-label="Abrir menú">
                <span className="menu-icon"></span>
            </button>
    <img src="chicks-logo-large.svg" alt="chicks-logo" className="img-logo" />
            <section className="nav-links">
              <div>
              <a href="#currency">currency</a>
              </div>

              <div>
              <a href="#items">items</a>
              </div>
              <div>
              <a href="#accounts">accounts</a>

              </div>
              <div>
              <a href="#services">services</a>

              </div>
              <div>
              <a href="#swap">services</a>

              </div>
              <div>
              <a href="#sell">sell</a>

              </div>
              <div>
              <a href="#usd">usd</a>

              </div>

            </section>
</nav>  
)}