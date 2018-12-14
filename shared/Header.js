import Link from 'next/link'
import Navigation from './navigation'

const Header = (props) => (
  <div className="header">
    <div className="mobile-center">
      <link href="https://fonts.googleapis.com/css?family=Montserrat:700,700i|Sarala:400,700" rel="stylesheet" />
      <div className="logoContainer">
        <Link href="/">
          <img src="./static/logo.jpg" />
        </Link>
      </div>
      <Navigation />
    </div>
    <style jsx global>{`
      a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}
      body {
        color:#292727;
        background:#E4E6E5;
      }
      h1, h2, h3, h4, h5, h6 {
        font-family: 'Montserrat', sans-serif;

      }
      h1 {
        font-size:2.5em;
      }
      h2 {
        font-size:2em;
      }
      h3 {
        font-size:1.25em;
      }
      p, soan, div {
        font-family: 'Sarala', sans-serif;
      }
      .header {
        background:#2E3742;
        padding:1em 0;
        box-shadow:0px -5px 19px 8px #00000061;
      }
      .mobile-center {
        width:80%;
        max-width:1500px;
        margin:0 auto;
        display:flex;
        justify-content:space-between;
      }
      .logoContainer {
        width:40%;
      }
      .logoContainer img {
        max-width:100%;
      }
      .logoContainer img:hover {
        cursor: pointer;
      }
      .navigationMenu {
        display:flex;
        justify-content:space-between;
        align-items:flex-end;
        list-style:none;
        margin:0;
      }
      .navigationMenu li {
        margin-left:1.5em;
      }
      .navigationMenu li a{
        color:#E4E6E5;
        text-decoration:none;
      }
    `}</style>
  </div>
)

export default Header
