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
export const CardWrapper = styled.div`
  /* Parent styles
  ------------------------------- */
  min-height: 149px;
  background-color: ${VARIABLES.COLORS.WHITE};
  margin-top: -16px;

  /* Child element styles
  ------------------------------- */
  .card-item {
    height: 200px;
    /* min-width: 163px; */
    width: 163px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${VARIABLES.COLORS.GRAY_5};
    border-radius: ${VARIABLES.BORDER_RADIUSES.MN};
    box-shadow: 0 5px 20px 0 rgba(0,0,0,0.2);
    margin-bottom: 32px;
    margin-top: 16px;
    margin-left: 10px;

    &:first-child {
      margin-left: 16px;
    }
  }

  .card-content {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 80px;
    z-index: 1;
  }

  .card-header {
    position: absolute;
    top: 0;
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), #ffffff);
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    overflow: hidden;
    height: 80px;
    width: 100%;

    &::before {
      /* background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), #ffffff);
      width: 100%;
      height: 100%;
      filter: blur(2px);
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0; */
    }

    &::after {
      /* background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), #ffffff);
      width: 100%;
      height: 100%;
      filter: blur(2px);
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0; */
    }

    h3 {
      z-index: 1;
      position: relative;
    }
  }

  .card-backdrop {
    position: absolute;
    height: 80px;
    width: 100%;
    overflow: hidden;
    bottom: 0;
  }

  .card-filter {
    filter: blur(3px);
    height: 100%;
    position: absolute;
    display: block;
    width: 100%;
    background-size: cover;
    background-position: bottom;
  }

  .card-avatar {
    position: absolute;
    top: -20px;
    left: 0;
    right: 0;
    z-index: 1;
    text-align: center;

    img {
      background-color: ${VARIABLES.COLORS.WHITE};
      box-shadow: ${VARIABLES.BOX_SHADOWS.SHADOW_3};
    }
  }

  .card-avatar + .card-header {
    ${TYPOGRAPHYS.FONT_STYLES.FIRST_REGULAR_XXS};
    text-align: center;
    padding: 0 20px;
    padding-top: 20px;
    display: flex;
    align-items: center;

    h3 {
      max-height: 42px;
      overflow: hidden;
    }
  }

  .card-ribbin {
    background-image: url(${require('./images/img-ribbon.svg')});
    width: 67px;
    height: 66px;
    position: absolute;
    top: -1px;
    right: -1px;
  }

  /* Modifiers
  ------------------------------- */

  /* Media queries
  ------------------------------- */

`
