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
export const BannerIntroWrapper = styled.div`
  /* Parent styles
  ------------------------------- */
  margin-bottom: 16px;
  position: relative;

  &.is-ui-for-profile {
    margin-bottom: 32px;
  }

  /* Child element styles
  ------------------------------- */
  .banner-container,
  .banner-container .swiper-slide {
    position: relative;
    overflow: hidden;
    padding-bottom: 56%;
  }

  iframe, .banner-item, img, video {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .banner-profile {
    width: 48px;
    height: 48px;
    border-radius: ${VARIABLES.BORDER_RADIUSES.MN};
    box-shadow: ${VARIABLES.BOX_SHADOWS.SHADOW_2};
    background-color: ${VARIABLES.COLORS.WHITE};
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: -24px;
    left: 16px;
    z-index: 1;
  }

  .banner-play {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;

    img {
      width: 56px;
      height: 56px;
      opacity: 0.8;
      position: relative;
    }
  }

  .banner-intro-media {
    overflow: hidden;
    position: relative;
    padding-bottom: 56%;
  }

  .banner-intro-media-type div iframe,
  .banner-intro-media-type video {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .banner-intro-media-type {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100% !important; /* Overwrite js inline style from react-player */
    height: 100% !important; /* Overwrite js inline style from react-player */

    div {
      iframe {
      }
    }
  }

  .banner-intro-media-control-button {
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    bottom: 7.5vw;
    left: 0;
  }

  /* Modifiers
  ------------------------------- */
  .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
    left: 50%;
    width: 100px; /* fix width for avoid overlap video control bar */
    margin-left: -50px;
    padding-bottom: 2px;
  }

  .swiper-pagination-bullet {
    background-color: ${VARIABLES.COLORS.WHITE};
    opacity: .5;
    outline: none;
  }

  .swiper-pagination-bullet-active {
    background-color: ${VARIABLES.COLORS.WHITE};
    opacity: 1;
  }


  /* Media queries
  ------------------------------- */

  @media only screen and (min-width: 414px) {
    .banner-play {
      img {
        width: 80px;
        height: 80px;
      }
    }
  }
`
