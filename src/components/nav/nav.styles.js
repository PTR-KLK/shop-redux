import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #333;
    color: white;
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
    color: white;
    text-decoration: none;
    &:hover {
        color: teal;
      }
`;
