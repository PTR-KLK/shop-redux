import styled from "styled-components";
import { colors, breakpoints } from "../../utils/theme"
import { Link } from "react-router-dom";

export const Container = styled.nav`
    position: fixed;
    width: 100%;
    display: flex;
    top: 0;
    justify-content: space-between;
    background: ${colors.dark};
    color: ${colors.light};
    padding: 0.75rem;
`;

export const Menu = styled.button`
    font-size: 1rem;
    margin: 0 0.75rem;
    padding: 0;
    border: none;
    background: inherit;
    color: inherit;

    @media (min-width: ${breakpoints.tablet}) {
        display: none;
    }
`;

export const Hyperlink = styled(Link)`
    color: inherit;
    text-decoration: none;
    font-size: 1rem;
    margin: 0 0.75rem;

    &:first-of-type {
        display: none;
    }

    &:hover {
        color: ${colors.secondary};
    }

    @media (min-width: ${breakpoints.tablet}) {
        &:first-of-type {
            display: block;
        }
    }
`;
