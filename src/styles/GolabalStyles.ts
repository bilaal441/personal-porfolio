import { createGlobalStyle } from "styled-components"
import variables from "./varibales"
import { device } from "./Breakpoint.style"
import TransitionStyles from "./transition"

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
   


    scrollbar-width: thin;
    scrollbar-color:  var(--clr-dark-text)  var(--clr-navy);
   

    
  }



 




::-webkit-scrollbar {
  -webkit-appearance: none;
    width:  0.579rem;
    
   
   ;
    
  }

  
  ::-webkit-scrollbar-track {
    background: var(--clr-navy-dark);
    margin-block:0.482rem;
    border-radius:0.482rem;
    
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--clr-navy);
   
    box-shadow: 0 0 1px rgba(68, 68, 110, 0.5);
    border-radius: 1rem;
  border: transparent;
    
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
    background-color: var(--clr-navy-dark);
    margin: 0;
      color: var(--clr-dark-text);;

      min-height: 100%;

      &.hidden {
      overflow: hidden;
    }


      &.blur {
      overflow: hidden;
      header {
        background-color: transparent;
      }
      #content > * {
        filter: blur(5px) brightness(0.7);
       transition: all 0.25s  ease-in-out;
        pointer-events: none;
        user-select: none;
      }
    }


  }

img{
  width: 100%;
}



section {
    margin: 0rem auto;
    
    max-width: 50rem;
    padding: 3rem 0;
    
   
    transform: translateY(calc(var(--nav-height) * -1));

    transition: var(--transition);
    opacity: 0;

    @media ${device.tablet} {
      padding: 4rem 0;

     
     
  }

  @media ${device.laptop} {
   padding: 5rem 0;
  
  }

  
  }
  .section-active {
    transition: var(--transition);
    transform: translateX(0);
    opacity: 1;
  }

p{

  font-size: clamp(0.7rem, 0.8rem, 0.9rem);
  line-height: 1.3;
  
}

button{
border: none;
outline: none;
}


a{
  text-decoration: none ;
  cursor: pointer;
  display: inline-block;
  transition: var( --transition) ;

  
}
ul{
  list-style:  none;
}

.icon-heading{
  display:  inline-block;
  margin-right: 0.9rem;
align-self: center;
  svg{
    width: 1.5rem;
    height: 1.5rem;
  }
}

 .big-text{
  font-size: clamp(0.833rem, 3vw, 1rem);

 }
.section-heading{
  font-size: clamp(1.4rem, 1.4rem, 1.5rem);
    color: var(--clr-light);
    line-height: 1.1;
    margin-bottom: 2rem;
    text-transform: capitalize;
    letter-spacing: -0.078rem;}

.section-l-r{
  padding-left: 50px;
  padding-right: 50px;
}

.subsection-heading{
  color: var(--clr-light);

    line-height: 1.1;

    font-size: clamp(0.8rem, 1.2rem, 1.3rem);
    
    letter-spacing: -0.054rem;
    text-transform: capitalize;
}
.global-class-name{
  vertical-align: middle;
}


${TransitionStyles}

`

export default GlobalStyles
