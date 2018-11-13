import {
  css
} from 'styled-components'
import {
  default as VARIABLES
} from './variables' // Use relative path for React Styleguidist

// //////////////////////////////////////////////////////////////////////////////////////////////////
// ==================================================================================================
//
// Typographys:
//
// Using: ${TYPOGRAPHYS.FONT_STYLES.FIRST_REGULAR_MN};
//
// * First regular (Thonburi Regular)
//   - FIRST_REGULAR_MN   (12px) H5 Thai
//   - FIRST_REGULAR_TN   (14px) H4 Thai
//   - FIRST_REGULAR_XXS  (16px) H3 Thai
//   - FIRST_REGULAR_XL   (48px) H1 Thai
//
// * First bold (Thonburi Bold)
//   - FIRST_BOLD_MN     (12px)
//   - FIRST_BOLD_TN     (14px)
//   - FIRST_BOLD_XXS    (16px)
//   - FIRST_BOLD_XS     (18px)
//   - FIRST_BOLD_MD     (24px)
//   - FIRST_BOLD_LG     (30px)
//
// * Second regular (Prompt Regular)
//   - SECOND_REGULAR_MN  (12px)  H5 Thai
//   - SECOND_REGULAR_TN  (14px)  H4 Thai
//   - SECOND_REGULAR_XXS (16px)  H3 Thai, H4 Thai Title
//   - SECOND_REGULAR_XS  (18px)  H2 Thai
//
// * Second medium (Prompt Medium)
//   - SECOND_MEDIUM_XXS  (18px)  H4 Thai Title
//   - SECOND_MEDIUM_XS   (18px)  H3 Thai Title
//   - SECOND_MEDIUM_SM   (20px)  H2 Thai Title
//   - SECOND_MEDIUM_MD   (24px)  H1 Thai Title
//
// * Second bold (Prompt Bold)
//   - SECOND_BOLD_MN     (12px)  H5 Thai
//   - SECOND_BOLD_TN     (14px)  H4 Thai
//   - SECOND_BOLD_XXS    (16px)  H3 Thai
//   - SECOND_BOLD_XS     (18px)  H2 Thai
//
// * Third bold (SFproDisplay-Bold)
//   - THIRD_BOLD_MN     (12px)
//   - THIRD_BOLD_TN     (14px)
//   - THIRD_BOLD_XXS    (16px)
//   - THIRD_BOLD_XS     (18px)
//   - THIRD_BOLD_MD     (24px)
//   - THIRD_BOLD_LG     (30px)
//
// Notice: Color, Hover/Focus can set at Global or Scaffolding
//
// ==================================================================================================
// //////////////////////////////////////////////////////////////////////////////////////////////////

// Text default style
// ============================================================
const TEXT_DEFAULT = css`
  /* font-weight: normal; */
  vertical-align: middle;
  text-transform: none;
`

