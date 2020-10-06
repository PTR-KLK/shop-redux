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

export const StyledLink = styled(Link)`
    color: ${colors.light};
    text-decoration: none;
    margin: 0 2rem;
    &:hover {
        color: ${colors.secondary};
      }
`;
