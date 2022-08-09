/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    max-width: 300px;
    border: solid 1px red;
    margin: 0 auto;
    text-align: center;
  `}
`;
