/* eslint-disable no-unused-vars */
import P from 'prop-types';
import * as Styled from './styles';

export const SectionItems = ({ title, description, price }) => {
  return (
    <Styled.Container>
      <li>
        <div className="details">
          <h3>{title}</h3>
          <p className="description">{description}</p>
        </div>

        <strong className="price">R${price}</strong>
      </li>
    </Styled.Container>
  );
};

SectionItems.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  price: P.string.isRequired,
};
