import styled, { createGlobalStyle } from 'styled-components'
import { Container, Row, Col } from './responsive'

const GlobalStyle = createGlobalStyle`

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center, dl, dt, dd,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    text-decoration: none; /* 추가 */
}
ol, ul, li{
    vertical-align: baseline;
    text-decoration: none;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    line-height: 1;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
html{
  font-family: 'IBM Plex Sans KR', sans-serif;
}
`

export const MainHeading = styled.h1`
  font-size: clamp(2.3rem, 6vw, 4.5rem);
  margin-bottom: 2rem;
  color: ${({ color }) => (color ? color : (props) => props.theme.primary)};
  width: 100%;
  letter-spacing: 4px;
  text-align: center;
`
export const Heading = styled.h2`
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  margin: ${({ margin }) => (margin ? margin : '')};
  margin-bottom: ${({ mb }) => (mb ? mb : '')};
  margin-top: ${({ mt }) => (mt ? mt : '')};
  color: ${({ inverse }) => (inverse ? '$403ae3' : '#fff')};
  letter-spacing: 0.4rem;
  line-height: 1.06;
  text-align: center;
  width: ${({ width }) => (width ? width : '100%')};
`

export const TextWrapper = styled.span`
  color: ${({ color }) => (color ? color : '')};
  font-size: ${({ size }) => (size ? size : '')};
  font-weight: ${({ weight }) => (weight ? weight : '')};
  letter-spacing: ${({ spacing }) => (spacing ? spacing : '')};
  padding: ${({ padding }) => (padding ? padding : '')};
  margin: ${({ margin }) => (margin ? margin : '')};
  margin-bottom: ${({ mb }) => (mb ? mb : '')};
  margin-top: ${({ mt }) => (mt ? mt : '')};
`

export const Section = styled.section`
  padding: ${({ padding }) => (padding ? padding : '140px 0')};
  margin: ${({ margin }) => (margin ? margin : '')};
  background: ${({ inverse }) => (inverse ? 'white' : '#071c2f')};
  position: ${({ position }) => (position ? position : '')};
  width: ${({ width }) => (width ? width : 'auto')};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
  height: ${({ height }) => (height ? height : 'auto')};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
`

export const Button = styled.button`
  border-radius: 10px;
  background: ${(props) => (props.bg ? props.bg : props.theme.violet_m)};
  white-space: wrap;
  padding: 10px 20px;
  font-size: ${(props) => props.theme.f_button};
  color: ${(props) => props.theme.white};
  outline: none;
  border: none;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  &:hover {
    background: ${(props) => props.theme.violet_d};
  }
`

/* 칼럼 그리드 컴포넌트들은 내용이 길어서 responsive.js에서 설정함
improt한 후 그대로 export함*/
export { Container, Row, Col }

export default GlobalStyle