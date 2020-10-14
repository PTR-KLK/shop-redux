import styled from "styled-components";
import { colors } from "../../utils/theme";

export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${colors.light};
    padding: 1rem;
    margin: 1rem;

    p {
        font-weight: bold;
        margin: 0;
    }
`;
