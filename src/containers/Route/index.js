import React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import {
  MainLayoutContainer,
  HomeContainer,
  StoryContainer,
  StoryDonationContainer,

  SubDonationContainer,
  StoryMainContainer,
  StorySubProjectContainer,

  HistoryContainer,
  HistoryMonthlyContainer,
  HistoryMonthlyEmptyContainer

} from 'containers'
import {
  context
} from 'context'
import {
  ROUTE_PATH
} from 'helpers'
import {
  // Transition
} from 'components'

import { TransitionGroup, CSSTransition } from 'react-transition-group'


export class RouteContainer extends React.Component {
  constructor(props) {
    super(props)
    context.setRedirect(this.props.history.push)
  }

  render() {

    const {
      location
    } = this.props

    //console.log(location)

    const currentKey = location.pathname.split('/')[2] || 'root'
    //const timeout = { enter: 8000, exit: 8000 }
    const timeout = { enter: 5000, exit: 5000 }

    console.log(currentKey)

    return (
      <MainLayoutContainer>
      <TransitionGroup component="main" className="page-main">
        <CSSTransition
          key={location.key}
          timeout={timeout} classNames={currentKey === 'root' ? 'reversePageSwap fade'  : 'pageSwap fade'
        }
        >
          <section className='page-main-inner'>
            <Switch location={location}>
              {/* Use props 'exact' for match single container(not share container) */}
              <Route exact path={ROUTE_PATH.HOME.LINK} component={HomeContainer} />

              <Route exact path={ROUTE_PATH.STORY.LINK} component={StoryContainer} />
              <Route exact path={ROUTE_PATH.STORYDONATION.LINK} component={StoryDonationContainer} />

              <Route exact path={ROUTE_PATH.SUBDONATION.LINK} component={SubDonationContainer} />
              <Route exact path={ROUTE_PATH.STORYMAIN.LINK} component={StoryMainContainer} />
              <Route exact path={ROUTE_PATH.STORYSUBPROJECT.LINK} component={StorySubProjectContainer} />

              <Route exact path={ROUTE_PATH.HISTORY.LINK} component={HistoryContainer} />
              <Route exact path={ROUTE_PATH.HISTORYMONTHLY.LINK} component={HistoryMonthlyContainer} />
              <Route exact path={ROUTE_PATH.HISTORYMONTHLYEMPTY.LINK} component={HistoryMonthlyEmptyContainer} />
            </Switch>
          </section>
          </CSSTransition>
        </TransitionGroup>

        {/* </Transition> */}
      </MainLayoutContainer>
    )
  }
}
