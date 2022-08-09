/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.ul`
  ${({ theme }) => css`

    li {
      margin-bottom: 16px;
      display: flex;

      .details {
        max-width: 240px;

        h3 {
          margin-bottom: 8px;
          text-transform: uppercase;
        }
      }
    }
  `}
`;
