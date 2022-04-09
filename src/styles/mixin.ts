import { css } from 'styled-components'

const button = css``

const mixin = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,


inlineLink: css`
    display:  inline-block;
  background-color: transparent ;
  color:var(--clr-light-sky-blue);
  text-transform:  capitalize;
   border-radius: 0.233rem;
 
  line-height: 1;
 border: 0.054rem solid var(--clr-light-sky-blue);
 box-shadow: 0rem  5px  1rem 0rem rgba(28, 28, 51, 0.055) ;
 

 transition: all  0.25s  ease-in-out;
    &:hover,
    &:focus,
    &:active {
      color: var();
      outline: 0;
    }
  `,







  resetList: css`
    list-style: none;
    padding: 0;
    margin: 0;
  `,
















}

export default mixin
