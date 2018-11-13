import {
  redirect as contextRedirect
} from 'context'

export const redirect = (path) => {
  contextRedirect(path)
}
