import styled from 'styled-components'
import {
  default as VARIABLES
} from '../../themes/styles/bases/variables'
// import {
//   default as TYPOGRAPHYS
// } from '../../themes/styles/bases/typographys'
import {
  default as MIXINS
} from '../../themes/styles/helpers/mixins'
// import {
//   default as UTILITIES
// } from '../../themes/styles/helpers/utilities'

// Wrapper
// ============================================================
export const SearchWrapper = styled.div`
  /* Parent styles
  ------------------------------- */
  padding: 0 16px;
  margin-bottom: 16px;

  input {
	  padding: 6px 36px 6px 16px;
    outline: none;
    width: 100%;
    border: 1px solid ${VARIABLES.COLORS.GRAY};
    border-radius: ${VARIABLES.BORDER_RADIUSES.MN};
    color: ${VARIABLES.COLORS.GRAY_3};
    ${MIXINS.PLACEHOLDER({
      color: VARIABLES.COLORS.GRAY
    })};
  }

  .search-box {
    position: relative;
  }

  .icon-search {
    opacity: 0.5;
    position: absolute;
    left: 8px;
    top: 4px;

    + input {
      padding-left: 38px;
    }
  }

  .button-close {
    background-color: transparent;
    border: none;
    position: absolute;
    right: 2px;
    top: 3px;
    cursor: pointer;
  }

  /* Child element styles
  ------------------------------- */
  /* Modifiers
  ------------------------------- */
  /* Media queries
  ------------------------------- */
`
