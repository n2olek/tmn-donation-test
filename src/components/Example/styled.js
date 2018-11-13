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
export const ExampleWrapper = styled.div`
  /* Parent styles
  ------------------------------- */
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: #EEEEEE;

  /* Child element styles
  ------------------------------- */
  .example-icon {
    margin-right: 15px;
  }

  .example-children {
    color: #000000;
  }

  /* Modifiers
  ------------------------------- */
  /* UI */
  &.is-ui-error,
  &.is-ui-success {
    .example-children {
      color: #FFFFFF;
    }
  }

  &.is-ui-error {
    background-color: #FF0000;
  }

  &.is-ui-success {
    background-color: #008000;
  }

  /* UI for */
  &.is-ui-for-special {
    background-color: #9C27B0;

    .example-children {
      color: #FFEB3B;
    }
  }

  /* Media queries
  ------------------------------- */
`
