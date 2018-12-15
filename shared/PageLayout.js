import Header from './Header'
import Footer from './Footer'

const Layout = (props) => (
  <div className="mainContainer">
    <Header />
      <div className="body">
        <div className="actualContent">
          {props.children}
        </div>
        <div className="sideBar">
          <span className="cheating"></span>
          <h3>This is a sidebar</h3>
        </div>
      </div>
    <Footer />
    <style jsx>{`
      .body {
        display:flex;
        justify-content:space-between;
        width:100%;
        // height:100%;
        // min-height:100vh;
      }
      .actualContent {
        padding-right:10%;
        width:70%;
        padding:5em 5em 5em 10em;
      }
      .sideBar{
        position:relative;
        width: 30%;
        padding: 5em 10em 5em 5em;
        box-shadow:-2px 0px 2px 0px rgba(0, 0, 0, 0.025);
        z-index:-1;
      }
      .cheating {
          background:#E4E6E5;
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
      }
      `}</style>
  </div>
)

export default Layout
