import LinkLI from './LinkLI'

const Navigation = () => (
  <nav className="navigationMenu">
      <LinkLI url="about" title="About" />
      <LinkLI url="get-involved" title="Get Involved" />
      <LinkLI url="faq" title="F.A.Q." />
      <LinkLI url="https://highimpact.design" title="Donate" />
      <style jsx>{`
        .navigationMenu {
          display:flex;
          justify-content:space-between;
          align-items:flex-end;
          list-style:none;
          margin:0;
        }
        nav {
          margin-left:auto;
        }
        @media(max-width:797px) {
          .navigationMenu {
            display:none;
          }
        }
        `}</style>
  </nav>
)

export default Navigation
