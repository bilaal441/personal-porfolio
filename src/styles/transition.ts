import { css } from "styled-components"

const TransitionStyles = css`
  /* mobile hamburger */
  .aside-enter-active {
    opacity: 1;
    transition: var(--transition);
    transform: translateX(0);
    visibility: visible;
  }

  .aside-exit-active {
    transition: var(--transition);
    transform: translateX(100vh);
    opacity: 0;
    visibility: hidden;
  }

  /* section inter section */

  .fadedown-enter {
    opacity: 0.01;
    transform: translateY(-1rem);
    transition: opacity 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955),
      transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
  .fadedown-enter-active {
    opacity: 1;

    transform: translateY(0rem);

    transition: opacity 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955),
      transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }

  /* fadeup */

  .fadeup-enter {
    opacity: 0.01;
    transform: translateY(1rem);
    transition: opacity 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955),
      transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
  .fadeup-enter-active {
    opacity: 1;

    transform: translateY(0rem);

    transition: opacity 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955),
      transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }

  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in-out;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: opacity 300ms ease-in-out;
  }
`

export default TransitionStyles
