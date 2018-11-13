import React from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'
import {
  ButtonWrapper
} from './styled'

/**
 * Button description
 * A Button provides a short summary of content
 */

export class Button extends React.PureComponent {
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

  render () {
    const {
      className,
      children,
      size,
      ui,
      uiFor,
      outline,
      fluid,
      disable,
      active,
      primary,
      secondary,
      onClick,
      srcIcon,
      icon
    } = this.props

    // props for css classes
    const sizeClasses = ClassNames(size)
    const uiClasses = ClassNames(ui)
    const uiForClasses = ClassNames(uiFor)

    const useKeyOnly = (val, key) => val && key
    const baseClasses = ClassNames(
      useKeyOnly(fluid, 'is-ui-fluid'),
      useKeyOnly(outline, 'is-ui-outline'),
      useKeyOnly(disable, 'is-ui-disable'),
      useKeyOnly(active, 'is-ui-active'),
      useKeyOnly(primary, 'is-ui-primary'),
      useKeyOnly(secondary, 'is-ui-secondary'),
      useKeyOnly(icon, 'is-ui-icon')
    )

    const classes = ClassNames(
      'button',
      baseClasses,
      { [`is-ui-${sizeClasses}`]: sizeClasses },
      { [`is-ui-${uiClasses}`]: uiClasses },
      { [`is-ui-for-${uiForClasses}`]: uiForClasses },
      className
    )

    return (
      <ButtonWrapper
        className={classes}
        onClick={onClick}
        >
        {
          srcIcon ?
          <img className='button-icon' alt='Icon'
            src={srcIcon}
          />
          :
          <React.Fragment>{children}</React.Fragment>
        }

      </ButtonWrapper>
    )
  }
}
