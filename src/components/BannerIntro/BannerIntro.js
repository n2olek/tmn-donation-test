import React from 'react'
import ReactPlayer from 'react-player'
import ClassNames from 'classnames'
import {
  BannerIntroWrapper
} from './styled'
import Swiper from 'react-id-swiper';

class BannerIntroMedia extends React.PureComponent {
  static defaultProps = {
    controls: true
  }

  render() {
    const {
      className,
      ui,
      uiFor,
      src,
      controls,
      isMediaPlay,
      onClickMediaPause,
      onClickMediaPlay
    } = this.props

    // props for css classes
    const uiClasses = ClassNames(ui)
    const uiForClasses = ClassNames(uiFor)
    const classes = ClassNames(
      'banner-intro-media',
      { [`is-ui-${uiClasses}`]: uiClasses },
      { [`is-ui-for-${uiForClasses}`]: uiForClasses },
      className
    )

    return (
      <div className={classes}>
        <ReactPlayer className='banner-intro-media-type'
          url={src}
          controls={controls}
          playing={isMediaPlay}
        />
        {
          isMediaPlay ?
            <div className='banner-intro-media-control-button'
              onClick={onClickMediaPause}
            />
            :
            <div className='banner-intro-media-control-button'
              onClick={onClickMediaPlay}
            />
        }
      </div>
    )
  }
}

/**
 * BannerIntro description
 * ...
 */

export class BannerIntro extends React.PureComponent {
  static defaultProps = {
    carouselOptions: {
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
      }
    }
  }

  static Media = BannerIntroMedia

  render() {
    const {
      children,
      className,
      ui,
      uiFor,
      srcProfile,
      hasSlide,
      isCarousel,
      carouselOptions
    } = this.props

    // props for css classes
    const uiClasses = ClassNames(ui)
    const uiForClasses = ClassNames(uiFor)
    const classes = ClassNames(
      'banner-intro',
      { [`is-ui-${uiClasses}`]: uiClasses },
      { [`is-ui-for-${uiForClasses}`]: uiForClasses },
      { [`is-ui-for-profile`]: srcProfile },
      className
    )

    return (
      <BannerIntroWrapper
        className={classes}
      >
        {
          isCarousel ?
            <Swiper
              {...carouselOptions}
            >
              {children}
            </Swiper>
            :
            <div className='banner-container'>
              {
                hasSlide ?
                  <div className='banner-item'>
                    <Swiper
                      {...carouselOptions}
                    >
                      {children}
                    </Swiper>
                  </div>
                  :
                  <div className='banner-item'>
                    {children}
                  </div>
              }
            </div>
        }
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
