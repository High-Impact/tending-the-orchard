import Link from 'next/link'
import Navigation from '../handlers/Navigation'

const Footer = (props) => (
  <div className="mainFooterContainer">
    <div className="footerNav">
      <Navigation />
      <hr />
      <p>CC 2019 The Orcahrd Church McHenry, IL</p>
      <Link herf="http://highimpact.design">
        <a>Website By High Impact Designs, LLC</a>
      </Link>
      <script
  src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
      <script src="../static/js/currentLink.js"></script>
      <link href="../static/css/mobileMenu.css"></link>
      <script src="../static/js/mobileMenu.js"></script>
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
          max-width:45em;
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
        hr {
          margin:2em 0;
          opacity:.5;
        }
      `}</style>
  </div>
)

export default Footer
