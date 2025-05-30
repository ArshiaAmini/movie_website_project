import styled from 'styled-components';

export const Wrapper = styled.div`
 background: linear-gradient(
 
 to bottom, rgba(0, 0, 0, 0)
 35%, rgba(0, 0, 0, 0)
 75%, rgba(0, 0, 0, 0.90)
  
 ),

url(${({ image }) => image}), var(--darkGrey);  

background-size: 100%, cover;
background-position: center;
position: relative;
height: 400px;
animation: animateHeroImage 1s;

@keyframes animateHeroImage{
from{
opacity: 0;
}
to{
opacity: 1;
}
}
`;

export const Content = styled.div`
padding: 25px;
max-width: var(--maxWidth);
margin: 0 auto;

`

export const Text = styled.div`
z-index: 100;
max-width: 100%;
position: absolute;
margin-right: 20px;
min-height: 100px;
color: var(--white);

h1{
  margin-top:250px;
  font-size: var(--fontSuperBig);
  @media screen and (max-width: 720px){
  font-size: var(--fontBig);
  }
}

p{
  font-size: var(--fontMed);
  @media screen and (max-width:720px){
  font-size: var(fontSmall);
 
  }

  @media screen and (max-wdith: 720px){
  max-width: 100%
  }
}


`