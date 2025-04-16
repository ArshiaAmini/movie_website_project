import styled from "styled-components";

export const Image = styled.img`
  aspect-ratio: 2 / 3;
  width: 100%;
  height: auto;
  max-width: 720px;
  transition: all 0.3s;
  border-radius: 20px;
  object-fit: cover;
  animation: animatedThump 0.5s;
  z-index: 100;
  position: relative;
  pointer-events: auto;

  :hover{
    opacity: 0.1 ! important;

  }
  
  @keyframes animatedThump {
    from{
      opacity: 0;
    }
    to{
      opacity: 1;
    }
  }
  cursor: pointer;

`;


