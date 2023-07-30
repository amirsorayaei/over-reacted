/**
 * Header styles
 */

import styled from "styled-components";

export const Header = styled.header`
  margin-bottom: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Title = styled.h1`
  color: ${({ theme, ...props }) => props.color || theme.colors.textTitle};
  font-weight: bold;
`;
