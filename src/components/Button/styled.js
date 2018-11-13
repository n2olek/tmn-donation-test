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
// import {
//   default as UTILITIES
// } from '../../themes/styles/helpers/utilities'

// Wrapper
// ============================================================
export const ButtonWrapper = styled.button`
  /* Parent styles
  ------------------------------- */
  /* display: flex;
  align-items: center; */
  display: inline-block;
  ${TYPOGRAPHYS.FONT_STYLES.FIRST_BOLD_XXS};
  border: 1px solid ${VARIABLES.COLORS.GRAY};
  background-color: ${VARIABLES.COLORS.GRAY};
  border-radius: ${VARIABLES.BORDER_RADIUSES.MN};
  /* width: 80px; */
  height: 38px;
  padding: 0 10px;
  outline: none;
  transition: background-color .3s;
  cursor: pointer;

  /* Child element styles
  ------------------------------- */
  &.button + &.button {
    margin-left: 8px;
  }

  &:hover {
    opacity: .95;
  }

  .button-icon {
    display: flex;
  }

  &.is-ui-disable {
    background-color: transparent;
    color: ${VARIABLES.COLORS.WHITE};
  }

  /* Modifiers
  ------------------------------- */
  &.is-ui-outline {
    background-color: transparent;

    &.is-ui-disable {
      background-color: transparent;
      color: ${VARIABLES.COLORS.GRAY};
      border: 1px solid ${VARIABLES.COLORS.GRAY_4};
    }

    &:hover, &.is-ui-active {
      background-color: ${VARIABLES.COLORS.GRAY};

      &.is-ui-disable {
        background-color: transparent;
      }
    }
  }

  &.is-ui-primary {
    background-color: ${VARIABLES.COLORS.YELLOW};
    border: 1px solid ${VARIABLES.COLORS.YELLOW};
    color: ${VARIABLES.COLORS.WHITE};

    &.is-ui-outline {
      color: ${VARIABLES.COLORS.YELLOW};
      background-color: transparent;

      &:hover, &.is-ui-active {
        background-color: ${VARIABLES.COLORS.YELLOW};
        color: ${VARIABLES.COLORS.WHITE};
      }
    }
  }

  &.is-ui-secondary {
    background-color: ${VARIABLES.COLORS.BLUE};
    border: 1px solid ${VARIABLES.COLORS.BLUE};
    color: ${VARIABLES.COLORS.WHITE};

    &.is-ui-outline {
      color: ${VARIABLES.COLORS.GRAY_3};
      background-color: transparent;

      &:hover, &.is-ui-active {
        background-color: ${VARIABLES.COLORS.BLUE};
        color: ${VARIABLES.COLORS.WHITE};
      }
    }
  }

  &.is-ui-fluid + &.is-ui-fluid {
    margin-left: 0;
  }

  &.is-ui-fluid {
    display: block;
    width: 100%;
    max-width: 100%;
    height: 38px;
  }

  &.is-ui-disable {
    cursor: not-allowed;
    background-color: ${VARIABLES.COLORS.GRAY};
    border: 1px solid ${VARIABLES.COLORS.GRAY};
  }

  &.is-ui-small {
    ${TYPOGRAPHYS.FONT_STYLES.FIRST_BOLD_MN};
    max-width: 118px;
    height: 29px;
  }

  &.is-ui-medium {
    ${TYPOGRAPHYS.FONT_STYLES.FIRST_BOLD_XXS};
    max-width: 80px;
    height: 38px;
  }

  &.is-ui-large {
    ${TYPOGRAPHYS.FONT_STYLES.FIRST_BOLD_XXS};
    height: 48px;
  }

  &.is-ui-large + &.is-ui-large {
    /* max-width: 151px; */
  }

  &.is-ui-icon {
    background-color: transparent;
    width: 40px;
    height: 40px;
  }

  /* Media queries
  ------------------------------- */
`
