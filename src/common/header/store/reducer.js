import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';


const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1,
});

//immutable库
//immutable对象
//因为这里面的函数必须是纯函数，那么怎么保证呢。就引入第三方模块immutable
export default (state = defaultState, action) => {
  //switch语句替换if语句
  switch (action.type){
    case actionTypes.SEARCH_FOCUS:
      return state.set('focused', true);
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', false);
    case actionTypes.CHANGE_LIST:
      // return state.set('list', action.data).set('totalPage', action.totalPage);
      //merge 可以同时改变多个数据内容  等同如上
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      });
    case actionTypes.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case actionTypes.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case actionTypes.CHANGE_PAGE:
      return state.set('page', action.page);
    default: 
      return state;
  }


  //immutable对象的set方法会结合immutable之前对象的值
  //和设置的值，返回一个全新的对象
  // if(action.type === actionTypes.SEARCH_FOCUS){
  //   return state.set('focused', true);
  //   // return{
  //   //   focused: true
  //   // }
  // }
  // if(action.type === actionTypes.SEARCH_BLUR){
  //   return state.set('focused', false);
  //   // return{
  //   //   focused: false
  //   // }
  // }
  // if(action.type === actionTypes.CHANGE_LIST){
  //   return state.set('list', action.data);
  // }
  return state;
}