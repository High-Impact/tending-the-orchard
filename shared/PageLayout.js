import Header from './Header'
import Footer from './Footer'

const Layout = (props) => (
  <div className="mainContainer">
    <Header />
      <div className="body">
        {props.children}
      </div>
    <Footer />
    <style jsx>{`
      `}</style>
  </div>
)

export default Layout
