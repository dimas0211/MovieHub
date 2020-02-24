/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import autoBind from 'auto-bind';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import VideoPlayer from '../VideoPlayer';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
};

TabPanel.propTypes = {
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`
  };
}

class VideoPlayerBar extends Component {
  StyledAppBar = withStyles({
    root: {
      flexGrow: 1,
      backgroundColor: '#282D2D'
    }
  })(AppBar);

  StyledTabPanel = withStyles({
    root: {
      flexGrow: 1,
      backgroundColor: '#282D2D'
    }
  })(TabPanel);

  constructor(props) {
    super(props);

    this.state = {
      value: 0
    };

    autoBind(this);
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  returnTabs() {
    const { videos } = this.props;

    return videos.getVideos().map((video, index) => (
      <Tab
        key={video.id}
        value={index}
        label={video.name}
        wrapped
        {...a11yProps(index)}
      />
    ));
  }

  returnTabPanel(value) {
    const { videos, CN, isMobile } = this.props;

    return videos.getVideos().map((video, index) => (
      <this.StyledTabPanel value={value} index={index} key={video.name}>
        <p className={`${CN}__info-item-container`}>
          <span className={`${CN}__info-item-name`}>Language: </span>
          <span className={`${CN}__info-item-value video-title`}>
            {video.iso_639_1}
          </span>
        </p>
        <VideoPlayer youtubeId={video.key} title={video.type} isMobile={isMobile} />
      </this.StyledTabPanel>
    ));
  }

  render() {
    const { value } = this.state;

    return (
      <div>
        <this.StyledAppBar position="static">
          <Tabs value={value} onChange={this.handleChange} aria-label="wrapped label tabs example" variant="scrollable">
            {this.returnTabs()}
          </Tabs>
        </this.StyledAppBar>
        {this.returnTabPanel(value)}
      </div>
    );
  }
}

export default VideoPlayerBar;

