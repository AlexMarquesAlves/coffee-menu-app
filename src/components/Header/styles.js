/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    max-width: 300px;
    margin: 0 auto;
    padding: 32px 0;
    text-align: center;

    h1 {
      margin-bottom: 4px;
      text-transform: uppercase;

      span {
      color: #995000;
    }
    }

  `}
`;
