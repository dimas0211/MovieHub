import React, { Component } from 'react';
import autoBind from 'auto-bind';
import { withStyles } from '@material-ui/core/styles';
import {
  TextField, Select, MenuItem, InputLabel, FormControl, Button
} from '@material-ui/core';

import './FiltrationPanel.scss';

const CN = 'filtration-panel';

const style = {
  color: 'white',
  height: 50,
  width: 200,
  border: '1px solid #404040',
  borderRadius: '5px',
  margin: '20px',
  backgroundColor: '#282D2D',
  padding: '0',
  '& > *': {
    color: 'white',
    padding: '10px',
    fontFamily: '"Nunito-Regular"'
  },
  '& > div': {
    margin: 0,
    transform: 0
  },
  '& .MuiInputLabel-formControl': {
    margin: 0,
    transform: 'none'
  },
  '& .MuiFormLabel-filled': {
    color: '#282D2D',
    backgroundColor: '#282D2D'
  },
  '& > ::after, ::before': {
    border: '0px',
    padding: 0
  }
};

const StyledForm = withStyles({
  root: style
})(TextField);

const StyledFormControl = withStyles({
  root: style

})(FormControl);

const StyledButton = withStyles({
  root: style
})(Button);

export default class FiltrationPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      yearValue: '',
      withGenres: ''
    };

    autoBind(this);
  }

  componentWillUnmount() {
    const { clearFiltrationParams } = this.props;

    clearFiltrationParams && clearFiltrationParams();
  }

  setFiltrationParams(e) {
    e.preventDefault();
    const { yearValue, withGenres } = this.state;
    const { setFiltrationParams } = this.props;

    // eslint-disable-next-line radix
    setFiltrationParams && setFiltrationParams({ primary_release_year: parseInt(yearValue) }, { with_genres: withGenres });
  }

  handleYearInput(event) {
    this.setState({ yearValue: event.target.value });
  }

  handleGenreSelect(event) {
    this.setState({ withGenres: event.target.value });
  }

  isButtonDisabled() {
    const { yearValue, withGenres } = this.state;
    const emptyFileds = (!yearValue && !withGenres);

    return emptyFileds;
  }

  renderGenreseOptions() {
    const { genres } = this.props;

    return genres.map((genre) => <MenuItem key={genre.id} value={genre.id}>{genre.name}</MenuItem>);
  }

  render() {
    const { yearValue, withGenres } = this.state;

    return (
      <div autoComplete="off" className={CN} noValidate>
        <StyledForm
          className={`${CN}__item`}
          id="filled-basic"
          placeholder="Year"
          type="number"
          value={yearValue}
          onChange={this.handleYearInput}
        />
        <StyledFormControl className={`${CN}__item`}>
          <InputLabel focused={false} shrink={false}>Genre</InputLabel>
          <Select
            id="demo-simple-select"
            labelId="demo-simple-select-label"
            placeholder="Genre"
            value={withGenres}
            onChange={this.handleGenreSelect}
          >
            {this.renderGenreseOptions()}
          </Select>
        </StyledFormControl>
        <StyledButton
          className={`${CN}__item`}
          color="secondary"
          type="submit"
          variant="contained"
          onClick={this.setFiltrationParams}
          disabled={this.isButtonDisabled()}
        >
          Apply Filter
        </StyledButton>
      </div>
    );
  }
}
