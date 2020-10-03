import styled from "styled-components";
import { colors, breakpoints } from "../../utils/theme";

export const ProductListContainer = styled.div`
  margin: 3rem auto 0;
  max-width: 600px;
  padding: 1rem 1rem 0;
  h1 {
    text-align: center;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  color: ${colors.dark};
  background: ${colors.light};

  h3 {
    margin: 0;
  }

  p {
    margin: 0.5rem 0;
    font-size: 1rem;
  }

  @media (min-width: ${breakpoints.tablet}) {
    margin: 1rem auto;
  }
`;
