import Li from './Li'

const Navigation = () => (
  <ul className="sideBarNavigation">
      <Li url="/about" title="About" />
      <Li url="/about/who-we-are" title="Who We Are" />
      <Li url="/about/core-values" title="Core Values" />
      <Li url="/about/church-history" title="Church History" />
      <Li url="/about/testimonies" title="Testimonies" />
      <Li url="/about/campaign-overview" title="Campaign Overview" />
      <style jsx>{`
        ul {
          list-style:none;
          margin:0;
        }
        `}</style>
  </ul>
)

export default Navigation
