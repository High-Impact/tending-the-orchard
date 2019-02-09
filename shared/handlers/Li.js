import Link from 'next/link'

const Li = (props) => (
  <li>
    <Link href={props.url}>
      <a>{props.title}</a>
    </Link>
    <style jsx>{`
      `}</style>
  </li>
)

export default Li
