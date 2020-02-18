/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';

const BREAKPOINTS = {
  MOBILE: { value: 0, device: 'mobile' },
  TABLET: { value: 576, device: 'tablet' },
  DESKTOP: { value: 768, device: 'desktop' }
};

const connectWithViewport = () => (WrappedComponent) => (
  class extends Component {
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
      const { viewport } = this.state;

      return (
        <WrappedComponent
          viewport={viewport}
          {...this.props}
        />
      );
    }
  }
);

export default connectWithViewport;
