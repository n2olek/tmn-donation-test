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
  CONTENTS
} from 'themes'

export class StorySubProjectContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppBody className='story'>
          <BannerIntro>
            <img src={CONTENTS['image-card-1.jpg']} alt=""/>
          </BannerIntro>
          <Header srcAvatar={LOGOS['logo-1.jpg']}>
            <h3>เชิญร่วมบริจาคสมทบทุน <br/>โครงการสานฝันให้เด็ก</h3>
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
