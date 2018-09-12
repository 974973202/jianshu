import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  float: left;
  .banner-img{
    width: 625px;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  padding-top: 30px;
  width: 280px;
  float: right;
`;

export const TopicWrapper = styled.div`
overflow: hidden;
padding: 20px 0 10px 0;
margin-left: -18px;
border-bottom: 1px solid #dcdcdc;

`;

export const TopicItem = styled.div`
  float: left;
  background: #f7f7f7;
  height: 32px;
  line-height: 32px;
  margin-left: 18px;
  padding-right: 10px;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  margin-bottom: 18px;
  .topic-pic{
    display: block;
    float: left;
    width:32px;
    height: 32px;
    margin-right: 10px;

  }
`;

export const ListItem = styled.div`
overflow: hidden;
padding: 20px 0;
border-bottom: 1px solid #ececec;
.list-pic{
  display: block;
  width: 125px;
  height: 100px;
  float: right;
  border-radius: 5px;
}
`;

export const ListInfo = styled.div`
width: 500px;
float: left;
.title{
  line-height: 27px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
}
.desc{
  line-height: 18px;
  font-size: 13px;
  color: #999;
}
`;

export const RecommendWrapper = styled.div`
width: 280px;
`;

export const RecommendItem = styled.div`
width: 280px;
height: 50px;
background: url(${(props)=>props.imgUrl});
background-size: contain;
margin-bottom: 6px
`;

export const RecommendQcode = styled.div`
width: 234px;
height: 60px;
padding: 10px 22px;
border: 1px solid #f0f0f0;
border-radius: 6px;
margin-bottom: 30px
`;

export const Qrcode = styled.div`
width: 60px;
height: 60px;
float: left;
background: url(${(props)=>props.imgUrl});
background-size: contain;
opacity: .85
`;

export const QrcodeDiv = styled.div`
margin-top: 10px;
margin-left: 10px;
display: inline-block;
vertical-align: middle;
box-sizing: border-box;
div{
  display: block
  font-size: 15px;
  color: #333;
}
p{
  margin-top: 8px;
  font-size: 13px;color: #999;
}
`;

export const WriterWrapper = styled.div`
width: 278px;
border: 1px solid red;
border-radius: 3px;
height: 300px;
line-height: 300px;
text-align: center;
`;

export const LoadMore = styled.div`
width: 100%;
height: 40px;
line-height: 40px;
margin: 30px 0;
background: #a5a5a5;
text-align: center;
border-radius: 20px;
color: #fff;
cursor: pointer;
`;

export const BackTop = styled.div`
position: fixed;
right: 50px;
bottom: 60px;
width: 60px;
height: 60px;
line-height: 60px;
text-align: center;
border: 1px solid #ccc;
font-size: 14px;
`;