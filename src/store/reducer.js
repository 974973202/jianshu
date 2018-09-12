import { combineReducers } from 'redux-immutable';
//as ES6的语法给header取一个别名  headerReducer
import { reducer as headerReducer } from '../common/header/store';
//redux-immutable
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as detailReducer } from '../pages/detail/store';
import { reducer as loginReducer } from '../pages/login/store';

//把小的reducer合并成大的reducer
// export default combineReducers({
//   header: headerReducer
// })

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
  login: loginReducer,
});

export default reducer;