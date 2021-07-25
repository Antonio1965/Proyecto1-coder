import styled from "styled-components";

export const StyledCartItem = styled.div`
  display: flex;
  border: 1pt solid grey;
  border-radius: 5px;


  img {
    width: 200px;
    border-radius: 5px;
  }

  div {
    margin: 0 1rem;
    text-align: right;

    p {
      margin-bottom: 0;
    }

    span {
      font-size: 0.75rem;
      color: grey;
    }
  }

  .trash {
    width: 1rem;
    background-color: ${(props) => props.theme.special};
    padding: 0.25rem;
    transition: all 0.5s;

    &:hover {
      cursor: pointer;
      background-color: red;
      transform: scale(1.15);
    }
  }
`;
