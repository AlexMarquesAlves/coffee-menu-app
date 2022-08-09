/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    max-width: 300px;
    margin: 0 auto;
    margin-bottom: 24px;

    h2 {
      background-color: #fed7aa;
      padding: 8px 16px;
      text-align: center;

      margin-bottom: 24px;
      text-transform: uppercase;
    }
  `}
`;
