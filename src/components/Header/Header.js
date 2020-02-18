import React, { Component } from 'react';
import Navigation from '../Navigation';
import NavigationMob from '../Navigation/NavigationMobile';
import config from '../../config';
import { DESKTOP } from '../../constants/configurations';

const { navConfig } = config;

class Header extends Component {
  render() {
    const { viewport: { device } } = this.props;
    const isDesktop = device === DESKTOP;

    return (
      <div>
        {isDesktop
          ? <Navigation options={navConfig} />
          : <NavigationMob options={navConfig} viewport={device} />}
      </div>
    );
  }
}

export default Header;
