/* eslint-disable no-unused-vars */
import P from 'prop-types';
import * as Styled from './styles';

export const SectionItems = ({ children }) => {
  return (
    <Styled.Container>
      <li>Item</li>
      <li>Item</li>
      <li>Item</li>
    </Styled.Container>
  );
};

SectionItems.propTypes = {
  children: P.node,
};
