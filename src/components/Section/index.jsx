/* eslint-disable no-unused-vars */
import P from 'prop-types';
import { SectionItems } from '../SectionItems';
import * as Styled from './styles';

export const Section = ({ children }) => {
  return (
    <Styled.Container>
      <h2>Brunch</h2>
      <SectionItems
        title="Waffle Doce"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        price="37.70"
      />

      <SectionItems
        title="Maça Doce"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        price="17.70"
      />
    </Styled.Container>
  );
};

Section.propTypes = {
  children: P.node,
};
