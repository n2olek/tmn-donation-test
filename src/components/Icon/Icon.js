import React from 'react'
import ClassNames from 'classnames'
import {
  IconWrapper
} from './styled'

/**
 * Icon description
 * A Image provides a short summary of content
 */

export class Icon extends React.PureComponent {
  renderByName = (name) => {
    switch (name) {
      case 'clock':
        return `${require('./images/icon-clock.svg')}`
      default:
        return ''
    }
  }


  render () {
    const {
      className,
      body,
      bodyFor,
      name
    } = this.props

    // props for css classes
    const bodyClasses = ClassNames(body)
    const bodyForClasses = ClassNames(bodyFor)
    const iconForClasses = ClassNames(name)

    const classes = ClassNames(
      'Icon',
      { [`is-icon-${iconForClasses}`]: iconForClasses },
      { [`is-ui-${bodyClasses}`]: bodyClasses },
      { [`is-ui-for-${bodyForClasses}`]: bodyForClasses },
      className
    )

    return (
      <IconWrapper
        className={classes}
        src={this.renderByName(name)}
      />
    )
  }
}
