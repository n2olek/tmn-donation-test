import React from 'react'
import ClassNames from 'classnames'
import {
  BannerIntroWrapper
} from './styled'
import Swiper from 'react-id-swiper';

class BannerIntroItem extends React.PureComponent {
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
      'banner-item',
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

export class BannerIntro extends React.PureComponent {
  static Item       =   BannerIntroItem

  render () {
    const {
      children,
      className,
      ui,
      uiFor,
      srcProfile,
      hasSlide,
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
      // on: {
      //   slideChange: () => {
      //     console.log('Slide change')
      //   }
      // },

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    }

    return (
      <BannerIntroWrapper
        className={classes}
        >
        <div className='banner-container'>
          {
            hasSlide?
            <div className='banner-items'>
              <Swiper {...params} >
                {children}
              </Swiper>
            </div>
            :
            <div className='banner-items'>
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
