import React from 'react'
import ClassNames from 'classnames'
import {
  SearchWrapper
} from './styled'

/**
 * Search description
 * A Search provides a short summary of content
 */

export class Search extends React.PureComponent {
  static defaultProps = {
    //srcIcon: require('./images/icon-example.svg')
    //srcIcon: false
  }

  render () {
    const {
      className,
      ui,
      uiFor,
      icon,
      placeholder,
      name,
      type,
      // value,
      onChange,
      // onPress
      onClick
    } = this.props

    // props for css classes
    const uiClasses = ClassNames(ui)
    const uiForClasses = ClassNames(uiFor)

    const classes = ClassNames(
      'search',
      { [`is-ui-${uiClasses}`]: uiClasses },
      { [`is-ui-for-${uiForClasses}`]: uiForClasses },
      className
    )

    return (
      <SearchWrapper
        className={classes}
        >
          <form id={name}>
            <div className='search-box'>
              {
                icon &&
                <img src={require('./images/icon-search.svg')} alt="icon search" className='icon-search'/>
              }
              <input
                type={type}
                placeholder={placeholder}
                name={name}
                // value={value}
                onChange={onChange}
                // onPress={onPress}
              />
              {
                onClick &&
                <button className='button-close' type='reset'
                  onClick={onClick}
                >
                  <img src={require('./images/icon-close.svg')} alt="icon close" className='icon-close'/>
                </button>
              }
            </div>
          </form>

      </SearchWrapper>
    )
  }
}
