import LinkLI from './LinkLI'

const Navigation = () => (
  <nav className="navigationMenu">
      <LinkLI url="/" title="Home" />
      <LinkLI url="church-history" title="Church History" />
      <LinkLI url="why-now" title="Why Now?" />
      <LinkLI url="why-the-campaign" title="Why The Campaign" />
      <LinkLI url="FAQ" title="F.A.Q." />
      <LinkLI url="get-involved" title="Get Involved" />
      <style jsx>{`
        .navigationMenu {
          display:flex;
          justify-content:space-between;
          align-items:flex-end;
          list-style:none;
          margin:0;
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
