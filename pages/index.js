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
          <p className="information callOut2">In the Spring of 1994, a small group of Christ followers began to meet together for Bible study and worship, sensing God’s call to plant a new church.</p>
          <p className="information callOut2">Momentum grew and out of the faithfulness, obedience and sacrifice of this small group God blessed and grew them in number and maturity. By September, they began renting a space at 4041 Albany in McHenry, IL and officially incorporated as StoneRidge Community Church on December 21, 1994.</p>
          <Link href='/about/campaign-overview'>
            <a className="callOutBtn overview">Learn More</a>
          </Link>
        </div>
      </div>
      <div className="row">
      <Link href="/about/who-we-are">
        <div className="coulmn-fourth">
            <img src="./static/hero-img.jpg" />
            <h3>/about/who-we-are</h3>
        </div>
        </Link>
        <Link href="/about/core-values">
        <div className="coulmn-fourth">
            <img src="./static/hero-img.jpg" />
            <h3>/about/core-values</h3>
        </div>
        </Link>
        <Link href="/about/church-history">
        <div className="coulmn-fourth">
            <img src="./static/hero-img.jpg" />
            <h3>/about/church-history</h3>
        </div>
        </Link>
        <Link href="/about/testimonies">
        <div className="coulmn-fourth last">
            <img src="./static/hero-img.jpg" />
            <h3>/about/testimonies</h3>
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
        background:url("./static/hero-img.jpg")
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
        background:#350900f2;
        padding: 4em 2em;
        color:#f4f4f4bd;
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
        color:#f4f4f4bd;
        text-decoration:none;
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
      }
      .leftHalf {
        border-right:1px solid #350900;
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
    `}</style>
  </div>
)

export default Index
