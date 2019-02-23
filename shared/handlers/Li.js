import Link from 'next/link'

const Li = (props) => (
  <li>
    <Link href={props.url}>
      <a>{props.title}</a>
    </Link>
    <style jsx>{`
      li a {
          text-decoration: none;
          color:#350900;
      }
      li {
          margin-bottom: .5em;
          border-bottom: 1px solid #35090036;
          padding: 0 0 .5em .5em;
          width: 11em;
      }
      `}</style>
  </li>
)

export default Li
