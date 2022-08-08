import P from 'prop-types';
import { Header } from '../../components/Header';
import * as Styled from './styles';

export const App = ({ children }) => {
  return (
    <Styled.Container>
      <Header />
      {children}
    </Styled.Container>
  );
};

App.propTypes = {
  children: P.node,
};
