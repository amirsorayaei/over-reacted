/**
 * Global styles
 */

"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 672px;
    overflow-x: hidden;
    padding: 21px calc(21px / 2);
    margin: 0 auto;
    transition: color 0.2s ease-out 0s, background 0.2s ease-out 0s;
  }

  body {
    color: ${({ theme }) => theme.colors.textNormal};
    background: ${({ theme }) => theme.colors.bg};
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  p {
    white-space: pre-line;
  }

  span, p, a {
    line-height: 1.75rem;
  }
`;
