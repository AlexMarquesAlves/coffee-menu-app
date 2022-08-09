/* eslint-disable no-unused-vars */
import P from 'prop-types';
import * as Styled from './styles';

export const Header = ({ children }) => {
  return (
    <Styled.Container>
      <h1>
        Rocket<span>Coffee</span>
      </h1>
      <p>Aberto Todos os dias. 8h-21h</p>
    </Styled.Container>
  );
};

Header.propTypes = {
  children: P.node,
};
