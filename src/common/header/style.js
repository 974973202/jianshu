//由style-components创建的styled
import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  z-index: 1;
  width: 100vw;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  position: fixed;
  background-color: #fff;
`;

export const LogoDiv = styled.div`
  flex: 1;
`;

export const Logo = styled.div`
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
  margin-left: 12%;
`;

export const Nav = styled.div`
  flex: 4;
  height: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 3%;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left{
    float: left;
  }
  &.right{
    float: right;
    color: #969696;
  }
  &.active{
    color: #ea6f5a;
  }
`;

export const SearchWrapper = styled.div`
position: relative;
float: left;
.zoom{
  position : absolute;
  right: 5px;
  bottom: 5px;
  width: 30px;
  line-height: 30px;
  border-radius: 15px;
  text-align: center;
  &.focused {
    background: #777;
    color: #fff;
  }
}
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  padding: 0 30px 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #666;
  &::placehoder{
    color: #999;
  }
  &.focused{
    width: 240px;
  }
  &.slide-enter{
    transition: all .2s ease-out;
  }
  &.slide-enter-active{
    width: 240px;
  }
  &.slide-exit{
    transition: all .2s ease-out;
  }
  &.slide-exit-active{
    width: 160px;
  }
  `;

export const SearchInfo = styled.div`
position: absolute;
left: 0;
top: 56px;
width: 240px;
padding: 0 20px;
box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
background: #fff;
`;

export const SearchInfoTitle = styled.div`
margin-top: 20px;
margin-bottom: 15px;
line-height: 20px;
font-size: 14px;
color: #969696;
`;

export const SearchInfoSwitch = styled.div`
float: right;
font-size: 13px;
cursor: pointer;
.spin{
  display: block;
  float: left;
  font-size: 12px;
  margin-right: 2px;
  transition:all .2s ease-in;
  transform-origin: center center;
}
`;

export const SearchInfoList = styled.div`

`;

export const SearchInfoItem = styled.a`
display: block;
float: left;
padding: 0 5px;
margin-right: 10px;
margin-bottom: 10px;
line-height: 20px;
font-size: 12px;
border: 1px solid #ddd;
color: #787878;
border-radius: 3px;
`;

export const Addition = styled.div`
flex: 1;
height: 56px;
`;

export const Button = styled.div`
float: right;
margin-top: 9px;
margin-right: 20px;
padding: 0 20px;
line-height: 38px;
border-radius: 19px;
border: 1px solid #ec6149;
font-size: 14px;
&.reg{
  color: #ec6149;
}
&.writting{
  color: #fff;
  background: #ec6149;
}
`;

