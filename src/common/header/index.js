import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreator } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import { Link } from 'react-router-dom';
import {
  HeaderWrapper,
  LogoDiv,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button,
} from './style';

class Header extends Component{

  getListArea(){
    const { 
      focused, 
      list, 
      page, 
      totalPage,
      mouseIn, 
      handleMouseEnter, 
      handleMouseLeave, 
      handleChangePage,
    } = this.props;
    const newList = list.toJS();
    const pageList = [];
    if(newList.length){
      for(let i = (page-1) * 10; i < page * 10; i ++) {
        pageList.push (
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }
    if(focused || mouseIn) {
      return (
        <SearchInfo 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch 
            onClick={()=>handleChangePage(page, totalPage, this.spinIcon)}
            >
            <i ref={(icon)=>{this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
            换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {/* {
              list.map((item, index) => {
                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
              })
            } */}
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    }else{
      return null;
    }
  }
  render(){
    const { focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props;
    return (
      <HeaderWrapper>
      <LogoDiv>
        <Link to='/'>
          <Logo />
        </Link>
      </LogoDiv>
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载App</NavItem>
        {
          login ? 
          <NavItem onClick={logout} className='right'>退出</NavItem>:
          <Link to='/login'><NavItem className='right'>登录</NavItem></Link>
        }
        <NavItem className='right'><i className="iconfont">&#xe636;</i></NavItem>
        <SearchWrapper>
          <CSSTransition
            in={focused}
            timeout = {200}
            classNames="slide"
          >
            <NavSearch
              className = {focused ? 'focused' : ''}
              onFocus = {()=>handleInputFocus(list)}
              onBlur = {handleInputBlur}
            />
          </CSSTransition>
            <i className = {focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#59101;</i>
            {this.getListArea()}
        </SearchWrapper> 
      </Nav>
      <Addition>
        <Link to='/write'>
        <Button className='writting'><i className="iconfont">&#58901;</i>写文章</Button>
        </Link>
        <Button className='reg'>注册</Button>
      </Addition>
    </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    // focused: state.get('header').get('focused')  等价于如下
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(['login', 'login']),
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      (list.size === 0) && dispatch(actionCreator.getList());
      // if(list.size === 0){
      //   dispatch(actionCreator.getList());
      // }
      dispatch(actionCreator.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreator.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreator.MouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreator.MouseLeave());
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      if(originAngle) {
        originAngle = parseInt(originAngle, 10);
      }else{
        originAngle = 0;
      }
      spin.style.transform = 'rotate(' +(originAngle+360)+ 'deg)';

      if(page < totalPage){
        dispatch(actionCreator.ChangePage(page + 1));
      }else{
        dispatch(actionCreator.ChangePage(1));
      }
    },
    logout() {
      dispatch(loginActionCreators.logout())
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);