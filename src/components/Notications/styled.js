import styled from 'styled-components'
// import {
//   default as VARIABLES
// } from '../../themes/styles/bases/variables'
import {
  default as TYPOGRAPHYS
} from '../../themes/styles/bases/typographys'
// import {
//   default as MIXINS
// } from '../../themes/styles/helpers/mixins'
// import {
//   default as UTILITIES
// } from '../../themes/styles/helpers/utilities'

// Wrapper
// ============================================================
export const NoticationsWrapper = styled.div`
  /* Parent styles
  ------------------------------- */
  display: flex;
  align-items: center;
  ${TYPOGRAPHYS.FONT_STYLES.FIRST_REGULAR_MN}

  /* Child element styles
  ------------------------------- */
  .notications-content {
    padding-left: 6px;
  }

  /* Modifiers
  ------------------------------- */
  /* Media queries
  ------------------------------- */
`
