import styled from 'styled-components'
import {
  default as VARIABLES
} from '../../themes/styles/bases/variables'
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
export const ImageWrapper = styled.img`
  /* Parent styles
  ------------------------------- */
  border-radius: ${VARIABLES.BORDER_RADIUSES.MN};

  &.image-avatar {
    width: 40px;
    height: 40px;
  }

  &.image-list {
    width: 40px;
    height: 40px;
    border: 1px solid ${VARIABLES.COLORS.GRAY_5};
  }

  &.image-circle {
    width: 131px;
    height: 131px;
    border-radius: ${VARIABLES.BORDER_RADIUSES.CIRCLE};
    background-color: ${VARIABLES.COLORS.GRAY_6};
  }

  /* Child element styles
  ------------------------------- */
  /* Modifiers
  ------------------------------- */
  /* Media queries
  ------------------------------- */
`
