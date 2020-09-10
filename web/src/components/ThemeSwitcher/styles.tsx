import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.colors.li};
  h1 {
    align-content: space-between;
    justify-content: space-between;
    flex-direction: row;
  }
`;
