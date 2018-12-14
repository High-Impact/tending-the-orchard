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
        padding-right:45px;
      }
      .sideBar {
        background:#292727;
        padding-top:45px;
      }
      `}</style>
  </div>
)

export default Layout
