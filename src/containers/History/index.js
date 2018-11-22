import React from 'react'
import { Link } from "react-router-dom";
import {
  ROUTE_PATH,
  // redirect
} from 'helpers'
import {
  Header,
  AppBody,
  AppreciationCard
} from 'components'
import {
  LOGOS,
  CONTENTS
} from 'themes'


export class HistoryContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppBody className='view-history'>
          <div className='donated-block'>
            <div className='donated-description'>
              คุณบริจาคไปแล้วทั้งหมด
            </div>
            <div className='donated-currency'>
              5,750.00 ฿
            </div>
          </div>
          <Header>
            <h3>คำขอบคุณจากมูลนิธิ </h3>
          </Header>
          <div className='view-block'>
            <div className='view-description'>ทั้งหมด 3 มูลนิธิ</div>
            <div className='view-monthly'>
              <Link to={ROUTE_PATH.HISTORYMONTHLY.LINK}>
                ดูมูลนิธิที่บริจาครายเดือน
              </Link>
            </div>
          </div>
          <AppreciationCard>
            <AppreciationCard.Item>
              <AppreciationCard.Image
                srcImage={CONTENTS['image-card-1.jpg']}
              />
              <AppreciationCard.Content
                srcLogo={ LOGOS['logo-1.jpg'] }
                headerName='มูลนิธิออทิสติกไทย'
                content='ขอขอบคุณสำหรับความสุขที่มอบมาให้'
                currency='150 ฿'
                date='01/03/61 เวลา 12:00 น.'
              />
            </AppreciationCard.Item>
            <AppreciationCard.Item>
              <AppreciationCard.Image
                srcImage={CONTENTS['image-card-2.jpg']}
              />
              <AppreciationCard.Content
                srcLogo={ LOGOS['sample-logo.svg'] }
                headerName='ก้าวคนละก้าว'
                content='ขอขอบคุณสำหรับความสุขที่มอบมาให้'
                currency='30 ฿'
                date='01/03/61 เวลา 12:00 น.'
              />
            </AppreciationCard.Item>
          </AppreciationCard>
        </AppBody>
      </React.Fragment>
    )
  }
}
