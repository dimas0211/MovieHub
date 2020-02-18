import HttpService from '../services/dataService/httpService';
import { getMoviesPending, getMoviesSuccess, getMoviesError } from './actionsAPIcall';

const getData = () => (
  async (dispatch) => {
    const userAPI = new HttpService();

    try {
      getMoviesPending();
      const response = await userAPI.get('https://api.themoviedb.org/3/discover/movie?api_key=3f4df268ddd96ffb4344a1b20d93d24b');

      if (response.status === 404) {
        return Error(response.statusText);
      }
      dispatch(getMoviesSuccess(response.data));
    } catch (error) {
      dispatch(getMoviesError(error));
    }
  }
);

export default getData;

