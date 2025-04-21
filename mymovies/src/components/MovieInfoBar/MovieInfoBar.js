import React from 'react'
import { calcTime,convertMoney } from '../../helpers'
import { Wrapper, Content } from './styles'



const MovieInfoBar = ({ time, revenue, budget }) => (
  <Wrapper>
    <Content>
      <div className = "column">
        {calcTime(time)}
      </div>
      <div className = "column">
        {convertMoney(budget)}
      </div>
      <div className = "column">
        {convertMoney(revenue)}
      </div>
    </Content>
  </Wrapper>



)

export default MovieInfoBar