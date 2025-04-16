import {styled} from 'styled-components'

export const Wrapper = styled.button`
display: block;
background: var(--darkGrey);
width: 25%;
transition: all 0.4s;
margin: 25px auto;
height: 60px;
border-radius: 35px;
color: var(--white);
outline: none;
font-size: var(--fontBig);
cursor: pointer;

&:hover{
 opacity: 0.9;
}
`
