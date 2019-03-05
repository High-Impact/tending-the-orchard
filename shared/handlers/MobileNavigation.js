import LinkLI from './LinkLI'

const MobileNavigation = () => (
  <div className="mobileNavigationContainer">
    <div className="mobileNavigationToggler">
      <img width="60px"src="../static/Hamburger_icon.png" />
    </div>
    <div className="mobileNav" showing="true">
      <div className="slideOutBackground">
        <p>X</p>
      </div>
      <nav className="mobileNvigationMenu">
        <LinkLI url="/about" title="About" />
        <LinkLI url="/get-involved" title="Get Involved" />
        <LinkLI url="/faq" title="F.A.Q." />
        <LinkLI url="https://highimpact.design" title="Donate" />
      </nav>
    </div>
        <style jsx>{`
            .mobileNvigationMenu {
                display: flex;
                flex-direction: column;
                position: fixed;
                z-index: 9999999;
                background: #00432d;
                opacity: 1;
                width: 75%;
                height: 100%;
                list-style:none;
                padding-top:4em;
                box-shadow:-24px -28px 185px -16px #0000009e;
                right: -200%;
                transition: 250ms; 
            }
            .mobileNvigationMenu.showing {
              top: 0;
              right: 0;
              
            }
            .slideOutBackground {
              display:none;
            }
            .slideOutBackground.visable {
              display:block;
            }
            .mobileNavigationContainer {
              display:flex;
              align-items:center;
            }
            `}</style>
  </div>
)

export default MobileNavigation
