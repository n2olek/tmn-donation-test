import React from 'react'
import { Link } from "react-router-dom";
import ClassNames from 'classnames'
import {
  CardWrapper
} from './styled'
import Swiper from 'react-id-swiper';

class CardHasAvatar extends React.PureComponent {
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
      'card-content',
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

class CardAvatar extends React.PureComponent {
  render () {
    const {
      className,
      children,
      ui,
      uiFor,
      onLink
    } = this.props

    // props for css classes
    const uiClasses = ClassNames(ui)
    const uiForClasses = ClassNames(uiFor)
    const classes = ClassNames(
      'card-avatar',
      { [`is-ui-${uiClasses}`]: uiClasses },
      { [`is-ui-for-${uiForClasses}`]: uiForClasses },
      className
    )

    //console.log(onLink);
    return (
      <div className={classes}>
        <Link to={onLink ? onLink: ''}>
          {children}
        </Link>
      </div>
    )
  }
}


class CardItem extends React.PureComponent {
  render () {
    const {
      className,
      children,
      ui,
      uiFor,
      srcImage
    } = this.props

    // props for css classes
    const uiClasses = ClassNames(ui)
    const uiForClasses = ClassNames(uiFor)
    const classes = ClassNames(
      'card-item',
      { [`is-ui-${uiClasses}`]: uiClasses },
      { [`is-ui-for-${uiForClasses}`]: uiForClasses },
      className
    )

    const divStyle = {
      backgroundImage: `url('${srcImage}')`,
    }

    return (
      <div className={classes} style={divStyle}>
        {/* <div className='card-item'>
          <img src={srcImage} alt="img" className='img'/>
          {children}
        </div> */}
        {children}
        <div className='card-ribbin'></div>
        <div className='card-backdrop'>
          <div className='card-filter' style={divStyle}></div>
        </div>
      </div>
    )
  }
}

// class CardContent extends React.PureComponent {
//   render () {
//     const {
//       className,
//       children,
//       ui,
//       uiFor,
//       buttonName,
//       onClick
//     } = this.props

//     // props for css classes
//     const uiClasses = ClassNames(ui)
//     const uiForClasses = ClassNames(uiFor)
//     const classes = ClassNames(
//       'card-contents',
//       { [`is-ui-${uiClasses}`]: uiClasses },
//       { [`is-ui-for-${uiForClasses}`]: uiForClasses },
//       className
//     )

//     return (
//       <div className={classes}>
//         <div className='card-content'>
//           {children}
//         </div>
//         {
//           buttonName &&
//           <div className='card-button'>
//             <button onClick={onClick}
//               className={buttonName? 'buttton-block' : 'button-icon'}
//             >
//               {
//                 buttonName ?
//                 <React.Fragment>{buttonName}</React.Fragment>
//                 :
//                 <img src={require('./images/icon-arrow.svg')} className='img-arrow' alt='icon arrow' title='icon arrow'/>
//               }
//             </button>
//           </div>
//         }
//       </div>
//     )
//   }
// }

class CardHeader extends React.PureComponent {
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
      'card-header',
      { [`is-ui-${uiClasses}`]: uiClasses },
      { [`is-ui-for-${uiForClasses}`]: uiForClasses },
      className
    )

    return (
      <div className={classes}>
        <h3>{children}</h3>
      </div>
    )
  }
}

class CardDescription extends React.PureComponent {
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
      'card-description',
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

// class ListButton extends React.PureComponent {
//   render () {
//     const {
//       className,
//       children,
//       ui,
//       uiFor,
//       onClick
//     } = this.props

//     // props for css classes
//     const uiClasses = ClassNames(ui)
//     const uiForClasses = ClassNames(uiFor)
//     const classes = ClassNames(
//       'list-button',
//       { [`is-ui-${uiClasses}`]: uiClasses },
//       { [`is-ui-for-${uiForClasses}`]: uiForClasses },
//       className
//     )

//     return (
//       <div className={classes} onClick={onClick}>
//         <button>
//           {children}
//         </button>
//       </div>
//     )
//   }
// }

/**
 * List description
 * A List provides a short summary of content
 */

export class Card extends React.PureComponent {
  static Avatar       =   CardAvatar
  static Item         =   CardItem
  //static Content      =   CardContent
  static Header       =   CardHeader
  static Description  =   CardDescription
  static Content      =   CardHasAvatar
  //static Button       =   ListButton
  //static ContentButton  =   ListContentButton

  render () {
    const {
      className,
      children,
      body,
      bodyFor
    } = this.props

    const params = {
      slidesPerView: 'auto',
    };

    // props for css classes
    const bodyClasses = ClassNames(body)
    const bodyForClasses = ClassNames(bodyFor)

    const classes = ClassNames(
      'card',
      { [`is-ui-${bodyClasses}`]: bodyClasses },
      { [`is-ui-for-${bodyForClasses}`]: bodyForClasses },
      className
    )

    return (
      <CardWrapper
        className={classes}
        >
        <Swiper {...params}>
          {children}
        </Swiper>
      </CardWrapper>
    )
  }
}
