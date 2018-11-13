import React from 'react'
import { Link } from "react-router-dom";
import {
  AppBody,
  Image
} from 'components'
import {
  LOGOS
} from 'themes'

export class HistoryMonthlyEmptyContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppBody className='view-history-monthly-empty'>
          <Image circle
            srcImage={LOGOS['sample-logo.svg']}
          />
          <h1>ยังไม่มีการบริจาครายเดือน</h1>
          <p>
            คุณสามารถปันความสุขให้มูลนิธิหรือองค์กร <br/>
            ที่ต้องการได้ทุกเดือน
          </p>
          <Link to='/'>
            เริ่มปันความสุข
          </Link>
        </AppBody>
      </React.Fragment>
    )
  }
}
