import Link from 'next/link'

const LinkLI = (props) => (
  <li>
    <Link href={props.url}>
      <a>{props.title}</a>
    </Link>
    <style jsx>{`
      li {
        margin-left: 1.5em;
        float: right;
        text-transform: uppercase;
        font-weight: 900;
      }
      li a{
        color:#E4E6E5;
        text-decoration:none;
        transition: 0.3s;
        opacity:1;
      }
      li a:hover {
        opacity:.5 !important;
      }
      `}</style>
  </li>
)

export default LinkLI
