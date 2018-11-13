import React from 'react'

const Context = React.createContext()

export let context = {}
export let redirect = () => {}

const setContext = (self) => {
  return {
    state: self.state,
    setContext: (setStateObj, callback) => {
      self.setState(setStateObj, callback)
    },
    setRedirect: (historyPush) => {
      redirect = historyPush
    }
  }
}

export const Provider = ({ app, children }) => {
  return (
    <Context.Provider value={setContext(app)}>
      <Context.Consumer>
        {
          contextValue => {
            context = contextValue
            return (
              children
            )
          }
        }
      </Context.Consumer>
    </Context.Provider>
  )
}

export const withContext = Component => (props) => {
  return (
    <Context.Consumer>
      {
        context => {
          return (
            <Component
              {...props}
              context={context.state}
            />
          )
        }
      }
    </Context.Consumer>
  )
}
