import React from 'react'
import ClassNames from 'classnames'
import {
  ImageWrapper
} from './styled'

/**
 * Image description
 * A Image provides a short summary of content
 */

export class Image extends React.PureComponent {
  render () {
    const {
      className,
      body,
      bodyFor,
      srcImage,
      avatar,
      list,
      circle
    } = this.props

    // props for css classes
    const bodyClasses = ClassNames(body)
    const bodyForClasses = ClassNames(bodyFor)

    const useKeyOnly = (val, key) => val && key
    const baseClasses = ClassNames(
      useKeyOnly(avatar, 'avatar'),
      useKeyOnly(list, 'list'),
      useKeyOnly(circle, 'circle')
    )

    const classes = ClassNames(
      'image',
      { [`image-${baseClasses}`]: baseClasses },
      { [`is-ui-${bodyClasses}`]: bodyClasses },
      { [`is-ui-for-${bodyForClasses}`]: bodyForClasses },
      className
    )

    return (
      <ImageWrapper
        className={classes}
        src={srcImage}
        >
      </ImageWrapper>
    )
  }
}
