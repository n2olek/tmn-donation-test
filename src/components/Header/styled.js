import styled from 'styled-components'
import {
  default as VARIABLES
} from '../../themes/styles/bases/variables'
import {
  default as TYPOGRAPHYS
} from '../../themes/styles/bases/typographys'
import {
  default as MIXINS
} from '../../themes/styles/helpers/mixins'
// import {
//   default as UTILITIES
// } from '../../themes/styles/helpers/utilities'

// Wrapper
// ============================================================
export const HeaderWrapper = styled.div`
  /* Parent styles
  ------------------------------- */
  display: flex;
  align-items: center;
  color: ${VARIABLES.COLORS.GRAY_1};
  ${TYPOGRAPHYS.FONT_STYLES.FIRST_REGULAR_TN};
  padding: 0 16px;
  margin-bottom: 16px;

  /* Child element styles
  ------------------------------- */
  h1, .h1 {
    ${TYPOGRAPHYS.FONT_STYLES.SECOND_MEDIUM_MD};
  }

  h2, .h2 {
    ${TYPOGRAPHYS.FONT_STYLES.SECOND_MEDIUM_SM};
  }

  h3, .h3 {
    ${TYPOGRAPHYS.FONT_STYLES.SECOND_MEDIUM_XS};
    /* max-width: 99%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; */
    align-self: center;
    ${MIXINS.ELLIPSIS({
      display: 'block'
    })};
  }

  /* Use Main Menu */
  h4, .h4 {
    ${TYPOGRAPHYS.FONT_STYLES.SECOND_MEDIUM_XXS};
    ${MIXINS.ELLIPSIS({
      display: 'block'
    })};
  }

  .header-icon {
    margin-right: 16px;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    box-shadow: 0px 5px 12px 0px rgba(0,0,0,0.1);
    flex-grow: 0;
  }

  .header-item {
    flex-grow: 1;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
  }

  .header-contents {
    position: relative;
  }

  .header-content {
    position: relative;
    /* padding-right: 120px; */
  }

  .header-content + .header-button {
    align-items: flex-end;
  }

  .header-button {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      width: 118px;
      height: 29px;
      transition: background-color .3s;
      background-color: transparent;
      ${TYPOGRAPHYS.FONT_STYLES.FIRST_BOLD_MN};
      border: 1px solid ${VARIABLES.COLORS.BLUE};
      color: ${VARIABLES.COLORS.BLUE};
      border-radius: ${VARIABLES.BORDER_RADIUSES.TN};
      cursor: pointer;
      margin-left: 21px;

      &:hover {
        background-color: ${VARIABLES.COLORS.BLUE};
        color: ${VARIABLES.COLORS.WHITE};
      }
    }
  }

  /* Modifiers
  ------------------------------- */
  /* Button for header*/
  .is-ui-outline {
    border-radius: ${VARIABLES.BORDER_RADIUSES.TN};
    color: ${VARIABLES.COLORS.BLUE};
  }


  /* Media queries
  ------------------------------- */
`
