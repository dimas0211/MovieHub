import React, { Component } from 'react';

const BREAKPOINTS = {
  MOBILE: { value: 0, name: 'mobile' },
  TABLET: { value: 576, name: 'tablet' },
  DESKTOP: { value: 768, name: 'desktop' }
};

class ViewportProvider extends Component {
  constructor() {
    super();

    this.state = {
      viewport: BREAKPOINTS.DESKTOP
    };

    this.viewportUpdate = this.viewportUpdate.bind(this);
  }

  componentDidMount() {
    this.viewportUpdate();
    window.addEventListener('resize', this.viewportUpdate)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.viewportUpdate)
  }

  render() {
    return (
      <div />
    );
  }
}

export default ViewportProvider;
