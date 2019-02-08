import Header from '../shared/Header'
import Footer from '../shared/Footer'
import Link from 'next/link'

const Index = () => (
  <div className="mainContainer">
    <Header />
    <div className="hero">
      <div className="header-shadow"></div>
      <h1 className="hero-header">Tending The Orchard</h1>
    </div>
    <div className="container">
      <div className="row">
        <div className="coulmn-full text-center">
          <h2>Hello</h2>
          <p>Dummy Text</p>
        </div>
      </div>
      <div className="row">
        <div className="coulmn-half text-center">
          <h2>$50,000</h2>
        </div>
        <div className="coulmn-half text-center">
          <h2>$100,000</h2>
        </div>
      </div>
      <div className="row">
        <div className="coulmn-full ">
          <h2>Hello</h2>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
          <p>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
          <Link href='get-involved'>
            <a>Learn More.</a>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="coulmn-fourth">
          <img src="./static/hero-img.jpg" />
          <h3>Fourths</h3>
        </div>
        <div className="coulmn-fourth">
          <img src="./static/hero-img.jpg" />
          <h3>Fourths</h3>
        </div>
        <div className="coulmn-fourth">
          <img src="./static/hero-img.jpg" />
          <h3>Fourths</h3>
        </div>
        <div className="coulmn-fourth last">
          <img src="./static/hero-img.jpg" />
          <h3>Fourths</h3>
        </div>
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
        padding:2em 10em;
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
    `}</style>
  </div>
)

export default Index
