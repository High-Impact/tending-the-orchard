import React from 'react'

export default class extends React.Component {
  static async getInitialProps(props) {
    const userAgent = {props.page};
    return { userAgent }
  }

  render() {
    return (
      <div>
        Hello World {this.props.userAgent}
      </div>
    )
  }
}
