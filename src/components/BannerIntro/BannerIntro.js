import React from 'react'
import ClassNames from 'classnames'
import {
  BannerIntroWrapper
} from './styled'
import Swiper from 'react-id-swiper';

/**
 * Search description
 * A Search provides a short summary of content
 */

export class BannerIntro extends React.PureComponent {
  static defaultProps = {
    //srcIcon: require('./images/icon-example.svg')
    //srcIcon: false
  }

  render () {
    const {
      children,
      className,
      ui,
      uiFor,
      srcProfile,
      hasSlide
    } = this.props

    // props for css classes
    const uiClasses = ClassNames(ui)
    const uiForClasses = ClassNames(uiFor)

    const classes = ClassNames(
      'banner-intro',
      { [`is-ui-${uiClasses}`]: uiClasses },
      { [`is-ui-for-${uiForClasses}`]: uiForClasses },
      { [`is-ui-for-profile`]: srcProfile},
      className
    )

    const params = {
      centeredSlides: true,
      // effect: 'fade',
      // autoplay: {
      //   delay: 5000,
      //   disableOnInteraction: false
      // },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
    }

    return (
      <BannerIntroWrapper
        className={classes}
        >
        <div className='banner-container'>
          {
            hasSlide?
            <div className='banner-item'>
              <Swiper {...params}>
                {children}
              </Swiper>
            </div>
            :
            <div className='banner-item'>
              {children}
            </div>
          }
        </div>
        {
          srcProfile &&
          <div className='banner-profile'>
            <img className='banner-img' alt='img'
              src={srcProfile}
            />
          </div>
        }
      </BannerIntroWrapper>
    )
  }
}
