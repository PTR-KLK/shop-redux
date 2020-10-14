import styled from "styled-components";
import { colors, breakpoints } from "../../utils/theme";
import { Link } from "react-router-dom";

export const Container = styled.aside`
  display: ${(props) => (props.visible ? "block" : "none")};
  left: -1rem;
  top: 1.625rem;
  position: fixed;
  height: calc(100vh - 3rem);
  background: ${colors.secondary};
  color: ${colors.light};
  padding: 1rem 1rem 0.5rem;
  margin: 1rem 0 1rem 1rem;

  @media (min-width: ${breakpoints.tablet}) {
    background: ${colors.light};
    color: ${colors.dark};
    display: block;
    position: static;
    height: auto;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 0.5rem;
`;

export const Title = styled.p`
  font-weight: bold;
  margin: 0 0 0.5rem;
`;

export const Hyperlink = styled(Link)`
  text-decoration: none;
  color: inherit;
  white-space: nowrap;

  &:hover {
    color: ${colors.primary};
  }

  @media (min-width: ${breakpoints.tablet}) {
    &:hover {
      color: ${colors.secondary};
    }
  }
`;
