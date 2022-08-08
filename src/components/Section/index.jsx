/* eslint-disable no-unused-vars */
import P from 'prop-types';
import { SectionItems } from '../SectionItems';
import * as Styled from './styles';

export const Section = ({ children }) => {
  return (
    <Styled.Container>
      <h1>Brunch</h1>
      <SectionItems />
    </Styled.Container>
  );
};

Section.propTypes = {
  children: P.node,
};