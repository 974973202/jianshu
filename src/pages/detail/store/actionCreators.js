import axios from 'axios';
import * as actionTypes from './actionTypes';


const changeDetail = (title, content) => ({
  type: actionTypes.CHANGE_DETAIL,
  title,
  content
});


export const getDetail = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id=' + id)
    .then((res) => {
      const result = res.data.data;
      // const action = {
      //   type: actionTypes.CHANGE_DETAIL,
      //   title: result.title,
      //   content: result.content,
      // }
      dispatch(changeDetail(result.title, result.content))
      // dispatch(action)
    })
  }
}