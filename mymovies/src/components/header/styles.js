import styled from 'styled-components'

export const Wrapper = styled.div`

background: var(--darkGrey);
padding: 0 20px;
`
export const Content = styled.div`
display:flex;
align-items: center;
justify-content : space-between;
margin: 0 auto;
padding: 20px 0;
max-width: var(--maxWidth)
`
export const LogoImg = styled.img`
width : 200px;
@media screen and(max-width: 500px){
width: 150px;
}

`
export const TmdbImg = styled.img`
width : 100px;
@media screen and(width: 500px){
 width: 80px;
}
`