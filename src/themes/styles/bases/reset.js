import {
  injectGlobal
} from 'styled-components'

// //////////////////////////////////////////////////////////////////////////////////////////////////
// ==================================================================================================
//
// Reset
// Ref: https://github.com/filipelinhares/ress
//
// ==================================================================================================
// //////////////////////////////////////////////////////////////////////////////////////////////////

injectGlobal`
  html,
  body,
  p,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  blockquote,
  figure,
  fieldset,
  legend,
  textarea,
  pre,
  iframe,
  hr,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: normal;
  }

  ul {
    list-style: none;
  }

  button,
  input,
  select,
  textarea {
    margin: 0;
  }

  html {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }

  * {
    -webkit-box-sizing: inherit;
            box-sizing: inherit;
  }

  *:before, *:after {
    -webkit-box-sizing: inherit;
            box-sizing: inherit;
  }

  img,
  embed,
  object,
  audio,
  video {
    max-width: 100%;
  }

  iframe {
    border: 0;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  td,
  th {
    padding: 0;
    text-align: left;
  }
`;
