import React from 'react'

export class MainLayoutContainer extends React.Component {
  render() {
    const {
      children
    } = this.props

    return (
      <React.Fragment>
        {children}
      </React.Fragment>
    )
  }
}
