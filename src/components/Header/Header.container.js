import { connect } from 'react-redux';
import { compose } from 'redux';
import Header from './Header';
import connectWithViewport from '../../services/connectWithViewport';

const mapStateToProps = () => ({
});

export const HeaderContainer = compose(
  connectWithViewport(),
  connect(
    mapStateToProps,
    null
  )
)(Header);
