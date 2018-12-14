import Link from 'next/link'

const LinkLI = (props) => (
  <li>
    <Link href={props.url}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Navigation = () => (
  <nav className="navigationMenu">
      <LinkLI url="/" title="Home" />
      <LinkLI url="church-history" title="Church History" />
      <LinkLI url="FAQ" title="F.A.Q." />
      <LinkLI url="get-involved" title="Get Involved" />
      <LinkLI url="why-now" title="Why Now?" />
      <LinkLI url="why-the-campaign" title="Why The Campaign" />
  </nav>
)

export default Navigation
