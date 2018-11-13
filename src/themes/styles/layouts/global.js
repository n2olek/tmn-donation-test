import {
  injectGlobal
} from 'styled-components'
// import {
//   default as VARIABLES
// } from 'themes/styles/bases/variables'
// import {
//   default as TYPOGRAPHYS
// } from 'themes/styles/bases/typographys'
// import {
//   default as MIXINS
// } from 'themes/styles/helpers/mixins'
// import {
//   default as UTILITIES
// } from 'themes/styles/helpers/utilities'
// import {
//   CONTENTS,
//   ICONS,
//   LOGOS,
//   SHAREDS,
//   VIDEOS,
//   AUDIOS,
//   DOCUMENTS
// } from 'themes'

// //////////////////////////////////////////////////////////////////////////////////////////////////
// ==================================================================================================
//
// Global
//
// * XXXXX
//
// ==================================================================================================
// //////////////////////////////////////////////////////////////////////////////////////////////////

injectGlobal`
  /* XXXXX
  ============================================================ */
  .page-main {
    position: relative;
    z-index: 1;

    .fade-appear,
    .fade-exit,
    .fade-enter {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      overflow: auto;
      background-color: #FFF;
    }
  }

  .pageSwap {
    overflow: auto;
    box-sizing: border-box;
    height: 100vh;
    background-color: #FFF;
    transition: transform 0.5s, opacity 0.5s;
    transform: translate3d(0, 0, 0);

    &.fade-appear {
      opacity: 0;
      transform: translate3d(100%, 0, 0);

      &.fade-appear-active {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }

    &.fade-enter {
      opacity: 0;
      transform: translate3d(100%, 0, 0);

      &.fade-enter-active {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }

    &.fade-exit {
      opacity: 0;
      transform: translate3d(0, 0, 0);

      &.fade-exit-active {
        opacity: 1;
        transform: translate3d(-100%, 0, 0);
      }
    }
  }

  .reversePageSwap {
    overflow: auto;
    box-sizing: border-box;
    height: 100vh;
    background-color: #fff;
    transition: transform 0.5s, opacity 0.5s;
    transform: translate3d(0, 0, 0);

    &.fade-appear {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
      /* transform: translate3d(100%, 0, 0); */

      &.fade-appear-active {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }

    &.fade-enter {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
      /* transform: translate3d(100%, 0, 0); */

      &.fade-enter-active {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }

    &.fade-exit {
      opacity: 1;
      transform: translate3d(0, 0, 0);

      &.fade-exit.fade-exit-active {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
      }
    }
  }
`;
