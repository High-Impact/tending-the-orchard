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
        width:80%;
        max-width:1500px;
        margin:0px auto;
      }
      .actualContent {
        margin:45px 0;
        padding-right:10%;
        width:70%;
        padding-right:10%;
      }
      .sideBar{
        position:relative;
        width: 30%;
        padding: 45px 45px 0;
        box-shadow:-2px 0px 2px 0px rgba(0, 0, 0, 0.025);
        z-index:-1;
      }
      .cheating {
          background:#65959C;
          position: absolute;
          left: 0;
          top: 0;
          width: 100vw;
          height: 100%;
          z-index: -1;
      }
      `}</style>
  </div>
)

export default Layout