export default {
  FONT_STYLES: {
    // First regular
    // ============================================================

    // Mini
    // -------------------------------
    FIRST_REGULAR_MN: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.FIRST_REGULAR};
      font-size: ${VARIABLES.FONT_SIZES.MN};
      line-height: ${VARIABLES.LINE_HEIGHTS.MN};
    `,

    // Tiny
    // -------------------------------
    FIRST_REGULAR_TN: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.FIRST_REGULAR};
      font-size: ${VARIABLES.FONT_SIZES.TN};
      line-height: ${VARIABLES.LINE_HEIGHTS.TN};
    `,

    // Extra extra small
    // -------------------------------
    FIRST_REGULAR_XXS: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.FIRST_REGULAR};
      font-size: ${VARIABLES.FONT_SIZES.XXS};
      line-height: ${VARIABLES.LINE_HEIGHTS.XXS};
    `,

    // Large
    // -------------------------------
    FIRST_REGULAR_XL: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.FIRST_REGULAR};
      font-size: ${VARIABLES.FONT_SIZES.XL};
      line-height: ${VARIABLES.LINE_HEIGHTS.XL};
    `,

    // First Bold
    // ============================================================

    // Mini
    // -------------------------------
    FIRST_BOLD_MN: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.FIRST_BOLD};
      font-size: ${VARIABLES.FONT_SIZES.MN};
      line-height: ${VARIABLES.LINE_HEIGHTS.MN};
    `,

    // Tiny
    // -------------------------------
    FIRST_BOLD_TN: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.FIRST_BOLD};
      font-size: ${VARIABLES.FONT_SIZES.TN};
      line-height: ${VARIABLES.LINE_HEIGHTS.TN};
    `,

    // Extra extra small
    // -------------------------------
    FIRST_BOLD_XXS: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.FIRST_BOLD};
      font-size: ${VARIABLES.FONT_SIZES.XXS};
      line-height: ${VARIABLES.LINE_HEIGHTS.XXS};
    `,

    // Extra small
    // -------------------------------
    FIRST_BOLD_XS: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.FIRST_BOLD};
      font-size: ${VARIABLES.FONT_SIZES.XS};
      line-height: ${VARIABLES.LINE_HEIGHTS.XS};
    `,

    // Medium
    // -------------------------------
    FIRST_BOLD_MD: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.FIRST_BOLD};
      font-size: ${VARIABLES.FONT_SIZES.MD};
      line-height: ${VARIABLES.LINE_HEIGHTS.MD};
    `,


    // Large
    // -------------------------------
    FIRST_BOLD_LG: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.FIRST_BOLD};
      font-size: ${VARIABLES.FONT_SIZES.LG};
      line-height: ${VARIABLES.LINE_HEIGHTS.LG};
    `,


    // Second regular
    // ============================================================

    // Mini
    // -------------------------------
    SECOND_REGULAR_MN: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.SECOND_REGULAR};
      font-size: ${VARIABLES.FONT_SIZES.MN};
      line-height: ${VARIABLES.LINE_HEIGHTS.MN};
    `,

    // Tiny
    // -------------------------------
    SECOND_REGULAR_TN: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.SECOND_REGULAR};
      font-size: ${VARIABLES.FONT_SIZES.TN};
      line-height: ${VARIABLES.LINE_HEIGHTS.TN};
    `,

    // Extra extra small
    // -------------------------------
    SECOND_REGULAR_XXS: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.SECOND_REGULAR};
      font-size: ${VARIABLES.FONT_SIZES.XXS};
      line-height: ${VARIABLES.LINE_HEIGHTS.XXS};
    `,



    // Second medium
    // ============================================================
    // Extra extra small
    // -------------------------------
    SECOND_MEDIUM_XXS: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.SECOND_MEDIUM};
      font-size: ${VARIABLES.FONT_SIZES.XXS};
      line-height: ${VARIABLES.LINE_HEIGHTS.XXS};
    `,

    // Extra small
    // -------------------------------
    SECOND_MEDIUM_XS: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.SECOND_MEDIUM};
      font-size: ${VARIABLES.FONT_SIZES.XS};
      line-height: ${VARIABLES.LINE_HEIGHTS.XS};
    `,

    // Small
    // -------------------------------
    SECOND_MEDIUM_SM: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.SECOND_MEDIUM};
      font-size: ${VARIABLES.FONT_SIZES.SM};
      line-height: ${VARIABLES.LINE_HEIGHTS.SM};
    `,

    // Medium
    // -------------------------------
    SECOND_MEDIUM_MD: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.SECOND_MEDIUM};
      font-size: ${VARIABLES.FONT_SIZES.MD};
      line-height: ${VARIABLES.LINE_HEIGHTS.MD};
    `,

    // Second Bold
    // ============================================================

    // Mini
    // -------------------------------
    SECOND_BOLD_MN: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.SECOND_BOLD};
      font-size: ${VARIABLES.FONT_SIZES.MN};
      line-height: ${VARIABLES.LINE_HEIGHTS.MN};
    `,

    // Tiny
    // -------------------------------
    SECOND_BOLD_TN: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.SECOND_BOLD};
      font-size: ${VARIABLES.FONT_SIZES.TN};
      line-height: ${VARIABLES.LINE_HEIGHTS.TN};
    `,

    // Extra extra small
    // -------------------------------
    SECOND_BOLD_XXS: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.SECOND_BOLD};
      font-size: ${VARIABLES.FONT_SIZES.XXS};
      line-height: ${VARIABLES.LINE_HEIGHTS.XXS};
    `,

    // Extra small
    // -------------------------------
    SECOND_BOLD_XS: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.SECOND_BOLD};
      font-size: ${VARIABLES.FONT_SIZES.XS};
      line-height: ${VARIABLES.LINE_HEIGHTS.XS};
    `,

    // Third bold
    // ============================================================

    // Mini
    // -------------------------------
    THIRD_BOLD_MN: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.THIRD_BOLD};
      font-size: ${VARIABLES.FONT_SIZES.MN};
      line-height: ${VARIABLES.LINE_HEIGHTS.MN};
    `,

    // Tiny
    // -------------------------------
    THIRD_BOLD_TN: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.THIRD_BOLD};
      font-size: ${VARIABLES.FONT_SIZES.TN};
      line-height: ${VARIABLES.LINE_HEIGHTS.TN};
    `,

    // Extra extra small
    // -------------------------------
    THIRD_BOLD_XXS: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.THIRD_BOLD};
      font-size: ${VARIABLES.FONT_SIZES.XXS};
      line-height: ${VARIABLES.LINE_HEIGHTS.XXS};
    `,

    // Extra small
    // -------------------------------
    THIRD_BOLD_XS: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.THIRD_BOLD};
      font-size: ${VARIABLES.FONT_SIZES.XS};
      line-height: ${VARIABLES.LINE_HEIGHTS.XS};
    `,

    // Medium
    // -------------------------------
    THIRD_BOLD_MD: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.THIRD_BOLD};
      font-size: ${VARIABLES.FONT_SIZES.MD};
      line-height: ${VARIABLES.LINE_HEIGHTS.MD};
    `,

    // Large
    // -------------------------------
    THIRD_BOLD_LG: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.THIRD_BOLD};
      font-size: ${VARIABLES.FONT_SIZES.LG};
      line-height: ${VARIABLES.LINE_HEIGHTS.LG};
    `,
  }
}
