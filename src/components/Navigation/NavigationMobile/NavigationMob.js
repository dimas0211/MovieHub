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
  List, withStyles
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/icon-movie.png';
import { MOBILE } from '../../../constants/configurations';

import '../Navigation.scss';

const CN = 'navigation-bar';

const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    padding: '0 10px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    '& > span': {
      color: 'white'
    }
  }

})(Button);

class NavigationMob extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leftPopUp: false,
      query: '',
      location: props.location
    };

    autoBind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { pathname } = prevState.location;

    if (pathname !== nextProps.location.pathname) {
      return {
        query: '',
        location: nextProps.location.pathname
      };
    }

    return null;
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
        <StyledButton disabled={this.isButtonDisabled()} onClick={this.handleSearchSubmit}>
          Find
        </StyledButton>
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
            <Link className={`${CN}__logo-container`} to="/">
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

