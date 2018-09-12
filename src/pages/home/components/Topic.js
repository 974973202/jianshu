import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style'

class Topic extends PureComponent {
  render(){
    const { list } = this.props;
    return (
      <TopicWrapper>
        {
          list.map((item) => {
            return (
              <TopicItem key={item.get('id')}>
                <img className="topic-pic" src={item.get('imgUrl')} alt=''/> 
                {item.get('title')}
              </TopicItem>
            )
          })
        }
        
      
        <TopicItem>
          更多热门专题&nbsp;>
        </TopicItem>
      </TopicWrapper>
    )
  }
}

const mapState = (state) =>({
  // list: state.get('home').get('topicList')  等同如下
  list: state.getIn(['home', 'topicList'])

});

export default connect(mapState, null)(Topic);