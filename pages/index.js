import Header from '../shared/components/Header'
import Footer from '../shared/components/Footer'
import Link from 'next/link'

const Index = () => (
  <div className="mainContainer">
    <Header />
    <div className="hero">
      <div className="header-shadow"></div>
    </div>
    <div className="container">
      <div className="row callOutR">
        <div className="coulmn-full text-center">
          <h1 className="callOut">Tending the Orchard</h1>
          <h2 className="callOut2">At the Orchard, we believe God has called us as a church to grow alongside one another into Fully Functioning Followers of Jesus; Rooted in Hope and Branching Out to the World.</h2>
          <Link href="/about">
            <a className="callOutBtn">Learn More</a>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="coulmn-half text-center leftHalf">
          <img src="./static/triangle.png" className="triangle" />
          <h3 className="money">$50,000</h3>
          <p className="moneyP">Funds Raised</p>
        </div>
        <div className="coulmn-half text-center">
          <img src="./static/triangle.png" className="triangle" />
          <h3 className="money dark">$100,000</h3>
          <p className="moneyP">Debt Remaining</p>
        </div>
      </div>
      <div className="row">
        <div className="coulmn-full text-center">
          <h2 className="callOut overview" >Campaign Overview</h2>
          <p className="information callOut2">As the elders pray about where God is leading, we are continually directed to strengthening the body and reaching others with the Good News of Jesus Christ. Our vision is still the same: Making Fully Functioning Followers of Jesus; Rooted in Hope and Branching Out to the World.</p>
          <Link href='/about/campaign-overview'>
            <a className="callOutBtn overview">Learn More</a>
          </Link>
        </div>
      </div>
      <div className="row rule">
        <hr />
      </div>
      <div className="row text-center fourths">
      <Link href="/about/who-we-are">
        <div className="coulmn-fourth">
          <img src="./static/hero-img.jpg" />
          <h3>Who We Are</h3>
        </div>
        </Link>
        <Link href="/about/core-values">
        <div className="coulmn-fourth">
          <img src="./static/hero-img.jpg" />
          <h3>Core Values</h3>
        </div>
        </Link>
        <Link href="/about/church-history">
        <div className="coulmn-fourth">
          <img src="./static/hero-img.jpg" />
          <h3>Church History</h3>
        </div>
        </Link>
        <Link href="/about/testimonies">
        <div className="coulmn-fourth last">
          <img src="./static/hero-img.jpg" />
          <h3>Testimonies</h3>
        </div>
        </Link>
      </div>
    </div>
    <Footer />
    <style jsx>{`
      .hero {
        position:relative;
        overflow:hidden;
        min-height:60vh;
        max-height:60vh;
        background:url("./static/hero-img.jpg");
        background-size:cover;
      }
      .header-shadow {
        position:absolute;
        height:100%;
        width:100%;
        background:#000000bf;
      }
      .hero-header {
        position: absolute;
        left: 10rem;
        bottom: 5rem;
        color: white;
      }
      .text-center {
        text-align:center;
      }
      .rule hr {
        width: 100%;
        border-color: #ffffff61;
      }
      .row {
        padding:4em 10em;
        display:flex;
      }
      .coulmn-full {
        width:100%;
      }
      .coulmn-half {
        width:50%;
      }
      .coulmn-fourth {
        width:23.5%;
        margin-right:2%;
      }
      .last {
        margin-right:0;
      }
      .callOutR {
        background:#350900;
        padding: 4em 2em;
        color:white;
      }
      .callOut {
        margin:0;
        font-family: 'Dancing Script', cursive;
        margin-bottom:.5em;
      }
      .callOut2 {
        max-width:45em;
        margin:auto;
        font-weight:unset;
        font-size:1.25em;
        line-height:1.3;
        margin-bottom:1.5em;
      }
      .callOutBtn {
        border:1px solid white;
        padding:.25em .5em;
        color:white;
        text-decoration:none;
        transition:500ms;
      }
      .callOutBtn:hover {
        opacity:.5;
      }
      .information {
        max-width:45em;
        margin:auto;
        margin-bottom:1.5em;
      }
      .overview {
        color:#292727;
        border-color:#292727;
      }
      .callOut.overview {
        font-size:2.5rem;
      }
      .triangle {
        opacity:.9;
        filter: grayscale(80%);
        min-width: unset;
      }
      .leftHalf {
        border-right: 1px solid #00000026;
      }
      .money {
        font-weight:900;
        font-size:3em;
        margin:4rem 0em;
        color:#00432d;
      }
      .money.dark {
        color:#350900;
      }
      .moneyP {
        font-style:italic;
      }
      .fourths h3 {
        font-weight:700;
        margin-top:.5em;
        font-size:2em;
      }
      .fourths div {
        cursor: pointer;
        transition:500ms;
      }
      .fourths div:hover {
        opacity:.5;
        transform:scale(.9);
      }
    `}</style>
  </div>
)

export default Index
