import styled from 'styled-components'

export const Picture = styled.section`
  width: 100%;
  height: 700px;
  background: url('https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80');
  background-size: auto 120%;
  background-repeat: no-repeat;
  background-position: center;
  > p {
    position: relative;
    top: 38%;
    left: 18%;
    font-size: ${({ theme }) => theme.font36};
    line-height: 1.4em;
    font-weight: 500;
    animation: slide 1s ease-out;
    @keyframes slide {
      from {
        top: 18%;
        opacity: 10%;
      }
      to {
        top: 38%;
        opacity: 100%;
      }
    }
  }
  animation: up-down 1.5s infinite ease-in-out alternate;
  @keyframes up-down {
    from {
      background-position: 50% 50%;
    }
    to {
      background-position: 50% 60%;
    }
  }
`

export const Concept = styled.section`
  width: 100%;
  height: 560px;
  padding: 100px 4px;
  > h2 {
    margin: 60px auto;
    text-align: center;
    font-size: ${({ theme }) => theme.font36};
  }
  .diagramm {
    /* display: flex;
    justify-content: center; */
    position: relative;
    width: 100%;
    div {
      position: absolute;
      width: 45%;
      height: 180px;
      border-radius: 100px;
      border: 2px solid ${({ theme }) => theme.tertiary};
    }
    .outer {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      box-shadow: 2px 2px 5px ${({ theme }) => theme.border};
      text-align: center;
      line-height: 1.5em;
      font-size: ${({ theme }) => theme.font20};
      font-weight: 500;
      > p {
        z-index: 3;
      }
    }
    #outer1 {
      left: 10%;
      animation: fromleft 1.4s ease-out;
    }
    #outer2 {
      right: 10%;
      animation: fromright 1.4s ease-out;
    }
    .mwrap {
      position: absolute;
      overflow: hidden;
      pointer-events: none;
      /* background-color: aliceblue; */
      z-index: 1;
      left: 10%;
      animation: fromleft 1.4s ease-out;
    }
    //outer2 위치에 있으면서 outer1 위치와 겹치는 부분만 보여짐
    .mid {
      position: static;
      width: 100%;
      margin-left: 78%;
      margin-top: -2px;
      background-color: ${({ theme }) => theme.violet_l};
      pointer-events: auto;
      z-index: 2;
      animation: fadein 1.4s ease-out;
      @keyframes fadein {
        from {
          opacity: 10%;
          margin-left: 125%;
        }
        to {
          opacity: 90%;
          margin-left: 78%;
        }
      }
    }
    @keyframes fromleft {
      from {
        left: 0%;
      }
      to {
        left: 10%;
      }
    }
    @keyframes fromright {
      from {
        right: 0%;
      }
      to {
        right: 10%;
      }
    }
  }
`

export const Features = styled.section`
  width: 100%;
  height: 780px;
`