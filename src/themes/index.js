// Medias (image, video, audio)
// ============================================================
function importAll(r) {
  let files = {}
  r.keys().forEach((item, index) => {
    files[item.replace('./', '')] = r(item)
  })
  return files;
}

export const CONTENTS = importAll(require.context('./images/contents', false, /\.(png|jpe?g|gif|svg)$/))
export const ICONS = importAll(require.context('./images/icons', false, /\.(png|jpe?g|gif|svg)$/))
export const LOGOS = importAll(require.context('./images/logos', false, /\.(png|jpe?g|gif|svg)$/))
export const SHAREDS = importAll(require.context('./images/shareds', false, /\.(png|jpe?g|gif|svg)$/))
export const VIDEOS = importAll(require.context('./videos', false, /\.(mp4)$/))
export const AUDIOS = importAll(require.context('./audios', false, /\.(mp3)$/))
export const DOCUMENTS = importAll(require.context('./documents', false, /\.(pdf|doc|docx|xls|xlsx|ppt|pptx|txt)$/))

// Styles
// ============================================================
export {
  default as VARIABLES
} from './styles/bases/variables'
export {
  default as TYPOGRAPHYS
} from './styles/bases/typographys'
export {
  default as MIXINS
} from './styles/helpers/mixins'
export {
  default as UTILITIES
} from './styles/helpers/utilities'
