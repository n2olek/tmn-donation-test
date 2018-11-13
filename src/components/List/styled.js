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
export const ListWrapper = styled.div`
  /* Parent styles
  ------------------------------- */

  padding-left: 16px;
  margin-bottom: 16px;

  /* Child element styles
  ------------------------------- */
  h3 {
    ${TYPOGRAPHYS.FONT_STYLES.FIRST_REGULAR_XXS}
    ${MIXINS.ELLIPSIS({})};
  }

  .list-item {
    display: flex;
    padding-bottom: 16px;
    margin-bottom: 16px;
    position: relative;
    overflow: hidden;

    > a {
      display: flex;
      justify-content: space-between;
      position: relative;
      align-items: center;
      color: #999999;
      flex-grow: 2;
    }

    &::after {
      content: '';
      display: block;
      border-bottom: 1px solid ${VARIABLES.COLORS.GRAY};
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 57px;
    }

    &:last-child::after {
      /* content: none; */
    }
  }


  .list-item > .list-content, .list-contents {
    padding-right: 16px;
    margin-left: 16px;
    overflow: hidden;
    flex: 1;
    /* border-bottom: 1px solid ${VARIABLES.COLORS.GRAY}; */
  }

  .list-contents {
    display: flex;
    justify-content: space-between;
    position: relative;
    align-items: center;


  }

  .list-contents > .list-content {
    overflow: hidden;
    padding-right: 16px;
  }

  .list-description {
    padding-right: 5%;
    max-height: 36px;
    overflow: hidden;
  }

  .list-button {
    align-items: center;
    display: flex;
  }

  .button-icon {
    background-color: transparent;
    outline: none;
    border: none;
    padding: 0;
    margin: 0;
    width: 24px;
  }

  .buttton-outline {
    background-color: transparent;
    border: 1px solid ${VARIABLES.COLORS.BLUE};
    border-radius: ${VARIABLES.BORDER_RADIUSES.TN};
    color: ${VARIABLES.COLORS.BLUE};
    ${TYPOGRAPHYS.FONT_STYLES.FIRST_BOLD_MN};
    width: 97px;
    height: 29px;
  }

  /* Modifiers
  ------------------------------- */

  /* Media queries
  ------------------------------- */
  @media only screen and (max-width: 321px) {
    h3 {
      ${MIXINS.ELLIPSIS({
        maxWidth: '99%'
      })
    }
  }
`
