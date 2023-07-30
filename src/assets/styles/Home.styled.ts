/**
 * Home styles
 */

import { styled } from "styled-components";

export const ContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
`;

export const AuthorWrapper = styled.div`
  display: flex;
  margin-bottom: 66px;
`;

export const AuthorName = styled.a`
  color: ${({ theme }) => theme.colors.textLink};
  box-shadow: 0 1px 0 0 currentColor;
`;

export const PostWrapper = styled.article`
  padding-bottom: 30px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.textLink};
  font-weight: bold;
`;

export const Date = styled.p`
  margin-top: 0.5rem;
  font-size: 80%;
`;

export const Body = styled.p`
  color: ${({ theme }) => theme.colors.textTitle};
  margin-bottom: 1.75rem;
`;
