import styled from "styled-components";
import { colors, breakpoints } from "../../utils/theme"

export const Container = styled.section`
    max-width: calc(600px - 2rem);
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

export const Button = styled.button`
    width: 100%;
    background: ${colors.secondary};
    color: ${colors.light};
    padding: 1rem;
    font-size: 1rem;
    border: none;
    cursor: pointer;
`;