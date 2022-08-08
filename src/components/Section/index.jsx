/* eslint-disable no-unused-vars */
import P from 'prop-types';
import * as Styled from './styles';

export const Section = ({ children }) => {
  return (
    <Styled.Container>
      <h1>RocketCoffee</h1>
      <p>Aberto Todos os dias. 8h-21h</p>
    </Styled.Container>
  );
};

Section.propTypes = {
  children: P.node,
};
