import React from 'react'
import ClassNames from 'classnames'
import {
  AppreciationCardWrapper
} from './styled'

class AppreciationCardItem extends React.PureComponent {
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
      'appreciation-card-item',
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

class AppreciationCardImage extends React.PureComponent {
  render () {
    const {
      className,
      srcImage,
      ui,
      uiFor
    } = this.props

    // props for css classes
    const uiClasses = ClassNames(ui)
    const uiForClasses = ClassNames(uiFor)
    const classes = ClassNames(
      'appreciation-card-image',
      { [`is-ui-${uiClasses}`]: uiClasses },
      { [`is-ui-for-${uiForClasses}`]: uiForClasses },
      className
    )

    return (
      <div className={classes}>
        <img src={srcImage} alt="img content" />
      </div>
    )
  }
}

class AppreciationCardContent extends React.PureComponent {
  render () {
    const {
      className,
      ui,
      uiFor,
      headerName,
      content,
      srcLogo,
      currency,
      date
    } = this.props

    // props for css classes
    const uiClasses = ClassNames(ui)
    const uiForClasses = ClassNames(uiFor)
    const classes = ClassNames(
      'appreciation-card-contents',
      { [`is-ui-${uiClasses}`]: uiClasses },
      { [`is-ui-for-${uiForClasses}`]: uiForClasses },
      className
    )

    return (
      <div className={classes}>
        <div className='appreciation-card-logo'>
          <img src={srcLogo} alt="img logo" className='img-logo'/>
        </div>
        <div className='appreciation-card-header'>
          <h3>{headerName}</h3>
        </div>
        <div className='appreciation-card-content'>
          {content}
        </div>
        <div className='appreciation-card-currency'>
          {currency}
        </div>
        <div className='appreciation-card-date'>
          {date}
        </div>
      </div>
    )
  }
}

/**
 * Appreciation Card description
 * A Appreciation Card provides a short summary of content
 */

export class AppreciationCard extends React.PureComponent {
  static Item         =   AppreciationCardItem
  static Image        =   AppreciationCardImage
  static Content      =   AppreciationCardContent

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
      'appreciation-card',
      { [`is-ui-${bodyClasses}`]: bodyClasses },
      { [`is-ui-for-${bodyForClasses}`]: bodyForClasses },
      className
    )

    return (
      <AppreciationCardWrapper
        className={classes}
        >
        {/* <div className='card-block'>
          <div className='card-image'>
            <img src={require('./images/sample-content.jpg')} alt="icon close" className='icon-close'/>
          </div>
          <div className='card-frame'>
            <div className='card-logo'>
              <img src={require('./images/sample-logo.svg')} alt="icon close" className='icon-close'/>
            </div>
            <div className='card-header'>
              <h3>มูลนิธิออทิสติกไทย</h3>
            </div>
            <div className='card-content'>
              ขอขอบคุณสำหรับความสุขที่มอบมาให้
            </div>
            <div className='card-currency'>
              150 ฿
            </div>
            <div className='card-date'>
              01/03/61 เวลา 12:00 น.
            </div>
          </div>
        </div>
        <div className='card-block'>
          <div className='card-image'>
            <img src={require('./images/sample-content.jpg')} alt="icon close" className='icon-close'/>
          </div>
          <div className='card-frame'>
            <div className='card-logo'>
              <img src={require('./images/sample-logo.svg')} alt="icon close" className='icon-close'/>
            </div>
            <div className='card-header'>
              <h3>มูลนิธิออทิสติกไทย</h3>
            </div>
            <div className='card-content'>
              ขอขอบคุณสำหรับความสุขที่มอบมาให้
            </div>
            <div className='card-currency'>
              150 ฿
            </div>
            <div className='card-date'>
              01/03/61 เวลา 12:00 น.
            </div>
          </div>
        </div> */}

        {children}
      </AppreciationCardWrapper>
    )
  }
}
