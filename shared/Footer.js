import Link from 'next/link'
import Navigation from './navigation'

const Footer = (props) => (
  <div className="mainFooterContainer">
    <div className="footerNav">
      <Navigation />
    </div>
    <style jsx>{`
        .mainFooterContainer {
          background:#7D504A;
        }
      `}</style>
  </div>
)

export default Footer
