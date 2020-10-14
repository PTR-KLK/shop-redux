import styled from "styled-components";
import { colors, breakpoints } from "../../utils/theme";

export const ProductContainer = styled.section`
  background: ${colors.light};
  padding: 1rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  word-break: break-word;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
  }
`;

export const ProductDescription = styled.div`
  width: 100%;

  @media (min-width: ${breakpoints.tablet}) {
    width: 70%;
    height: 100%;
  }
`;

export const Figure = styled.figure`
  margin: auto;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 0 1rem;

  @media (min-width: ${breakpoints.tablet}) {
    width: 30%;
    height: 100%;
    padding-right: 1rem;
    margin: auto 0;
  }
`;

export const Image = styled.img`
  ${(props) =>
    props.imgSize[0] > props.imgSize[1]
      ? `
      width: 20%;
      padding: 0 40%;

      @media (min-width: ${breakpoints.tablet}) {
        width: 50%;
        padding: 0 25%;
      }
      `
      : `width: 30%;

        @media (min-width: ${breakpoints.tablet}) {
          width: 75%;
        }
    `}

  margin: 0;
`;

export const ProductTitle = styled.h3`
  margin: 0;
`;

export const Price = styled.p`
  font-weight: bold;
`;

export const Button = styled.button`
  font-size: 1rem;
  padding: 0.5rem;
  background: ${colors.secondary};
  cursor: pointer;
  color: ${colors.light};
  border: none;
  font-weight: bold;
  width: 100%;
`;
