import { styled } from "styled-components";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";

export const Wrapper = styled.div`
 display: flex;
 background: var(--medGrey);
 height: 50px;
 align-items: center;
 justify-content:center;
 width: 100%;
 color: var(--white);
 
 `;

export const Content = styled.div`
display:flex;
width: 100%;
max-width: var(--maxWidth);
padding: 0 25px;

span {
  font-size: var(--fontBig);
  color: var(--white);
  @media screen and (max-width: 760px){
    font-size: var(--fontSmall);
   
}
}


`;
