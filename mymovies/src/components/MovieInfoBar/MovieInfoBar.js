import React from 'react'
import { calcTime,convertMoney } from '../../helpers'
import { Wrapper, Content } from './styles'



const MovieInfoBar = ({ time, revenue, budget }) => (
  <Wrapper>
    <Content>
      <div className="column">
        <span style={{paddingRight: '10px'}}>Time : </span>
        {calcTime(time)}
      </div>
      <div className="column">
        <span style={{paddingRight: '10px'}}>Budget : </span>
        {convertMoney(budget)}
      </div>
      <div className="column">
        <span style={{paddingRight: '10px'}}>Revenue : </span>
        {convertMoney(revenue)}
      </div>
    </Content>
  </Wrapper>



)

export default MovieInfoBar