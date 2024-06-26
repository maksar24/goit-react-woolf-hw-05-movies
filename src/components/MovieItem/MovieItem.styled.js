import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Item = styled.li`
  padding-top: 20px;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.01);
    cursor: pointer;
  }
`;

export const LinkComponent = styled(Link)`
  width: 100%;
  height: 100%;
  color: #000;
  text-decoration: none;
`;

export const Image = styled.img`
  width: 100%;
  height: 320px;
  object-fit: contain;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 24px;
  text-align: center;
`;
