import React from 'react'
import ClassNames from 'classnames'
import {
  VideoWrapper
} from './styled'
import ReactPlayer from 'react-player'
import {
  ICONS,
  // LOGOS,
  // CONTENTS
} from 'themes'

/**
 * Video description
 * A Video provides a short summary of content
 */

export class Video extends React.PureComponent {
  render () {
    const {
      className,
      ui,
      uiFor,
      onClick,
      url,
      playing,
      hideButton,
      showButton,
      onPause,
      onReady,
      onStart
    } = this.props

    // props for css classes
    const uiClasses = ClassNames(ui)
    const uiForClasses = ClassNames(uiFor)

    const classes = ClassNames(
      'video-player',
      { [`is-ui-${uiClasses}`]: uiClasses },
      { [`is-ui-for-${uiForClasses}`]: uiForClasses },
      className
    )

    return (
      <VideoWrapper
        className={classes}
        >
        <div className='banner-play'
          onClick={onClick}
          style={{display: hideButton ? 'flex' : 'none' }}
        >
          <button>
            <img src={ICONS['icon-play.svg']} alt=""/>
          </button>
        </div>

        {/* <div className='banner-play'
          onClick={onClick}
          style={{display: showButton ? 'flex' : 'none' }}
        >
          <button>
            <img src={ICONS['icon-pause.svg']} alt=""/>
          </button>
        </div> */}

        <ReactPlayer
          url={url}
          playing={playing}
          onStart={onStart}
          onPause={onPause}
          onReady={onReady}
        />
      </VideoWrapper>
    )
  }
}
