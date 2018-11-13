import React from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'
import {
  AppBodyWrapper
} from './styled'

class BodyContent extends React.PureComponent {
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
      'body-content',
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

class BodyBottom extends React.PureComponent {
  render () {
    const {
      className,
      children,
      ui,
      uiFor,
      hasBG
    } = this.props

    // props for css classes
    const uiClasses = ClassNames(ui)
    const uiForClasses = ClassNames(uiFor)
    const classes = ClassNames(
      'body-bottom',
      { [`is-ui-bg`]: hasBG },
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
 * AppBody description
 * A AppBody provides a short summary of content
 */

export class AppBody extends React.PureComponent {
  static defaultProps = {
    //srcIcon: require('./images/icon-example.svg')
    //srcIcon: false
  }

  static propTypes = { // TYPE > node, string, func, bool
    /**
    * [Button] and [Button.Children] - additional classes
    */
    className: PropTypes.string,

    /**
    * [Button] and [Button.Children] - additional elements or text
    */
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.string
    ]),

    /**
    * [Button] - modifier name for change default multiple Size
    */
    size: PropTypes.oneOf([
      'small',
      'medium',
      'large'
    ]),

    /**
    * [Button] - modifier name for change default multiple UI (parent and children), can reuse
    */
    ui: PropTypes.oneOf([
      'error',
      'success'
    ]),

    /**
    * [Button] - modifier name for change default multiple UI (parent and children), can't reuse
    */
    uiFor: PropTypes.oneOf([
      'special'
    ]),

    /**
    * [Button] - source icon (path/url)
    */
    //srcIcon: PropTypes.string
  }

  static Content  =   BodyContent
  static Button   =   BodyBottom

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
      'app-body',
      { [`is-body-${bodyClasses}`]: bodyClasses },
      { [`is-body-for-${bodyForClasses}`]: bodyForClasses },
      className
    )

    return (
      <AppBodyWrapper
        className={classes}
        >
        {children}
      </AppBodyWrapper>
    )
  }
}
