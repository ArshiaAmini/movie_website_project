import styled from "styled-components";

export const Spinner = styled.div`
border: 5px solid var(--lightGrey);
border-top: 5px solid var(--darkGrey);
height: 50px;
width: 50px;
border-radius: 50%;
margin: 20px auto;
animation: spins 0.7s linear infinite;


@keyframes spins{
  0%{
    transform: rotate(0deg)
  }
  100%{
    transform: rotate(360deg)
  }
}
`;