import LinkLI from './LinkLI'

const MobileNavigation = () => (
  <div className="mobileNavigationContainer">
    <div className="mobileNavigationToggler">
      <img width="30px"src="../static/Hamburger_icon.png" style={{display: 'none'}} className="hamburger" />
    </div>
    <div className="mobileNav" showing="true">
      <div className="slideOutBackground">
        <p>close</p>
      </div>
      <nav className="mobileNvigationMenu">
        <LinkLI url="/about" title="About" />
        <LinkLI url="/get-involved" title="Get Involved" />
        <LinkLI url="/faq" title="F.A.Q." />
        <LinkLI url="https://orchardmchenry.breezechms.com/give/online" title="Donate" />
      </nav>
    </div>
  </div>
)

export default MobileNavigation
