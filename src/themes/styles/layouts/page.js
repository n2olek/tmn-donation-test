import {
  injectGlobal
} from 'styled-components'
import {
  default as VARIABLES
} from 'themes/styles/bases/variables'
import {
  default as TYPOGRAPHYS
} from 'themes/styles/bases/typographys'
// import {
//   default as MIXINS
// } from 'themes/styles/helpers/mixins'
// import {
//   default as UTILITIES
// } from 'themes/styles/helpers/utilities'
import {
//   CONTENTS,
  ICONS,
//   LOGOS,
//   SHAREDS,
//   VIDEOS,
//   AUDIOS,
//   DOCUMENTS
} from 'themes'

// //////////////////////////////////////////////////////////////////////////////////////////////////
// ==================================================================================================
//
// Page
//
// * Home
//
// ==================================================================================================
// //////////////////////////////////////////////////////////////////////////////////////////////////

injectGlobal`
  /* View History
  ============================================================ */
  .view-history {
    .donated-block {
      text-align: center;
      padding: 24px 0 16px 0;
      border-bottom: 1px solid ${VARIABLES.COLORS.GRAY_4};
      margin: 0 24px 16px 24px;
    }

    .header {
      padding: 0 24px;
    }

    .donated-description {
      ${TYPOGRAPHYS.FONT_STYLES.FIRST_REGULAR_XXS}
      color: ${VARIABLES.COLORS.GRAY_2};
    }

    .donated-currency {
      ${TYPOGRAPHYS.FONT_STYLES.THIRD_BOLD_LG}
      color: ${VARIABLES.COLORS.GRAY_3}
    }

    .view-block {
      display: flex;
      padding: 0 24px;
      justify-content: space-between;
      margin-top: -16px;
      align-items: center;
    }

    .view-description {
      ${TYPOGRAPHYS.FONT_STYLES.FIRST_REGULAR_MN}
    }

    .view-monthly {
      &::after {
        content: ' ';
        display: inline-block;
        margin-left: 8px;
        background-image: url(${ICONS['icon-arrow-right.svg']});
        background-repeat: no-repeat;
        width: 7px;
        height: 10px;
        vertical-align: middle;
      }
    }
  }

  .banner-contents {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    padding-left: 62%;
    display: flex;
    justify-content: center;
    align-items: center;

    h3 {
      ${TYPOGRAPHYS.FONT_STYLES.SECOND_MEDIUM_MD};
      color: ${VARIABLES.COLORS.WHITE};
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      margin-bottom: 5px;
    }

    p {
      color: ${VARIABLES.COLORS.WHITE};
      ${TYPOGRAPHYS.FONT_STYLES.FIRST_BOLD_MN};
      opacity: 0.65;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      padding-right: 20%;
    }
  }

  .view-history-monthly  {
    margin-top: 16px;
  }

  .view-history-monthly-empty {
    text-align: center;
    margin-top: 31px;

    h1 {
      ${TYPOGRAPHYS.FONT_STYLES.SECOND_MEDIUM_MD};
      margin-top: 24px;
      margin-bottom: 8px;
    }

    p {
      ${TYPOGRAPHYS.FONT_STYLES.FIRST_REGULAR_XXS}
      margin-bottom: 16px;
    }
  }

  .search-filter {
    margin-top: 16px;

    .search {
      margin-bottom: 32px;
    }
  }

  @media only screen and (min-width: 640px) {
    .banner-contents {
      h3 {
        font-size: 2em;
      }

      p {
        font-size: 1em;
      }
    }
  }

  @media only screen and (max-width: 321px) {
    .banner-contents {
      h3 {
        font-size: 18px;
      }

      p {
        padding-right: 5%;
      }
    }
  }
`;
