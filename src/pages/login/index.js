import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
//Redirect重定向
import { Redirect } from 'react-router-dom';
import { 
  LoginWrapper,
  LoginBox,
  Input,
  Button
 } from './style';


class Login extends PureComponent {
  render(){
    const { loginStatus } = this.props;
    if(!loginStatus){
      return (
        <LoginWrapper>
          <LoginBox>
            {/* 获取DOM分别存在account和password里 */}
            <Input placeholder='账号' innerRef={(input) => {this.account = input}}/>
            <Input placeholder='密码' type='password' innerRef={(input) => {this.password = input}}/>
            <Button onClick={()=>this.props.login(this.account, this.password)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    }else{
      return <Redirect to='/'/>
    }
    
  }
}

const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
  login(accountElem, passwordElem) {
    dispatch(actionCreators.login(accountElem.value, passwordElem.value))
  }
  
})

//connect() 里面设置两个参数。第一个是拿数据。第二个是发送数据
export default connect(mapState, mapDispatch)(Login);