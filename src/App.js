import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from './components/loading';
import store from './store';

import Header from './common/header';

const Home = Loadable({
  loader: () => import('./pages/home'),
  loading: Loading,
})
const Login = Loadable({
  loader: () => import('./pages/login'),
  loading: Loading,
})
const Write = Loadable({
  loader: () => import('./pages/write'),
  loading: Loading,
})
const Detail = Loadable({
  loader: () => import('./pages/detail/loadable'),
  loading: Loading,
})

class App extends Component {
  render() {
    return (
      //Provider把store所有的数据都提供给了Header及其子组件
      <Provider store = {store}>
      
        <BrowserRouter>
          <div>
            <Header />
            
            <Route path='/' exact component={Home}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/write' exact component={Write}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
          </div>
        </BrowserRouter>
      
      </Provider>
    );
  }
}

export default App;
