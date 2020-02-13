import React, { Component } from 'react';
import { Tabs, Tab, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import autoBind from 'auto-bind';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/icon-movie.png';

import './Navigation.scss';

const CN = 'navigation-bar';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 0
    };

    autoBind(this);
  }

  handleChange(event, tabIndex) {
    this.setState({ selectedTab: tabIndex });
  }

  render() {
    const { selectedTab } = this.state;
    const { options } = this.props;

    return (
      <div className={CN}>
        <div className={`${CN}__nav-wrapper`}>
          <Link className={`${CN}__logo-container`} to="/main">
            <img src={Logo} alt="logo" className={`${CN}__logo-img`} />
            <h3 className={`${CN}__logo-name`}>Movie Hub</h3>
          </Link>
          <Tabs
            centered
            className={`${CN}__tabs-container`}
            indicatorColor="secondary"
            textColor="secondary"
            value={selectedTab}
            onChange={this.handleChange}
          >
            {options.map((menuItem) => (
              <Tab
                className={`${CN}__tab`}
                component={Link}
                key={menuItem.value}
                label={menuItem.label}
                to={menuItem.link}
              />
            ))}
          </Tabs>
          <div className={`${CN}__search-container`}>
            <SearchIcon className={`${CN}__search-icon`} />
            <InputBase
              className={`${CN}__search-field`}
              placeholder="Search…"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
