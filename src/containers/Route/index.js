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

function getPathDepth(location) {
  let pathArr = (location || {}).pathname.split('/');
  pathArr = pathArr.filter(n => n !== '');
  return pathArr.length;
}

export class RouteContainer extends React.Component {
  constructor(props) {
    super(props)
    context.setRedirect(this.props.history.push)
    this.state = {
      prevDepth: getPathDepth(props.location),
    }
  }

  componentWillReceiveProps () {
    this.setState({ prevDepth: getPathDepth(this.props.location) })
  }

  render() {
    const {
      location
    } = this.props

    //console.log(location)

    const currentKey = location.pathname.split('/')
    //const timeout = { enter: 8000, exit: 8000 }
    const timeout = { enter: 500, exit: 100 }

    const setting = getPathDepth(location) ? 'left fade' : 'right fade'

    console.log(currentKey)
    console.log(setting)
    console.log(getPathDepth(location))

    return (
      <MainLayoutContainer>
      <TransitionGroup component="main" className="page-main">
        <CSSTransition
          key={currentKey}
          timeout={timeout}
          // classNames={currentKey === 'root' ? 'reversePageSwap fade'  : 'pageSwap fade'

          classNames={setting}
          mountOnEnter={ true }
          unmountOnExit={ true }
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
