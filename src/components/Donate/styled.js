import styled from 'styled-components'
import {
  default as VARIABLES
} from '../../themes/styles/bases/variables'
import {
  default as TYPOGRAPHYS
} from '../../themes/styles/bases/typographys'
// import {
//   default as MIXINS
// } from '../../themes/styles/helpers/mixins'
// // import {
//   default as UTILITIES
// } from '../../themes/styles/helpers/utilities'

// Wrapper
// ============================================================
export const DonateWrapper = styled.div`
  /* Parent styles
  ------------------------------- */
  margin: 0 16px;
  margin-bottom: 24px;
  min-height: 149px;
  margin-top: -62px;
  padding: 24px 16px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  border-radius: ${VARIABLES.BORDER_RADIUSES.MN};
  background-color: ${VARIABLES.COLORS.WHITE};
  box-shadow: 0 6px 16px 0 rgba(10, 56, 97, 0.15);


  /* Child element styles
  ------------------------------- */
  .donate-inprogress {
    height: 6px;
    overflow: hidden;
    margin-bottom: 17px;
    background-color: ${VARIABLES.COLORS.GRAY_4};
    border-radius: ${VARIABLES.BORDER_RADIUSES.MN};
  }

  .donate-block {
    background-color: ${VARIABLES.COLORS.BLUE};
    height: 100%;
  }

  .donate-content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .donate-item {
    text-align: center;
  }

  .donate-description {
    ${TYPOGRAPHYS.FONT_STYLES.FIRST_REGULAR_MN};
  }

  .donate-number {
    ${TYPOGRAPHYS.FONT_STYLES.SECOND_MEDIUM_XS};
    margin-bottom: 4px;
    color: ${VARIABLES.COLORS.GRAY_3};
  }

  /* Modifiers
  ------------------------------- */
  .is-ui-active {
    color: ${VARIABLES.COLORS.BLUE};

    .donate-number {
      color: ${VARIABLES.COLORS.BLUE};
    }
  }

  /* Media queries
  ------------------------------- */
`
