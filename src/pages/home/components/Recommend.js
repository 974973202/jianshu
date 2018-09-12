import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem, RecommendQcode,Qrcode, QrcodeDiv } from '../style'
import { relative } from 'upath';

class Recommend extends PureComponent {
  render(){
    const { list, code } = this.props;
    return (
      <RecommendWrapper>
        {
          list.map((item) => {
            return <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}/>
          })
        }   
        <RecommendQcode>
          {
            code.map(item => {
              return <Qrcode key={item.get('id')} imgUrl={item.get('imgUrl')}/>
            })
          }
          <QrcodeDiv>
            <div>下载简书手机App &#62;</div>
            <p>随时随地发现和创作内容</p>
          </QrcodeDiv>
        </RecommendQcode>
      </RecommendWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'recommendList']),
  code: state.getIn(['home', 'recommendQrcode'])
})

export default connect(mapState, null)(Recommend);