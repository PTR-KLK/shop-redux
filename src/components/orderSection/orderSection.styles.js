import styled from "styled-components";
import { colors, breakpoints } from "../../utils/theme";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  max-width: calc(600px - 2rem);
  width: 100%;
  margin: 1rem;
  padding: 1rem;
  color: ${colors.dark};
  background: ${colors.light};

  p {
    margin: 0.5rem;
  }

  @media (min-width: ${breakpoints.tablet}) {
    margin: 1rem auto;
  }
`;

export const Title = styled.h3`
  margin: 0 0 0.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  font-size: 1rem;
  padding: 0.25rem;
  margin: 0 0 0.5rem;

  ${(props) =>
    props.type === "submit"
      ? `
        background: ${colors.secondary};
        cursor: pointer;
        color: ${colors.light};
        padding: 1rem;
        border: none;
        font-weight: bold;
        `
      : null}
`;
