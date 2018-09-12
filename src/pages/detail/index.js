import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { withRouter } from 'react-router-dom';
import { 
  DetailWrapper, 
  Header,
  Content,
 } from './style';

class Detail extends PureComponent {
  render(){
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content dangerouslySetInnerHTML={{__html: this.props.content}}>
        {/* {this.props.content} */}
        </Content>
      </DetailWrapper>
    )
  }
  componentDidMount(){
    this.props.getDetail(this.props.match.params.id);
  }
}

const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content']),
});

const mapDispatch = (dispatch) => ({
  getDetail(id){
    dispatch(actionCreators.getDetail(id))
  }
});

//connect() 里面设置两个参数。第一个是拿数据。第二个是改变发送数据
export default connect(mapState, mapDispatch)(withRouter(Detail));