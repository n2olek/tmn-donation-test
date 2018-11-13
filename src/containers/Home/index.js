import React from 'react'
import {
  Header,
  // Button,
  AppBody,
  Search,
  BannerIntro,
  List,
  Image,
  Card
} from 'components'
import {
  ICONS,
  LOGOS,
  CONTENTS
} from 'themes'
import {
  ROUTE_PATH,
  redirect
} from 'helpers'

export class HomeContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppBody className='main'>
          <BannerIntro
            hasSlide
          >
            <div>
              <img src={CONTENTS['image-card-2.jpg']} alt=""/>
              <div className='banner-contents'>
                <div className='banner-content'>
                  <h3>ก้าวคนละก้าว</h3>
                  <p>ร่วมส่งกำลังใจให้พี่ตูน เพื่อ 11 โรงพยาบาล ทั่วประเทศ</p>
                </div>
              </div>
                <div className='banner-play'>
                  <img src={ICONS['icon-play.svg']} alt=""/>
                </div>
            </div>
            <div>
              <iframe  title=' ' width="560" height="315" src="https://www.youtube.com/embed/Ftqj4_AsKUI" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
            <div>
              <video className='video-cover' controls>
                <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4" />
              </video>
            </div>
            <div>
              <img src={CONTENTS['banner-intro-2.jpg']} alt=""/>
            </div>
          </BannerIntro>

          <Header>
            <h3>บริจาคผ่านทรูมันนี่ วอลเล็ท</h3>
            <Header.Button
              buttonName='ประวัติคำขอบคุณ'
              onClick={() => {
                redirect(ROUTE_PATH.HISTORY.LINK)
              }}
            />
          </Header>

          <Search
            type='text'
            name='focus'
            placeholder='ค้นหามูลนิธิ / องค์กรการกุศลที่ต้องการบริจาค ...'
          />

          <Header>
            <Header.Content>
              <h4>ปันความสุข ฉลองวันปีใหม่</h4>
              Description
            </Header.Content>
          </Header>
          <Card>
            <Card.Item
              srcImage= { CONTENTS['banner-card-1.jpg'] }
            >
              <Card.Content>
                <Card.Avatar
                  onLink={ROUTE_PATH.STORY.LINK}
                >
                  <Image avatar
                    srcImage= { LOGOS['logo-1.jpg'] }
                    // onClick={() => {
                    //   redirect(ROUTE_PATH.STORY.LINK)
                    // }}
                  />
                </Card.Avatar>
                <Card.Header>
                  มูลนิธิออทิสติกไทย
                </Card.Header>
              </Card.Content>
            </Card.Item>

            <Card.Item
              srcImage= { CONTENTS['banner-card-2.jpg'] }
            >
              <Card.Content>
                <Card.Avatar
                  onLink={ROUTE_PATH.STORYDONATION.LINK}
                  >
                  <Image avatar
                    srcImage= { LOGOS['logo-2.jpg'] }
                  />
                </Card.Avatar>
                <Card.Header>
                  มูลนิธิโรงพยาบาล สมเด็จเจ้าพระยา
                </Card.Header>
              </Card.Content>
            </Card.Item>

            <Card.Item
              srcImage= { CONTENTS['banner-card-1.jpg'] }
            >
              <Card.Content>
                <Card.Avatar>
                  <Image avatar
                    srcImage= { LOGOS['logo-3.jpg'] }
                  />
                </Card.Avatar>
                <Card.Header>
                  มูลนิธิออทิสติกไทย
                </Card.Header>
              </Card.Content>
            </Card.Item>

            <Card.Item
              srcImage= { CONTENTS['banner-card-2.jpg'] }
            >
              <Card.Content>
                <Card.Avatar>
                  <Image avatar
                    srcImage= { LOGOS['logo-4.jpg'] }
                  />
                </Card.Avatar>
                <Card.Header>
                  มูลนิธิโรงพยาบาล สมเด็จเจ้าพระยา
                </Card.Header>
              </Card.Content>
            </Card.Item>

            {/* <Card.Item>
              <Card.Content
                buttonName='ร่วมบริจาค'
                onClick={() => {
                  redirect(ROUTE_PATH.STORY.LINK)
                }}
              >
                <Card.Header>
                  มูลนิธิออทิสติกไทย
                </Card.Header>
                <Card.Description>
                  มูลนิธิโรงพยาบาล สมเด็จเจ้าพระยา
                </Card.Description>
              </Card.Content>
            </Card.Item> */}
          </Card>

          <Header>
            <h4>ร่วมบริจาคให้มูลนิธิ และองค์กรการกุศล</h4>
          </Header>
          <List>
            <List.Item
              toLink = {ROUTE_PATH.STORY.LINK}
            >
              <Image list
                srcImage={LOGOS['logo-3.jpg']}
            />
              <List.Content
                onClick={() => {
                  //redirect(ROUTE_PATH.STORY.LINK)
                }}
              >
                <List.Header>ก้าวคนละก้าว</List.Header>
                <List.Description>ร่วมส่งกำลังใจให้พี่ตูนเพื่อ 11 โรงพยาบาลทั่วประเทศ</List.Description>
              </List.Content>
            </List.Item>
            <List.Item
              toLink = {ROUTE_PATH.STORYDONATION.LINK}
            >
              <Image list
                srcImage={LOGOS['logo-2.jpg']}
              />
              <List.Content>
                <List.Header>สภากาชาดไทย</List.Header>
                <List.Description>ช่วยสนับสนุนบุคลากรและเครื่องมือทางการแพทย์ เพื่อสาธารณประโยชน์</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <Image list
                srcImage={LOGOS['logo-4.jpg']}
              />
              <List.Content>
                <List.Header>มูลนิธิโรงพยาบาลสมเด็จเจ้าพระยา</List.Header>
                <List.Description>ช่วยเหลือผู้ป่วยทางจิต และสนันสนุนสถาบันฝึกอบรมจิตแพทย์</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <Image list
                srcImage={LOGOS['logo-5.jpg']}
              />
              <List.Content>
                <List.Header>มูลนิธิกระจกเงา</List.Header>
                <List.Description>สะท้อนความเป็นจริงของสังคม ช่วยเหลือผู้ตกทุกข์ได้ยาก</List.Description>
              </List.Content>
            </List.Item>
          </List>
        </AppBody>
      </React.Fragment>
    )
  }
}
