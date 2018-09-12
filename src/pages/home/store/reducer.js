import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  recommendQrcode: [],
  articlePage: 1,
  showScroll: false
});

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList),
    recommendQrcode: fromJS(action.recommendQrcode),
  });
}

const addarticlelist = (state, action) => {
  return state.merge({
    'articleList': state.get('articleList').concat(action.list),
    'articlePage': action.nextPage
  });
}

export default (state = defaultState, action) => {
  switch (action.type){
    case actionTypes.CHANGE_HOME_DATA:
      return changeHomeData(state, action)

    case actionTypes.ADD_ARTICLE_LIST:
      return addarticlelist(state, action)

    case actionTypes.TOGGLE_SCROLL_TOP:
      return state.set('showScroll', action.flag);

    default: 
      return state;
  }
}