import styled from "styled-components";
import { colors, breakpoints } from "../../utils/theme"
import { Link } from "react-router-dom";

export const Container = styled.section`
    max-width: calc(600px - 2rem);
    width: 100%;
    margin: 1rem;
    padding: 1rem;
    color: ${colors.dark};
    background: ${colors.light};

    @media (min-width: ${breakpoints.tablet}) {
        margin: 1rem auto;
    }
`;

export const Title = styled.h3`
    margin: 0 0 0.5rem;
`;

export const OrderLink = styled(Link)`
    display: block;
    background: ${props => props.disabled ? "gray" : colors.secondary};
    cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
    color: ${colors.light};
    padding: 1rem;
    font-size: 1rem;
    border: none;
    text-decoration: none;
    font-weight: bold;
`;