import React from 'react'
//import PageTransition from 'react-router-page-transition';
import { TransitionGroup, CSSTransition } from "react-transition-group";

export class MainLayoutContainer extends React.Component {
  render() {
    const {
      children
    } = this.props

    return (
      <React.Fragment>
        <TransitionGroup>
          <CSSTransition
            //key={location.key}
            timeout={{ enter: 300, exit: 300 }}
            classNames="fade"
          >
            {children}
          </CSSTransition>
        </TransitionGroup>
      </React.Fragment>
    )
  }
}
