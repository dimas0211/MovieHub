import React, { Component } from 'react';

import Navigation from '../Navigation';
import NavigationMob from '../Navigation/NavigationMobile';
import config from '../../config';
import { DESKTOP } from '../../constants/configurations';

const { navConfig } = config;

class Header extends Component {
  render() {
    const { viewport } = this.props;
    const isDesktop = viewport === DESKTOP;

    return (
      <div>
        {isDesktop
          ? <Navigation options={navConfig} />
          : <NavigationMob options={navConfig} viewport={viewport} />}
      </div>
    );
  }
}

export default Header;
