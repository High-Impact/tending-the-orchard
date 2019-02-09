import AboutSideBar from '../components/AboutSideBar'


import React from 'react'

export default class extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        showSideBar: props.showSideBar
      }
  }

  render() {
    const showSideBar = this.state.showSideBar;
    let button;

    if (showSideBar) {
      button = <AboutSideBar />;
    } else {
      button = null;
    }

    return (
      <div>
        {button}
      </div>
    );

  }
}
