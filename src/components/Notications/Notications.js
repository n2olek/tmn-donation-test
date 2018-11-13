import React from 'react'
import ClassNames from 'classnames'
import {
  NoticationsWrapper
} from './styled'

class NoticationsContent extends React.PureComponent {
  render () {
    const {
      className,
      children,
      ui,
      uiFor
    } = this.props

    // props for css classes
    const uiClasses = ClassNames(ui)
    const uiForClasses = ClassNames(uiFor)
    const classes = ClassNames(
      'notications-content',
      { [`is-ui-${uiClasses}`]: uiClasses },
      { [`is-ui-for-${uiForClasses}`]: uiForClasses },
      className
    )

    return (
      <div className={classes}>
        {children}
      </div>
    )
  }
}

/**
 * Notication description
 * A Notication provides a short summary of content
 */

export class Notications extends React.PureComponent {
  static Content   =   NoticationsContent

  render () {
    const {
      className,
      children,
      body,
      bodyFor
    } = this.props

    // props for css classes
    const bodyClasses = ClassNames(body)
    const bodyForClasses = ClassNames(bodyFor)

    const classes = ClassNames(
      'notications',
      { [`is-ui-${bodyClasses}`]: bodyClasses },
      { [`is-ui-for-${bodyForClasses}`]: bodyForClasses },
      className
    )

    return (
      <NoticationsWrapper
        className={classes}
        >
        {children}
      </NoticationsWrapper>
    )
  }
}
