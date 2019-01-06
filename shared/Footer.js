import Link from 'next/link'
import Navigation from './Navigation'

const Footer = (props) => (
  <div className="mainFooterContainer">
    <div className="footerNav">
      <Navigation />
    </div>
    <style jsx>{`
        .mainFooterContainer {
          background:#7D504A;
          padding:2em 0;
          position:absolute:
          bottom:0;
          width:100%;
        }
        .footerNav {
          width:50em;
          margin:auto;
          padding:0em 10em;
        }
        .mainFooterContainer a {
          color:#E4E6E5;
          text-decoration:none;
          transition: 0.3s;
          opacity:1;
        }
        .mainFooterContainer a:hover {
          opacity:.5;
        }
        .mainFooterContainer p {
          text-align:center;
          padding:1em 10em;
          color:#E4E6E5;
        }
      `}</style>
  </div>
)

export default Footer
