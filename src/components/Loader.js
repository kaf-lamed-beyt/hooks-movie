import React from "react"
import styled from "styled-components"

const Loader = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5%;
  animation: down 2s ease forwards;
  opacity: 0;
  margin: 0 auto;

  .ball {
    width: 16px;
    height: 16px;
    background: #00203fff;
    border-radius: 50%;
    animation: oscillate 0.8s ease infinite;
  }

  .zero {
    animation-delay: 0.1s;
  }

  .one {
    animation-delay: 0.2s;
    margin-left: 6px;
  }

  .two {
    animation-delay: 0.3s;
    margin-left: 6px;
  }

  @keyframes down {
    0% {
      transform: translateY(-100px);
      opacity: 0.4;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  @keyframes oscillate {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(15px);
    }
    100% {
      transform: translateY(12px);
    }
  }
`
export default function Balls() {
  return (
    <Loader className='balls flex'>
      <div className='ball zero'></div>
      <div className='ball one'></div>
      <div className='ball two'></div>
    </Loader>
  )
}
