import {
  default as VARIABLES
} from '../bases/variables' // Use relative path for React Styleguidist

// //////////////////////////////////////////////////////////////////////////////////////////////////
// ==================================================================================================
//
// Mixins
// * Placeholder
//
// Using default:
// ${MIXINS.PLACEHOLDER({})};
//
// Using parameters:
// ${MIXINS.PLACEHOLDER({
//   color: 'green'
// })};
//
// ==================================================================================================
// //////////////////////////////////////////////////////////////////////////////////////////////////

export default {
  // Placeholder
  // ==================================================================================================
  PLACEHOLDER: ({
    color = VARIABLES.COLORS.BLACK,
  }) => {
    return `
      &::-moz-placeholder {
        color: ${color};
        opacity: 1;
      }

      &:-ms-input-placeholder {
        color: ${color};
      }

      &::-webkit-input-placeholder {
        color: ${color};
      }
    `
  },

  // Ellipsis
  // ==================================================================================================
  ELLIPSIS: ({
    display = 'inline-block',
    maxWidth = '100%',
  }) => {
    return `
      display: ${display};
      max-width: ${maxWidth};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
    `
  }
}
