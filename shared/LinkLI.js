import Link from 'next/link'

const LinkLI = (props) => (
  <li>
    <Link href={props.url}>
      <a>{props.title}</a>
    </Link>
    <style jsx>{`
      li {
        margin-left:1.5em;
      }
      li a{
        color:#E4E6E5;
        text-decoration:none;
      }
      `}</style>
  </li>
)

export default LinkLI
