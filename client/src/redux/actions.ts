import { Dispatch } from 'redux';
import axios from 'axios';

export const fetchData = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: 'FETCH_DATA_START' });
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: response.data });
    } catch (error:any) {
      dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
    }
  };
};
