import { createGlobalStyle } from 'styled-components'
import variables from './varibales'

// 2.488rem/49.77px	A Visual Type Scale
// 2.074rem/41.47px	A Visual Type Scale
// 1.728rem/34.56px	A Visual Type Scale
// 1.44rem/28.80px	A Visual Type Scale
// 1.2rem/24.00px	A Visual Type Scale
// 1rem/20.00px	A Visual Type Scale
// 0.833rem/16.67px	A Visual Type Scale
// 0.694rem/13.89px	A Visual Type Scale
// 0.579rem/11.57px	A Visual Type Scale
// 0.482rem/9.65px	A Visual Type Scale
// 0.402rem/8.04px	A Visual Type Scale
// 0.335rem/6.70px	A Visual Type Scale
// 0.279rem/5.58px	A Visual Type Scale
// 0.233rem/4.65px	A Visual Type Scale
// 0.194rem/3.88px	A Visual Type Scale
// 0.162rem/3.23px	A Visual Type Scale
// 0.135rem/2.69px	A Visual Type Scale
// 0.112rem/2.24px	A Visual Type Scale
// 0.093rem/1.87px	A Visual Type Scale
// 0.078rem/1.56px	A Visual Type Scale
// 0.065rem/1.30px	A Visual Type Scale
// 0.054rem/1.08px	A Visual Type Scale

const GlobalStyles = createGlobalStyle`
${variables}

 html {
   box-sizing: border-box;

   font-size: 125%;


   scroll-behavior: smooth;
   height: 100%;
   
  }
  *, *:before, *:after {
   box-sizing: inherit;
   margin: 0 ;
   padding: 0 ;
  };

   body, #__next {
    height: 100%;
  }
 
  body {
    font-family: var(--fontStack) ;
    line-height:  1.3; 
    background-color: var(--clr-dark);
    margin: 0;
    color: var( --clr-white) ;


  }

img{
  width: 100%;
}



button{
border: none;
}


a{
  text-decoration: none ;
  cursor: pointer;
}
ul{
  list-style:  none;
}








`

export default GlobalStyles
