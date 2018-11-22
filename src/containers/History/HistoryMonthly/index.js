import React from 'react'
import {
  List,
  AppBody,
  Image
} from 'components'
import {
  LOGOS
} from 'themes'
import {
  ROUTE_PATH,
  redirect
} from 'helpers'

export class HistoryMonthlyContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppBody className='view-history-monthly'>
        <List>
            <List.Item>
              <Image list
                srcImage={LOGOS['logo-4.jpg']}
            />
              <List.Content
                buttonName='ดูรายละเอียด'
                onClick={() => {
                  redirect(ROUTE_PATH.HISTORYMONTHLYEMPTY.LINK)
                }}
              >
                <List.Header>มูลนิธิโรงพยาบาลสมเด็จสมเด็จสมเด็จ</List.Header>
              </List.Content>
            </List.Item>
            <List.Item>
              <Image list
                srcImage={LOGOS['logo-1.jpg']}
              />
              <List.Content
                buttonName='ดูรายละเอียด'
                onClick={() => {
                  redirect(ROUTE_PATH.HISTORYMONTHLYEMPTY.LINK)
                }}
              >
                <List.Header>มูลนิธิออทิสติกไทย</List.Header>
              </List.Content>
            </List.Item>
            <List.Item>
              <Image list
                srcImage={LOGOS['logo-2.jpg']}
              />
              <List.Content
                buttonName='ดูรายละเอียด'
                onClick={() => {
                  redirect(ROUTE_PATH.HISTORYMONTHLYEMPTY.LINK)
                }}
              >
                <List.Header>สภากาชาดไทย</List.Header>
              </List.Content>
            </List.Item>
          </List>
        </AppBody>
      </React.Fragment>
    )
  }
}
