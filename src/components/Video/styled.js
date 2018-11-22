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
export const VideoWrapper = styled.div`
  /* Parent styles
  ------------------------------- */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .banner-play {
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.35);

    button {
      background-color: transparent;
      border: none;
    }

    img {
      opacity: 1;
    }
  }

  /* Child element styles
  ------------------------------- */
  /* Modifiers
  ------------------------------- */
  /* Media queries
  ------------------------------- */
`
