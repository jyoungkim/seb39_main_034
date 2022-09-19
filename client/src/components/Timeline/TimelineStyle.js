import styled from 'styled-components'
import {
  Container,
  ModalBackground,
  ModalWrapper,
  TextWrapper,
  Textarea,
} from '../../styles/globalStyles'
import theme from '../../styles/theme'

export const TimelineContainer = styled(Container)`
  > article {
    margin: 10px 0;
  }
  .header__timeline {
    display: flex;
    justify-content: space-between;
    height: 60px;
    background-color: ${theme.violet_l};
    border-radius: 10px 10px 0 0;

    .header__timeline--icon {
      display: flex;
    }
  }
  .contents__timeline {
    .contents {
    }
  }
`
export const TimelineReviewContainer = styled(TimelineContainer)`
  border: 1px solid red;
`

export const Wrapper = styled(ModalWrapper)`
  display: flex;
  align-items: center;
`
export const ModalBackgroundBlack = styled(ModalBackground)``

export const TimelineModalContainer = styled(Container)`
  background-color: ${theme.white};
  border-radius: 10px;
  width: 1000px;
  height: 600px;
  z-index: 10;
  .header__timeline {
    display: flex;
    justify-content: space-between;
    height: 60px;
    background-color: ${theme.border};
    border-radius: 10px 10px 0 0;
  }
  .header__editor {
    display: flex;
    justify-content: end;
    height: 60px;
    border-bottom: 1px solid ${theme.tertiary};
  }
  .contents__timeline {
    .button__complete {
      display: flex;
      justify-content: end;
    }
  }
`

export const Text = styled(TextWrapper)`
  color: ${theme.dark};
  font-size: ${theme.font18};
  line-height: 60px;
  margin-left: 10px;
`
export const Icon = styled.div`
  padding: 20px 10px;
`
export const TimelineTextarea = styled(Textarea)`
  width: 100%;
  height: 420px;
  font-size: 16px;
  padding: 10px;
`
