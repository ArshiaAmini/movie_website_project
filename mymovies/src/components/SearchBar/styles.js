import { styled } from 'styled-components'

export const Wrapper = styled.div`
  display:flex;
  align-items: center;
  background: var(--darkGrey);
  height: 100px;
  padding: 0 20px;

`;
export const Content = styled.div`
  position: relative;
  color: var(--white);
  max-width: var(--maxWidth);
  width: 100%;
  height: 55px;
  background: var(--medGrey);
  border-radius: 20px;
  color: var(--white);
  margin: 0 auto;

  img{
    position:absolute;
    top: 15px;
    bottom:14px;
    width:32px;
    left: 5px;
  }
  input{
    font-size: var(--fontBig);
    position: absolute;
    left: 0;
    margin: 8px 0;
    padding: 0 0 0 60px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: var(--white);

  }
  :focus{
    outline: none;
  }

 

`