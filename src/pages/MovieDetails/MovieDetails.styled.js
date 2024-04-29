import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin-bottom: 48px;
`;

export const Info = styled.div`
  margin-bottom: 48px;
  padding-bottom: 16px;
  border-bottom: 2px dashed rgba(6, 24, 44, 0.4);
`;

export const List = styled.ul`
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const Item = styled.li`
  padding: 16px;
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 20px;
`;

export const LinkItem = styled(NavLink)`
  font-size: 24px;
  font-weight: 600;
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease;
  &:hover {
    color: #40b558;
  }
  &.active {
    color: #40b558;
  }
`;
