import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import connectWithViewport from '../../services/connectWithViewport';

import MovieItemPage from './MovieItemPage';
import getGenres from '../../actions/getGenres';
import getOneMovie from '../../actions/getOneMovie';
import getVideos from '../../actions/getVideos';

const mapStateToProps = ({ ApiReducer }) => ({
  error: ApiReducer.error,
  movie: ApiReducer.movie,
  genres: ApiReducer.genresList.genres,
  videos: ApiReducer.videos
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getGenres,
  getOneMovie,
  getVideos
}, dispatch);

export const MovieItemPageContainer = compose(
  connectWithViewport(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(MovieItemPage);
