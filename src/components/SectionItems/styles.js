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
          font-size: 16px;
          line-height: 19px;
        }

        p {
          color: rgba(0,0,0, 0.6);
          font-size: 14px;
          line-height: 21px;
        }
      }
    }
  `}
`;
