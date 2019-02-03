import Link from 'next/link'
import Navigation from './navigation'
import MobileNavigation from './MobileNavigation'

const Header = (props) => (
  <div className="header">
    <div className="mobile-center">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,300i,700|Raleway:500,500i" rel="stylesheet" />
      <div className="logoContainer">
        <Link href="/">
          <img src="./static/logo.jpg" />
        </Link>
      </div>
      <Navigation />
      <MobileNavigation />
    </div>
    <style jsx global>{`
      a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}
      body {
        color:#292727;
        background:;
      }
      h1, h2, h3, h4, h5, h6 {
        font-family: 'Montserrat', sans-serif;

      }
      h1 {
        font-size:2.5em;
        margin-bottom:1em;
        font-weight:700;
      }
      h2 {
        font-size:1.5em;
        font-weight:300;
        margin-bottom:1em;
      }
      h3 {
        font-size:1.25em;
      }
      p, soan, div {
        font-family: 'Raleway', sans-serif;
      }
      p {
        line-height:1.2;
        margin-bottom:1em;
      }
      em {
        font-style:italic;
      }
      strong {
        font-weight:900;
      }
      .header {
        background:#2E3742;
        box-shadow:0px -5px 19px 8px #00000061;
        padding:2em 10em;
      }
      .mobile-center {
        display:flex;
        justify-content:space-between;
      }
      .logoContainer {
        width:25%;
      }
      .logoContainer img {
        max-width:100%;
      }
      .logoContainer img:hover {
        cursor: pointer;
      }
      .halfAndHalfFourth {
        display: flex;
        flex-wrap: wrap;
      }
      .half {
          width: 45%;
          display: flex;
          justify-content: space-between;
          background: white;
          padding: 1rem;
          border-bottom: 1px solid #00000005;
          box-shadow:0px 0px 8px 0px #00000005;
      }
      .altRow {
        background:#efefef;
      }
      .lastRow {
        border-bottom:0px;
        margin-bottom:1rem;
      }
    `}</style>
  </div>
)

export default Header
