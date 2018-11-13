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
export const AppBodyWrapper = styled.div`
  /* Parent styles
  ------------------------------- */
  position: relative;
  height: 100vh;
  /* padding-top: 16px; */

  /* Child element styles
  ------------------------------- */
  .body-content {
    padding: 0 16px;
    position: relative;
    padding-bottom: 80px;
  }

  .body-bottom {
    position: fixed;
    width: 100%;
    bottom: 0;
    padding: 16px;
  }

  /* Modifiers
  ------------------------------- */
  .is-ui-bg {
    &:before {
      content: '';
      display: table;
      height: 110px;
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      z-index: -1;
      background: -moz-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,0.94) 50%, rgba(255,255,255,0.94) 100%); /* FF3.6-15 */
      background: -webkit-linear-gradient(top, rgba(255,255,255,0) 0%,rgba(255,255,255,0.94) 50%,rgba(255,255,255,0.94) 100%); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,0.94) 50%,rgba(255,255,255,0.94) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#f0ffffff',GradientType=0 ); /* IE6-9 */
    }
  }

  /* Media queries
  ------------------------------- */
`
