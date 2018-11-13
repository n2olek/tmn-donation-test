import React from 'react'
import {
  ROUTE_PATH,
  redirect
} from 'helpers'
import {
  Header,
  Button,
  AppBody,
  BannerIntro
} from 'components'
import {
  LOGOS,
  CONTENTS
} from 'themes'

export class SubDonationContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppBody className='sub-donation'>
          <BannerIntro hasSlide
              srcProfile={LOGOS['sample-logo.svg']}
            >
            <div>
              <img src={CONTENTS['sample-content.jpg']} alt=""/>
            </div>
            <div>
              <img src={CONTENTS['sample-content.jpg']} alt=""/>
            </div>
            <div>
              <img src={CONTENTS['sample-content.jpg']} alt=""/>
            </div>
          </BannerIntro>
          <Header>
            <h1>มูลนิธิออทิสติกไทย</h1>
            <Header.Content>
              องค์กรการกุศลระดับชาติ ร่วมบริจาคให้กับโครงการของเรา
              <Button outline secondary
                size='small'
                onClick={() => {
                  redirect(ROUTE_PATH.ABOUT.LINK)
                }}
              >
                เกี่ยวกับมูลนิธิ
              </Button>
            </Header.Content>
          </Header>
        </AppBody>
      </React.Fragment>
    )
  }
}
