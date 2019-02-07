import Link from 'next/link'

const LinkLI = (props) => (
  var isLoggedIn = props.pageName;
  if (isLoggedIn == 'about') {
    return 'string';
  }
  return 'not string';
)

export default LinkLI
