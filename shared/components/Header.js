import Link from 'next/link'
import Navigation from '../handlers/Navigation'
import MobileNavigation from '../handlers/MobileNavigation'

const Header = (props) => (
  <div className="header">
  <meta content="width=device-width, initial-scale=1" name="viewport" />
    <link rel="stylesheet" href="../../static/css/mobileMenu.css" />
    <div className="mobile-center">
    <link href="https://fonts.googleapis.com/css?family=Dancing+Script:700|Open+Sans:400,600,700,800" rel="stylesheet" />
      <div className="logoContainer">
        <Link href="/">
          <img src="/static/fav_icon.png" />
        </Link>
      </div>
      <Navigation />
      <MobileNavigation />
    </div>
    <style jsx global>{`
      a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}
      body {
        color:#292727;
        background:;
      }
      h1, h2, h3, h4, h5, h6 {
        font-family: 'Open Sans', sans-serif;

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
        font-family: 'Open Sans', sans-serif;
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
      ul, ol {
        margin-bottom:1.5em !important;
        margin-left:10px;
      }
      img {
        min-width:100%;
        max-width:100%;
      }
      .header {
        background:white;
        box-shadow:0px -5px 19px 8px #0000001f;
        padding:1em 10em;
      }
      .mobile-center {
        display:flex;
        justify-content:space-between;
      }
      .logoContainer {
        width:25%;
      }
      .logoContainer img {
        width:4em;
        min-width:4em;
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
      .mobileNavigation {
        display:none;
      }
      .footerNav a {
        color:white !important
      }
      .about.mainContainer p img {
        float: right;
        max-width: 30%;
        min-width: 6em;
        padding-left: 1em;
        padding-bottom: 1em;
        clear: both;
      }
      .about strong {
        margin-top:2em;
      }
      .active {
        opacity:.5 !important;
        text-decoration:underline;
      }
    `}</style>
  </div>
)

export default Header
