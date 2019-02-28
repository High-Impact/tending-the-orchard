import AboutSideBar from '../components/AboutSideBar'
import NormalSideBar from '../components/NormalSideBar'


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
    let sideBar;

    if (showSideBar) {
      sideBar = <AboutSideBar />;
    } else {
      sideBar = <NormalSideBar />;
    }

    return (
      <div>
        {sideBar}
      </div>
    );

  }
}
