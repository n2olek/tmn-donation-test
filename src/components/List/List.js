import React from 'react'
import { Link } from "react-router-dom";
import ClassNames from 'classnames'
import {
  ListWrapper
} from './styled'

class ListItem extends React.PureComponent {
  render () {
    const {
      className,
      children,
      ui,
      uiFor,
      toLink
    } = this.props

    //console.log(toLink)
    // props for css classes
    const uiClasses = ClassNames(ui)
    const uiForClasses = ClassNames(uiFor)
    const classes = ClassNames(
      'list-item',
      { [`is-ui-${uiClasses}`]: uiClasses },
      { [`is-ui-for-${uiForClasses}`]: uiForClasses },
      className
    )

    return (
      <div className={classes}>
        {
          toLink ?
          <Link to={toLink ? toLink : '/'}>
            {children}
          </Link>
        :
        <React.Fragment>
          {children}
        </React.Fragment>
        }
      </div>
    )
  }
}

// class ListContent extends React.PureComponent {
//   render () {
//     const {
//       className,
//       children,
//       ui,
//       uiFor
//     } = this.props

//     // props for css classes
//     const uiClasses = ClassNames(ui)
//     const uiForClasses = ClassNames(uiFor)
//     const classes = ClassNames(
//       'list-content',
//       { [`is-ui-${uiClasses}`]: uiClasses },
//       { [`is-ui-for-${uiForClasses}`]: uiForClasses },
//       className
//     )

//     return (
//       <div className={classes}>
//         {children}
//       </div>
//     )
//   }
// }

class ListContent extends React.PureComponent {
  render () {
    const {
      className,
      children,
      ui,
      uiFor,
      buttonName,
      onClick
    } = this.props

    //console.log(onClick)
    // props for css classes
    const uiClasses = ClassNames(ui)
    const uiForClasses = ClassNames(uiFor)
    const classes = ClassNames(
      'list-contents',
      { [`is-ui-${uiClasses}`]: uiClasses },
      { [`is-ui-for-${uiForClasses}`]: uiForClasses },
      className
    )

    return (
      <div className={classes}>
        {
          buttonName ?
          <React.Fragment>
            <div className='list-content'>
              {children}
            </div>
            <div className='list-button'>
              <button
                onClick={onClick}
                className='buttton-outline'
              >
                {buttonName}
              </button>
            </div>
          </React.Fragment>
          :
          <React.Fragment>
            <div className='list-content'>
              {children}
            </div>
            <div className='list-button'>
              <button
                //onClick={onClick}
                className='button-icon'
              >
                <img src={require('./images/icon-arrow.svg')} className='img-arrow' alt='icon arrow' title='icon arrow'/>
              </button>
            </div>
          </React.Fragment>
        }

        {/* {Default on Button} */}

        {/* <div className='list-content'>
          {children}
        </div>
        <div className='list-button'>
          <button onClick={onClick}
            className={buttonName? 'buttton-outline' : 'button-icon'}
          >
            {
              buttonName ?
              <React.Fragment>{buttonName}</React.Fragment>
              :
              <img src={require('./images/icon-arrow.svg')} className='img-arrow' alt='icon arrow' title='icon arrow'/>
            }
          </button>
        </div> */}

      </div>
    )
  }
}

class ListHeader extends React.PureComponent {
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
      'list-header',
      { [`is-ui-${uiClasses}`]: uiClasses },
      { [`is-ui-for-${uiForClasses}`]: uiForClasses },
      className
    )

    return (
      <div className={classes}>
        <h3>
          {children}
        </h3>
      </div>
    )
  }
}

class ListDescription extends React.PureComponent {
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
      'list-description',
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

class ListButton extends React.PureComponent {
  render () {
    const {
      className,
      children,
      ui,
      uiFor,
      onClick
    } = this.props

    // props for css classes
    const uiClasses = ClassNames(ui)
    const uiForClasses = ClassNames(uiFor)
    const classes = ClassNames(
      'list-button',
      { [`is-ui-${uiClasses}`]: uiClasses },
      { [`is-ui-for-${uiForClasses}`]: uiForClasses },
      className
    )

    return (
      <div className={classes} onClick={onClick}>
        <button>
          {children}
        </button>
      </div>
    )
  }
}

/**
 * List description
 * A List provides a short summary of content
 */

export class List extends React.PureComponent {
  static Item         =   ListItem
  static Content      =   ListContent
  static Header       =   ListHeader
  static Description  =   ListDescription
  static Button       =   ListButton
  //static ContentButton  =   ListContentButton

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
      'list',
      { [`is-ui-${bodyClasses}`]: bodyClasses },
      { [`is-ui-for-${bodyForClasses}`]: bodyForClasses },
      className
    )

    return (
      <ListWrapper
        className={classes}
        >
        {children}
      </ListWrapper>
    )
  }
}
