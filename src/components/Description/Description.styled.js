import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 48px;
  padding-bottom: 16px;
  border-bottom: 2px dashed rgba(6, 24, 44, 0.4);
`;

export const Image = styled.img`
  width: 300px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`;

export const MainTitle = styled.h2`
  font-weight: 900;
  font-size: 28px;
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 24px;
`;

export const Text = styled.p`
  font-size: 18px;
`;
