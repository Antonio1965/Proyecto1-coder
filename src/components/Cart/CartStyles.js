import styled from "styled-components";

export const StyledCart = styled.main`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  padding-top: 15vh;

  .no-items {
    padding-top: 30vh;
    text-align: center;
  }
`;

export const CartDetail = styled.section`
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1pt solid black;
  padding: 0.5rem 2rem;

  h2 {
    text-align: center;
  }
`;