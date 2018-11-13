import React from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'
import {
  ExampleWrapper
} from './styled'

class ExampleChildren extends React.PureComponent {
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
      'example-children',
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
 * Example description
 * - ...
 */

export class Example extends React.PureComponent {
  static defaultProps = {
    srcIcon: require('./images/icon-example.svg')
  }

  static propTypes = { // TYPE > node, string, func, bool
    /**
    * [Example] and [Example.Children] - additional classes
    */
    className: PropTypes.string,

    /**
    * [Example] and [Example.Children] - additional elements or text
    */
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.string
    ]),

    /**
    * [Example] - modifier name for change default multiple UI (parent and children), can reuse
    */
    ui: PropTypes.oneOf([
      'error',
      'success'
    ]),

    /**
    * [Example] - modifier name for change default multiple UI (parent and children), can't reuse
    */
    uiFor: PropTypes.oneOf([
      'special'
    ]),

    /**
    * [Example] - source icon (path/url)
    */
    srcIcon: PropTypes.string
  }

  static Children = ExampleChildren

  render () {
    const {
      className,
      children,
      ui,
      uiFor,
      srcIcon
    } = this.props

    // props for css classes
    const uiClasses = ClassNames(ui)
    const uiForClasses = ClassNames(uiFor)
    const classes = ClassNames(
      'example',
      { [`is-ui-${uiClasses}`]: uiClasses },
      { [`is-ui-for-${uiForClasses}`]: uiForClasses },
      className
    )

    return (
      <ExampleWrapper
        className={classes}
      >
        <img className='example-icon' alt='Icon'
          src={srcIcon}
        />
        {children}
      </ExampleWrapper>
    )
  }
}
