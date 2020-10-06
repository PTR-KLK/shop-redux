import styled from "styled-components";
import { colors } from "../../utils/theme";
import { Link } from "react-router-dom";

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
`;

export const List = styled.ul`
  min-width: 125px;
  display: flex;
  flex-direction: column;
  padding: 1.25rem 1.5rem;
  margin: 4rem 0 0 1rem;
  list-style: none;
  background: ${colors.light};
  color: ${colors.dark};

  &:nth-of-type(2) {
    margin: 1rem 0 0 1rem;
  }

  & > * {
    margin: 0.25rem 0;
  }
`;

export const Title = styled.h3`
  font-size: 1.25rem;
`;

export const StyledLink = styled(Link)`
    color: ${colors.dark};
    text-decoration: none;

    &:hover {
        color: ${colors.secondary};
      }
`;