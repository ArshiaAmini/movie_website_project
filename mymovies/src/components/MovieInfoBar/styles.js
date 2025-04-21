import { styled } from "styled-components";

export const Wrapper = styled.div`
display: flex;
align-items:center;
padding: 0 15px;
background: var(--darkGrey);
min-height:100px;

`

export const Content = styled.div`
display:flex;
max-width: var(--maxWidth);
width: 100%;
margin: 0 auto;
color: var(--white);

.column{
  display:flex;
  align-items:center;
  justify-content:center;
  background: var(--medGrey);
  border-radius: 25px;
  margin: 0 20px;
  flex: 1;
}
:first-child{
  margin-left: 0%;    
}
:last-child{
  margin-right: 0;
}

@media screen and (max-width: 768px){
  display:block;
  .column{
    margin: 20px 0
  }
}

`
