import LinkLI from './LinkLI'
const alertBot = (props) => {
  document.querySelector('.MobileNavigationMenu').hide(300);
}

const MobileNavigation = () => (
  <div className="totalMobile"onClick={alertBot}>
    <div id="mobileTrigger" >
      <div className="line line0"></div>
      <div className="line line1"></div>
      <div className="line line2"></div>
    </div>
    <nav className="MobileNavigationMenu">
      <LinkLI url="/" title="Home" />
      <LinkLI url="church-history" title="Church History" />
      <LinkLI url="FAQ" title="F.A.Q." />
      <LinkLI url="get-involved" title="Get Involved" />
      <LinkLI url="why-now" title="Why Now?" />
      <LinkLI url="why-the-campaign" title="Why The Campaign" />
    </nav>
    <style jsx>{`
      .line {
        height:.5em;
        width:1.5em;
        border-bottom:2px solid white;
      }
      .MobileNavigationMenu {
        list-style:none;
        margin:0;
        position:fixed;
        right:-00%;
        top:0;
        background:red;
        height:100vh;
        width:75%;
        display:flex;
        flex-direction:column;
      }
      `}</style>
  </div>
)

export default MobileNavigation
