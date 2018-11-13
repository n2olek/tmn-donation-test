// //////////////////////////////////////////////////////////////////////////////////////////////////
// ==================================================================================================
//
// Variables:
// * Font sizes
// * Line heights
// * Colors
// * Font families
//
//
// ==================================================================================================
// //////////////////////////////////////////////////////////////////////////////////////////////////

// Factors (using in variables)
// ============================================================
const LINE_HEIGHT_FACTOR = '1.35'

// Font sizes
const FONT_SIZES_MN   =  '12px'
const FONT_SIZES_TN   =  '14px'
const FONT_SIZES_XXS  =  '16px'
const FONT_SIZES_XS   =  '18px'
const FONT_SIZES_SM   =  '20px'
const FONT_SIZES_MD   =  '24px'
const FONT_SIZES_LG   =  '30px'
const FONT_SIZES_XL   =  '48px'

export default {
  // Font sizes
  // ..
  // Conventional size name:
  // ..
  // Mini(MN) < Tiny(TN) <
  // Extra extra small(XXS) < Extra small(XS) < Small(SM) <
  // Medium(MD) < Large(LG) < Extra large(XL) < Extra extra large(XXL) <
  // Big(BG) < Huge(HG) < Massive(MS)
  // ============================================================
  FONT_SIZES: {
    MN:   FONT_SIZES_MN,  // 12px
    TN:   FONT_SIZES_TN,  // 14px //Alerts / Annotations
    XXS:  FONT_SIZES_XXS, // 16px //Paragraph / Body
    XS:   FONT_SIZES_XS,  // 18px //Subheadline / Title bar
    SM:   FONT_SIZES_SM,  // 20px //Depend
    MD:   FONT_SIZES_MD,  // 24px //Depend
    LG:   FONT_SIZES_LG,  // 30px
    XL:   FONT_SIZES_XL,  // 48px //Banner
  },

  // Line heights
  // ..
  // Conventional size name:
  // ..
  // Mini(MN) < Tiny(TN) <
  // Extra extra small(XXS) < Extra small(XS) < Small(SM) <
  // Medium(MD) < Large(LG) < Extra large(XL) < Extra extra large(XXL) <
  // Big(BG) < Huge(HG) < Massive(MS)
  // ============================================================
  LINE_HEIGHTS: {
    MN:   `calc(${FONT_SIZES_MN}  *  ${LINE_HEIGHT_FACTOR})`,  // 16.2px
    TN:   `calc(${FONT_SIZES_TN}  *  ${LINE_HEIGHT_FACTOR})`,  // 18.9px
    XXS:  `calc(${FONT_SIZES_XXS} *  ${LINE_HEIGHT_FACTOR})`,  // 21.6px
    XS:   `calc(${FONT_SIZES_XS}  *  ${LINE_HEIGHT_FACTOR})`,  // 24.3px
    SM:   `calc(${FONT_SIZES_SM}  *  ${LINE_HEIGHT_FACTOR})`,  // 27px
    MD:   `calc(${FONT_SIZES_MD}  *  ${LINE_HEIGHT_FACTOR})`,  // 32.4px
    LG:   `calc(${FONT_SIZES_LG}  *  ${LINE_HEIGHT_FACTOR})`,
    XL:   `calc(${FONT_SIZES_XL}  *  ${LINE_HEIGHT_FACTOR})`,  // 64.8px
  },

  // Colors
  // ..
  // Number is color intensity.
  // Little number is Lightness.
  // Big number is Darkness.
  // ============================================================
  COLORS: {
    // Base
    WHITE:    '#FFFFFF',  //Text Banner
    RED:      '#C01713',  //System
    BLUE:     '#147bd1',  //Link | System  #006DC9
    GREEN:    '#34BC73',  //System
    YELLOW:   '#FF8300',  //Call To Action #FF8F00
    GRAY:     '#e6e6e6',

    // Gray
    GRAY_1:   '#999999',  //Text Detail
    GRAY_2:   '#666666',  //Text Sub Head
    GRAY_3:   '#333333',  //Text Head
    GRAY_4:   '#f0f3f4',
    GRAY_5:   '#F2F5F5',
    GRAY_6:   '#f0f0f0',

    // Blue
    BLUE_1:   '#4A94C9',  //Banner

    // Red
    RED_1:    '#DD4C4F',  //Banner

    // Green
    GREEN_1:  '#57ADB8',  //Banner

    // `calc(${LINE_HEIGHT_FACTOR} * ${FONT_SIZES_MN})`,   // 16px
  },

  // Font families
  // ..
  // Conventional Font family name:
  // ..
  // First, Second, Third, Fourth, Fifth, ...
  // ..
  // Not use Primary, Secondary, Tertiary, Quaternary, Quinary, ...
  // because long and difficult spelling.
  // ============================================================
  FONT_FAMILIES: {
    FIRST_REGULAR:  'Thonburi',
    FIRST_BOLD:     'Thonburi-Bold',
    SECOND_REGULAR: 'Prompt-Regular',
    SECOND_MEDIUM:  'Prompt-Medium',
    SECOND_BOLD:    'Prompt-Bold',
    THIRD_BOLD:     'SFproDisplay-Bold',
  },

  // Border radiuses
  // ..
  // Conventional size name:
  // ..
  // Mini(MN) < Tiny(TN) <
  // Extra extra small(XXS) < Extra small(XS) < Small(SM) <
  // Medium(MD) < Large(LG) < Extra large(XL) < Extra extra large(XXL) <
  // Big(BG) < Huge(HG) < Massive(MS)
  // ============================================================
  BORDER_RADIUSES: {
    MN:       '8px',
    TN:       '14.5px',
    CIRCLE:   '50%'
  },

  // Box shadows
  // ============================================================
  BOX_SHADOWS: {
    SHADOW_1: '0 5px 5px rgba(0, 0, 0, .5)',
    SHADOW_2: '0 3px 5px rgba(0, 0, 0, .15)',
    SHADOW_3: '0 0 30px 0 rgba(0, 0, 0, 0.2)',
  },
}
