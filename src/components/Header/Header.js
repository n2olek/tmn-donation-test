import React from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'
import {
  HeaderWrapper
} from './styled'

class HeaderContent extends React.PureComponent {
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
      'header-content',
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

class HeaderButton extends React.PureComponent {
  render () {
    const {
      className,
      children,
      ui,
      uiFor,
      buttonName,
      onClick
    } = this.props

    // props for css classes
    const uiClasses = ClassNames(ui)
    const uiForClasses = ClassNames(uiFor)
    const classes = ClassNames(
      'header-button',
      { [`is-ui-${uiClasses}`]: uiClasses },
      { [`is-ui-for-${uiForClasses}`]: uiForClasses },
      className
    )

    return (
      <div className={classes}>
        {children}
        <button
          onClick={onClick}
        >
          {buttonName}
        </button>
      </div>
    )
  }
}

/**
 * Header description
 * A header provides a short summary of content
 */

export class Header extends React.PureComponent {
  static defaultProps = {
    //srcIcon: require('./images/icon-example.svg')
    //srcIcon: false
  }

  static propTypes = { // TYPE > node, string, func, bool
    /**
    * [Header] and [Header.Children] - additional classes
    */
    className: PropTypes.string,

    /**
    * [Header] and [Header.Children] - additional elements or text
    */
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.string
    ]),

    /**
    * [Header] - modifier name for change default multiple UI (parent and children), can reuse
    */
    ui: PropTypes.oneOf([
      'error',
      'success'
    ]),

    /**
    * [Header] - modifier name for change default multiple UI (parent and children), can't reuse
    */
    uiFor: PropTypes.oneOf([
      'special'
    ]),

    /**
    * [Header] - source icon (path/url)
    */
    //srcIcon: PropTypes.string
  }

  static Content  =   HeaderContent
  static Button   =   HeaderButton

  render () {
    const {
      className,
      children,
      ui,
      uiFor,
      srcAvatar,
      first,
      second,
      //shadow
    } = this.props

    // props for css classes
    const uiClasses = ClassNames(ui)
    const uiForClasses = ClassNames(uiFor)

    const useKeyOnly = (val, key) => val && key
    const baseClasses = ClassNames(
      useKeyOnly(first, 'first'),
      useKeyOnly(second, 'second')
    )

    const classes = ClassNames(
      'header',
      { [`header-${baseClasses}`]: baseClasses },
      { [`is-ui-${uiClasses}`]: uiClasses },
      { [`is-ui-for-${uiForClasses}`]: uiForClasses },
      className
    )

    return (
      srcAvatar ?
      <HeaderWrapper
        className={classes}
      >
        <img className='header-icon' alt='Icon'
          src={srcAvatar}
        />
        <div className='header-item'>
          {children}
        </div>
      </HeaderWrapper>
      :
      <HeaderWrapper
        className={classes}>
        <div className='header-item'>
          {children}
        </div>
      </HeaderWrapper>
    )
  }
}
