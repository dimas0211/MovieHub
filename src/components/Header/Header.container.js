import { connect } from '../../redux';
import Header from './Header';

const mapStateToProps = () => ({
});

export const HeaderContainer = connect(
  mapStateToProps,
  null
)(Header);
