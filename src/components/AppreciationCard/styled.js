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
export const AppreciationCardWrapper = styled.div`
  /* Parent styles
  ------------------------------- */
  padding: 24px;

  /* Child element styles
  ------------------------------- */
  .appreciation-card-item {
    position: relative;
    margin-bottom: 58px;
  }

  .appreciation-card-image {
    overflow: hidden;
    height: 168px;
    display: flex;
    justify-items: center;
    align-items: center;
    position: relative;
    border-radius: ${VARIABLES.BORDER_RADIUSES.MN};
    box-shadow: ${VARIABLES.BOX_SHADOWS.SHADOW_3};
    background-color: ${VARIABLES.COLORS.GRAY};
    max-width: 400px;
    margin: auto;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .appreciation-card-contents {
    width: 295px;
    height: 128px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: -86px;
    position: absolute;
    left: 0;
    right: 0;
    background-image: url(${require('./images/frame.svg')});
    background-repeat: no-repeat;
    box-shadow: ${VARIABLES.BOX_SHADOWS.SHADOW_3};
    border-radius: ${VARIABLES.BORDER_RADIUSES.MN};
    background-color: ${VARIABLES.COLORS.WHITE};
  }

  .appreciation-card-logo {
    width: 40px;
    height: 40px;
    margin: auto;
    position: relative;
    margin-top: -20px;
    display: flex;
    justify-items: center;
    align-items: center;
    margin-bottom: 4px;
    overflow: hidden;
    border-radius: ${VARIABLES.BORDER_RADIUSES.MN};
    box-shadow: ${VARIABLES.BOX_SHADOWS.SHADOW_2};
    background-color: ${VARIABLES.COLORS.WHITE};
  }

  .appreciation-card-header {
    h3 {
      ${TYPOGRAPHYS.FONT_STYLES.SECOND_MEDIUM_XS};
    }
  }

  .appreciation-card-content {
    ${TYPOGRAPHYS.FONT_STYLES.FIRST_REGULAR_MN};
    color: ${VARIABLES.COLORS.GRAY_3};
  }

  .appreciation-card-currency {
    ${TYPOGRAPHYS.FONT_STYLES.THIRD_BOLD_MD};
    color: ${VARIABLES.COLORS.GRAY_3};
  }

  .appreciation-card-date {
    ${TYPOGRAPHYS.FONT_STYLES.FIRST_REGULAR_MN};
    font-size: 10px;
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

    .appreciation-card-contents {
      background-size: cover;
      height: 115px;
      width: 265px;
      padding: 0 15px;
    }

    .appreciation-card-currency {
      ${TYPOGRAPHYS.FONT_STYLES.THIRD_BOLD_XS};
    }

    .appreciation-card-image {
      height: 150px;
    }
`
