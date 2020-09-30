import styled from "styled-components";
import { colors } from "../../utils/theme"
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: ${colors.dark};
    color: ${colors.light};
    font-size: 1rem;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
`;

export const MenuContainer = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const StyledLink = styled(Link)`
    color: ${colors.light};
    text-decoration: none;
    margin: 0 0.5rem 0 0;
    &:hover {
        color: ${colors.secondary};
      }
`;
