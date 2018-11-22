import React from 'react'
import {
  AppBody,
  Search,
  List,
  Image
} from 'components'
import {
  LOGOS,
} from 'themes'
import {
  ROUTE_PATH,
  redirect
} from 'helpers'

export class SearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputVal: ''
    };
  }

  componentDidMount() {}

  handleOnClick = () => {
    this.clearForm();
  }

  clearForm = () => {
    this.setState({
      inputVal: ''
    })
  }

  render() {
    return (
      <React.Fragment>
        <AppBody className='search-filter'>

          <Search
            type='text'
            value={this.inputVal}
            onClick={this.handleOnClick}
            onChange={() => {}}
          />

          <List>
            <List.Item
              toLink = {ROUTE_PATH.STORY.LINK}
            >
              <Image list
                srcImage={LOGOS['logo-3.jpg']}
            />
              <List.Content
                onClick={() => {
                  redirect(ROUTE_PATH.STORY.LINK)
                }}
              >
                <List.Header>ก้าวคนละก้าว</List.Header>
                <List.Description>ร่วมส่งกำลังใจให้พี่ตูนเพื่อ 11 โรงพยาบาลทั่วประเทศ</List.Description>
              </List.Content>
            </List.Item>
          </List>
        </AppBody>
      </React.Fragment>
    )
  }
}
