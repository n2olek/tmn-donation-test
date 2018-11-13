import React from 'react'
import ClassNames from 'classnames'
import {
  DonateWrapper
} from './styled'

class DonateInprogress extends React.PureComponent {
  render () {
    const {
      className,
      inProgress,
      ui,
      uiFor
    } = this.props

    //console.log(inProgress);

    // props for css classes
    const uiClasses = ClassNames(ui)
    const uiForClasses = ClassNames(uiFor)
    const classes = ClassNames(
      'donate-inprogress',
      { [`is-ui-${uiClasses}`]: uiClasses },
      { [`is-ui-for-${uiForClasses}`]: uiForClasses },
      className
    )

    const inprogressBarStyle = {
      width: `${inProgress}%`,
    };

    return (
      <div className={classes}>
        <div className='donate-block' style={inprogressBarStyle}></div>
      </div>
    )
  }
}

class DonateItem extends React.PureComponent {
  render () {
    const {
      className,
      ui,
      uiFor,
      number,
      content,
      unit,
      active
    } = this.props

    // props for css classes
    const uiClasses = ClassNames(ui)
    const uiForClasses = ClassNames(uiFor)
    const classes = ClassNames(
      'donate-item',
      { [`is-ui-active`]: active },
      { [`is-ui-${uiClasses}`]: uiClasses },
      { [`is-ui-for-${uiForClasses}`]: uiForClasses },
      className
    )

    return (
      <div className={classes}>
        <div className='donate-number'>{number} {unit}</div>
        <div className='donate-description'>{content}</div>
      </div>
    )
  }
}

class DonateContent extends React.PureComponent {
  render () {
    const {
      className,
      children,
      ui,
      uiFor,
    } = this.props

    // props for css classes
    const uiClasses = ClassNames(ui)
    const uiForClasses = ClassNames(uiFor)
    const classes = ClassNames(
      'donate-content',
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
 * Donate description
 * A Donate provides a short summary of content
 */

export class Donate extends React.PureComponent {
  static Inprogress   =   DonateInprogress
  static Content      =   DonateContent
  static Item         =   DonateItem

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
      'donate',
      { [`is-ui-${bodyClasses}`]: bodyClasses },
      { [`is-ui-for-${bodyForClasses}`]: bodyForClasses },
      className
    )

    return (
      <DonateWrapper
        className={classes}
        >
        {children}
      </DonateWrapper>
    )
  }
}
