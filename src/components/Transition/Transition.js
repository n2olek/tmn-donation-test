import React from 'react'
import ClassNames from 'classnames'
import {
  TransitionWrapper
} from './styled'
import { TransitionGroup, CSSTransition } from "react-transition-group";

/**
 * Transition description
 * A Transition provides a short summary of content
 */

export class Transition extends React.PureComponent {
  render () {
    const {
      className,
      ui,
      uiFor,
      children,
      key,
      timeout,
      classNames
    } = this.props

    // props for css classes
    const uiClasses = ClassNames(ui)
    const uiForClasses = ClassNames(uiFor)

    const classes = ClassNames(
      'transition',
      { [`is-ui-${uiClasses}`]: uiClasses },
      { [`is-ui-for-${uiForClasses}`]: uiForClasses },
      className
    )

    return (
      <TransitionWrapper
        className={classes}
        >
        <TransitionGroup className='transition-group'>
          <CSSTransition
            key={key}
            timeout={timeout}
            classNames={classNames}
            appear
            in
          >
            <section className='route-section'>
              {children}
            </section>
          </CSSTransition>
        </TransitionGroup>
      </TransitionWrapper>
    )
  }
}
