import styled from "styled-components";
import { colors } from "../../utils/theme";

export const Container = styled.section`
    background: ${colors.light};
    padding: 1rem;
    margin: 1rem;
`;

export const Title = styled.h3`
  margin: 0 0 0.5rem;
`;

export const Input = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  margin: 0 0 0.5rem;
  width: calc(100% - 1rem - 4px);

  ${(props) =>
    props.type === "submit"
      ? `
        background: ${colors.secondary};
        cursor: pointer;
        color: ${colors.light};
        border: none;
        font-weight: bold;
        margin: 0;
        width: 100%;
        `
      : null}
`;
