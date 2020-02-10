/* eslint-disable no-undef */
import React, { Component } from 'react';

const ViewportContext = React.createContext('desktop');

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
    window.addEventListener('resize', this.viewportUpdate);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.viewportUpdate);
  }

  detectDesktopRequest() {
    const ua = window.navigator.userAgent;
    const iOSAgent = ua.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/);
    const iOSPlatform = window.navigator.platform && window.navigator.platform.match(/iPhone|iPod|iPad|iPhone Simulator/);
    const isDesktopRequested = !iOSAgent && !!iOSPlatform;

    return isDesktopRequested;
  }

  viewportUpdate() {
    const windowWidth = window.innerWidth;
    let viewport = BREAKPOINTS.MOBILE;

    if (windowWidth > BREAKPOINTS.DESKTOP.value) {
      viewport = BREAKPOINTS.DESKTOP;
    } else if (windowWidth > BREAKPOINTS.TABLET.value) {
      viewport = BREAKPOINTS.TABLET;
    } else if (this.detectDesktopRequest()) {
      viewport = BREAKPOINTS.DESKTOP;
    }

    this.setState({ viewport });
  }

  render() {
    const { children } = this.props;
    const { viewport } = this.state;

    return (
      <ViewportContext.Provider value={viewport.name}>
        { children }
      </ViewportContext.Provider>
    );
  }
}

export default ViewportProvider;
