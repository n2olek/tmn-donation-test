import React from 'react'
import {
  // ROUTE_PATH,
  // redirect
} from 'helpers'
import {
  Header,
  Button,
  AppBody,
  BannerIntro,
  Donate,
  Notications,
  Icon
} from 'components'
import {
  LOGOS,
  CONTENTS
} from 'themes'

export class StoryDonationContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppBody className='story'>
          <BannerIntro>
            <img src={CONTENTS['top-banner.jpg']} alt=""/>
          </BannerIntro>
          <Donate>
            <Donate.Content>
              <Donate.Item
                number={1250}
                unit='คน'
                content='จำนวนผู้บริจาค'
              />
              <Donate.Item active
                number={75231}
                unit='฿'
                content='ยอดบริจาค'
              />
              <Donate.Item
                number={100000}
                unit='฿'
                content='เป้าหมาย'
              />
            </Donate.Content>
            <Donate.Inprogress
              inProgress={65}
            />
            <Notications>
              <Icon name='clock'/>
              <Notications.Content>เหลือเวลาบริจาคอีก 12 วัน</Notications.Content>
            </Notications>
          </Donate>
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
