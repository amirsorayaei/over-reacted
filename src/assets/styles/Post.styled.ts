/**
 * Post styles
 */

import { styled } from "styled-components";

export const ContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.textTitle};
  font-weight: bold;
`;

export const Date = styled.p`
  margin: 0.5rem 0 1.75rem;
`;

export const Body = styled.p`
  color: ${({ theme }) => theme.colors.textTitle};
  margin-bottom: 1.75rem;
`;
