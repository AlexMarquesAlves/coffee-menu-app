import P from 'prop-types';
import * as Styled from './styles';

export const Header = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

Header.propTypes = {
  children: P.node.isRequired,
};
