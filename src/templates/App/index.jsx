import P from 'prop-types';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import * as Styled from './styles';

export const App = ({ children }) => {
  return (
    <Styled.Container>
      <Header />
      <Section />
      {children}
    </Styled.Container>
  );
};

App.propTypes = {
  children: P.node,
};
