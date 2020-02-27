import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import autoBind from 'auto-bind';
import {
  InputBase,
  ListItem,
  ListItemText,
  Divider,
  Button,
  Drawer,
  List
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/icon-movie.png';
import { MOBILE } from '../../../constants/configurations';

import '../Navigation.scss';

// const CN = 'mobile-navigation';
const CN = 'navigation-bar';

class NavigationMob extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leftPopUp: false,
      query: ''
    };

    autoBind(this);
  }

  toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    this.setState({ leftPopUp: open });
  };

  handleSearchInput(event) {
    this.setState({ query: event.target.value });
  }

  handleSearchSubmit() {
    const { query } = this.state;
    const { handleSearch } = this.props;

    handleSearch && handleSearch(query);
  }

  isButtonDisabled() {
    const { query } = this.state;

    return !query;
  }

  sideList(isMobile) {
    const { options } = this.props;

    return (
      <div
        className={`${CN}__side-container`}
        role="presentation"
      >
        <List bgcolor="text.disabled" className={`${CN}__side-bar`}>
          {isMobile && this.renderSearch()}
          <Divider />
          {options.map((menuItem) => (
            <ListItem
              button
              className={`${CN}__nav-item`}
              component={Link}
              key={menuItem.value}
              to={menuItem.link}
              onClick={this.toggleDrawer(false)}
              onKeyDown={this.toggleDrawer(false)}
            >
              <ListItemText primary={menuItem.label} />
            </ListItem>
          ))}
          <Divider />
        </List>
      </div>
    );
  }

  renderSearch() {
    const { query } = this.state;

    return (
      <div className={`${CN}__search-container`}>
        <SearchIcon className={`${CN}__search-icon`} />
        <InputBase
          className={`${CN}__search-field`}
          color="secondary"
          placeholder="Search…"
          value={query}
          onChange={this.handleSearchInput}
        />
        <Button disabled={this.isButtonDisabled()} onClick={this.handleSearchSubmit}>
          Submit
        </Button>
      </div>
    );
  }

  render() {
    const { leftPopUp } = this.state;
    const { viewport } = this.props;

    const isMobile = viewport === MOBILE;

    return (
      <div className={`${CN}__mobile`}>
        <div className={`${CN}__mobile-wrapper`}>
          <Button className={`${CN}__burger-icon`} onClick={this.toggleDrawer(true)}><MenuIcon /></Button>
          <div className={`${CN}__logo-container`}>
            <Link className={`${CN}__logo-container`} to="/main">
              <img alt="logo" className={`${CN}__logo-img`} src={Logo} />
              <h3 className={`${CN}__logo-name`}>Movie Hub</h3>
            </Link>
          </div>
          {!isMobile && this.renderSearch()}
          <Drawer open={leftPopUp} onClose={this.toggleDrawer(false)}>
            {this.sideList(isMobile)}
          </Drawer>
        </div>
      </div>
    );
  }
}

export default NavigationMob;

