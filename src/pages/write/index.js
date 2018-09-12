import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';



class Write extends PureComponent {
  render(){
    const { loginStatus } = this.props;
    if(loginStatus){
      return (
        <div>写文章页面2222</div>
      )
    }else{
      return <Redirect to='/login'/>
    }
    
  }
}

const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'login'])
})



//connect() 里面设置两个参数。第一个是拿数据。第二个是发送数据
export default connect(mapState, null)(Write);