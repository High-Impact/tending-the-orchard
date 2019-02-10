import Link from 'next/link'
import Navigation from '../handlers/Navigation'

const Footer = (props) => (
  <div className="mainFooterContainer">
    <div className="footerNav">
      <Navigation />
      <p>CC 2019 The Orcahrd Church McHenry, IL</p>
      <Link herf="https://highimpact.design">
        <a>Website By High Impact Designs, LLC</a>
      </Link>
    </div>
    <style jsx>{`
        .mainFooterContainer {
          background:#350900;
          padding:2em 0;
          position:absolute:
          bottom:0;
          width:100%;
        }
        .footerNav {
          margin:auto;
          padding:0em 10em;
          max-width:25em;
          text-align:center;
        }
        .mainFooterContainer a {
          color:white;
          text-decoration:none;
          transition: 0.3s;
          text-align:center;
          margin:auto;
          opacity:1;
          font-size:.8em;
        }
        .mainFooterContainer a:hover {
          opacity:.5;
        }
        .mainFooterContainer p {
          text-align:center;
          color:white;
          margin-bottom:.25em;
          margin-top:2em;
        }
      `}</style>
  </div>
)

export default Footer
