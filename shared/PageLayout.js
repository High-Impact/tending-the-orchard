import Header from './Header'
import Footer from './Footer'
import SideBar from './SideBar'

const Layout = (props) => (
  <div className="mainContainer">
    <Header />
      <div className="body">
        <div className="actualContent">
          {props.children}
        </div>
        <div className="sideBar">
          <SideBar page={props.page} />
          <h1>Page Name: {props.page}</h1>
          <span className="cheating"></span>
        </div>
      </div>
    <Footer />
    <style jsx>{`
      .body {
        display:flex;
        justify-content:space-between;
        width:100%;
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
      h3 {
        animation: pulse 5s infinite;
        padding:1em;
        color:white;
      }

      @keyframes pulse {
        0% {
          background-color: #001F3F;
        }
        50% {
          transform:scale(1.5);
        }
        100% {
          background-color: #FF4136;
        }
      }

      `}</style>
  </div>
)

export default Layout
