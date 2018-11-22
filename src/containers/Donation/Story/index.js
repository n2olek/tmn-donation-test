import React from 'react'
import {
  // ROUTE_PATH,
  // redirect
} from 'helpers'
import {
  Header,
  Button,
  AppBody,
  BannerIntro
} from 'components'
import {
  LOGOS,
  CONTENTS,
  ICONS
} from 'themes'

export class StoryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack () {
    this.props.history.goBack();
  }

  render() {
    return (
      <React.Fragment>
        <Button icon
          srcIcon={ICONS['icon-close.svg']}
          ui='close'
          uiFor='special'
          onClick={this.goBack}
        />
        <AppBody className='story'>
          <BannerIntro>
            <img src={CONTENTS['top-banner.jpg']} alt=""/>
          </BannerIntro>
          <Header srcAvatar={LOGOS['logo-2.jpg']}>
            <h3>เรื่องราวของเรา</h3>
          </Header>
          <AppBody.Content>
            <p>
              ปี 2559 คนไทยทั่วประเทศร่วมใจกันเพื่อช่วยเหลือโรงพยาบาลขนาดกลางแห่งหนึ่งในอำเภอบางสะพาน จังหวัดประจวบคีรีขันธ์ ซึ่งขาดแคลนอุปกรณ์ทางการแพทย์ที่จำเป็นหลายรายการ ในโครงการ "ก้าวคนละก้าวเพื่อโรงพยาบาลบางสะพาน" โดย ตูน บอดี้สแลม ซึ่งทำการระดมทุนด้วยการ วิ่งระยะไกล
              <br/><br/>
              เริ่มต้นจาก กรุงเทพมหานคร สิ้นสุดที่ โรงพยาบาลบางสะพาน จังหวัดประจวบคีรีขันธ์ รวมเป็นระยะทาง 400 กิโลเมตร และสามารถระดมทุนจากคนไทยทั่วประเทศได้ถึง 85 ล้านบาท และเป็นแรงบันดาลใจให้คนไทยลุกขึ้นมาออกกำลังกายด้วยการวิ่งจนฮิตเป็นกระแสไปทั่วประเทศ
              <br/><br/>
              แต่ปัญหาด้านสาธารณสุขของประเทศไทยไม่ได้หยุดอยู่ที่ รพ.บางสะพาน เพียงแห่งเดียว ยังมีอีกหลายโรงพยาบาลที่เดือดร้อนและต้องการความช่วยเหลือ เพื่อเพิ่มศักยภาพใน
              <br/><br/>
            </p>
          </AppBody.Content>
          <AppBody.Button hasBG>
            <Button fluid primary size='large'
              //onClick={onClick}
            >
              ร่วมบริจาค
            </Button>
          </AppBody.Button>
        </AppBody>
      </React.Fragment>
    )
  }
}
