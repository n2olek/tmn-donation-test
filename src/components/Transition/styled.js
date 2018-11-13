import styled from 'styled-components'
// import {
//   default as VARIABLES
// } from '../../themes/styles/bases/variables'
// import {
//   default as TYPOGRAPHYS
// } from '../../themes/styles/bases/typographys'
// import {
//   default as MIXINS
// } from '../../themes/styles/helpers/mixins'
// import {
//   default as UTILITIES
// } from '../../themes/styles/helpers/utilities'

// Wrapper
// ============================================================
export const TransitionWrapper = styled.div`
  /* Parent styles
  ------------------------------- */
  .transition-group {
    position: relative;
  }

  .route-section {
    /* position: absolute;
    width: 100%;
    top: 0;
    left: 0; */



    overflow: auto;
    transition: transform 0.5s, opacity 0.5s;

    overflow: auto;
    top: 0;
    right: 0;
    bottom: 0;
    transform: translate3d(0, 0, 0)

  }

  .fade-enter {
    /* opacity: 0.01; */
  }

  .fade-enter.fade-enter-active {
    /* opacity: 1;
    transition: opacity 300ms ease-in; */
  }

  .fade-exit {
    opacity: 1;

    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  .fade-exit.fade-exit-active {
    /* opacity: 0.01;
    transition: opacity 300ms ease-in; */
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .fade-appear {
    /* opacity: 0.01; */
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .fade-appear.fade-appear-active {
    /* opacity: 1;
    transition: opacity 500ms ease-in; */

    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  /* Child element styles
  ------------------------------- */
  /* Modifiers
  ------------------------------- */
  /* Media queries
  ------------------------------- */
`
