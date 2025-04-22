import React from 'react'
import { Wrapper, Content, Text } from './styles'

const HeroImage = ({image, overview, title }) => (

  <Wrapper image={image} alit="Movie-images" >
    <Content>
      <Text>
        {title && <h1>{title}</h1>}
        {overview && <p>{overview}</p>}
      </Text>
     </Content>
  </Wrapper>

)

export default HeroImage