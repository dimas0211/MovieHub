import { connect } from '../../redux';

import DefaultLayout from './DefaultLayout';

const mapStateToProps = () => ({
});

const mapDispatchToProps = () => ({
});

export const DefaultLayoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  ['config']
)(DefaultLayout);
