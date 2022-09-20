import styled from 'styled-components'
import { Button } from '../../styles/globalStyles'
import { RiPencilFill } from 'react-icons/ri'
import { FaTrashAlt, FaPlus } from 'react-icons/fa'
import {
  BsCaretDownFill,
  BsCaretUpFill,
  BsEmojiSmileFill,
} from 'react-icons/bs'
import { ImFilePicture } from 'react-icons/im'
import { AiFillCloseSquare } from 'react-icons/ai'

export const CompleteBtn = styled(Button)`
  width: 100px;
  height: 40px;
  margin: 0 4px;
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.violet_m};
  &:hover {
    background: ${({ theme }) => theme.violet_l};
  }
`
export const PlusBtnBase = styled(Button)`
  width: 1140px;
  height: 60px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.border};
  &:hover {
    background: ${({ theme }) => theme.violet_m};
  }
`

export const PlusBtn = ({ onClick }) => (
  <PlusBtnBase onClick={onClick}>
    <FaPlus size="30" />
  </PlusBtnBase>
)

const GrayBtn = styled.button`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.tertiary};
  background: none;
  border: none;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.dark};
  }
`

export const EditBtn = ({ onClick }) => (
  <GrayBtn onClick={onClick}>
    <RiPencilFill size="24" />
  </GrayBtn>
)

export const DeleteBtn = ({ onClick }) => (
  <GrayBtn onClick={onClick}>
    <FaTrashAlt size="24" />
  </GrayBtn>
)

export const CloseBtn = ({ onClick }) => (
  <GrayBtn onClick={onClick}>
    <BsCaretUpFill size="24" />
  </GrayBtn>
)

export const OpenBtn = ({ onClick }) => (
  <GrayBtn onClick={onClick}>
    <BsCaretDownFill size="24" />
  </GrayBtn>
)

export const AddPicBtn = ({ onClick }) => (
  <GrayBtn onClick={onClick}>
    <ImFilePicture size="24" />
  </GrayBtn>
)

export const AddEmojiBtn = ({ onClick }) => (
  <GrayBtn onClick={onClick}>
    <BsEmojiSmileFill size="24" />
  </GrayBtn>
)

export const XBtn = ({ onClick }) => (
  <GrayBtn onClick={onClick}>
    <AiFillCloseSquare size="24" />
  </GrayBtn>
)

export const Notice = styled.div`
  width: 100%;
  height: 100px;
  line-height: 100px;
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.dark};
  > div {
    margin: 0 auto;
    text-align: center;
  }
`