import { Cookies } from 'react-cookie'
import {
  ModalBackgroundBlack,
  TimelineModalContainer,
  Wrapper,
  Text,
} from '../Timeline/TimelinelistStyle'
import { AlertModalContainer } from './MyPannelStyle'
import { XBtn } from '../Widget/WidgetStyle'
import { AiFillCloseSquare } from 'react-icons/ai'
import { Icon, Col } from '../../styles/globalStyles'
import Feedlist from './Feedlist'

export const FeedModal = ({ feedData, setIsFeedOpen }) => {
  const closeTimelineModal = () => {
    setIsFeedOpen(false)
    document.body.style.overflow = 'unset'
  }

  return (
    <Wrapper>
      <Col>
        {/*최상위에 있는 navigation 포함 black background를 씌어주기 위해 
      globalStyle에서 Wrapper와 ModalBackground 컴포넌트를 추가함*/}
        <ModalBackgroundBlack></ModalBackgroundBlack>
        <TimelineModalContainer>
          {/* --header-- */}
          <div className="header__timeline modal">
            <Text>구독중인 피드</Text>
            <div className="header__timeline--icon"></div>
            <Icon>
              <XBtn onClick={closeTimelineModal}>
                <AiFillCloseSquare size={20} />
              </XBtn>
            </Icon>
          </div>
          {/* --content-- */}
          <div className="contents__timeline">
            <div className="contents">
              <Feedlist feedData={feedData} />
            </div>
          </div>
        </TimelineModalContainer>
      </Col>
    </Wrapper>
  )
}

export const AlertModal = ({ waiting, setIsAlertOpen }) => {
  const closeTimelineModal = () => {
    setIsAlertOpen(false)
    document.body.style.overflow = 'unset'
  }

  const handleCloseToday = () => {
    const cookies = new Cookies()
    // const date = new Date(new Date().setHours(24, 0, 0, 0))
    // const expiry = date.toUTCString()
    // console.log(date)
    // console.log(expiry)
    // console.log(typeof expiry)
    closeTimelineModal()
    return cookies.set('closeAlert', true, {
      path: '/',
      // expires: expiry,
      maxAge: 24 * 60 * 60,
    })
  }

  return (
    <Wrapper>
      <Col>
        <ModalBackgroundBlack></ModalBackgroundBlack>
        <AlertModalContainer>
          <img
            className="sticker"
            src="https://goalimage.s3.ap-northeast-2.amazonaws.com/images/logo_symbol_yellow_sticker.png"
            alt="alert sticker"
          ></img>
          {/* --content-- */}
          <div className="contents">
            <p>
              종료된 목표가 <span>{waiting}개</span> 있어요! 후기를 작성하러 가
              볼까요?
            </p>
            <p>
              후기를 작성하며 목표를 되돌아보면, 다음 번 목표를 성취할 힘이
              길러질 거에요 😉
            </p>
          </div>
          {/* --footer-- */}
          <div className="footer">
            <button onClick={handleCloseToday}>오늘 하루 보지 않기</button>
            <XBtn onClick={closeTimelineModal}>
              <AiFillCloseSquare size={20} />
            </XBtn>
          </div>
        </AlertModalContainer>
      </Col>
    </Wrapper>
  )
}
