import { connect as reduxConnect } from 'react-redux';
import { connectWithViewport } from '../services/connectWithViewport';

export function connect(mapStateToProps = null, mapDispatchToProps = null) {
  return (Component) => (
    connectWithViewport(
      reduxConnect(mapStateToProps, mapDispatchToProps)(Component)
    )
  );
}
