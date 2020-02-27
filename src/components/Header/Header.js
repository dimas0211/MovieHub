import React, { Component } from 'react';
import autoBind from 'auto-bind';
import Navigation from '../Navigation';
import NavigationMob from '../Navigation/NavigationMobile';
import config from '../../config';
import { DESKTOP } from '../../constants/configurations';

const { navConfig } = config;

class Header extends Component {
  constructor(props) {
    super(props);

    autoBind(this);
  }

  handleSearch(query) {
    const { setSearchMode, setSearchQuery, history } = this.props;

    setSearchMode && setSearchMode();
    setSearchQuery && setSearchQuery(query);

    history.push('/search');
  }

  render() {
    const { viewport: { device } } = this.props;
    const isDesktop = device === DESKTOP;

    return (
      <div>
        {isDesktop
          ? <Navigation options={navConfig} handleSearch={this.handleSearch} />
          : <NavigationMob options={navConfig} handleSearch={this.handleSearch} viewport={device} />}
      </div>
    );
  }
}

export default Header;
