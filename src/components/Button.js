import React from "react";
import styled, { css } from "styled-components";

// 처음 만들어 본 Button component!

const SIZES = {
  sm: css`
    --button-font-size: 0.875rem;
    --button-padding: 4px 8px;
    --button-radius: 10px;
  `,
  md: css`
    --button-font-size: 1rem;
    --button-padding: 6px 12px;
    --button-radius: 10px;
  `,
  lg: css`
    --button-font-size: 1.2rem;
    --button-padding: 8px 16px;
    --button-radius: 10px;
  `,
};

const VARIANTS = {
  primary: css`
    --button-color: #ffffff;
    --button-bg-color: #0d6efd;
    --button-hover-bg-color: #0a58ca;
  `,
  success: css`
    --button-color: #ffffff;
    --button-bg-color: #28a745;
    --button-hover-bg-color: #218838;
  `,
  error: css`
    --button-color: #ffffff;
    --button-bg-color: #dc3545;
    --button-hover-bg-color: #c82333;
  `,
  warning: css`
    --button-color: #212529;
    --button-bg-color: #ffc107;
    --button-hover-bg-color: #e0a800;
  `,
};

const OUTVARIANTS = {
  success: css`
    --button-color: #28a745;
    --button-bg-outline-color: #28a745;
    --button-hover-bg-color: #218838;
  `,
  error: css`
    --button-color: #dc3545;
    --button-bg-outline-color: #dc3545;
    --button-hover-bg-color: #c82333;
  `,
  warning: css`
    --button-color: #ffc107;
    --button-bg-outline-color: #ffc107;
    --button-hover-bg-color: #e0a800;
  `,
};

const StyledButton = styled.button`
  ${(p) => p.variantStyle}
  ${(p) => p.outlineStyle}
  ${(p) => p.sizeStyle}
    
    margin: 0;
  border-radius: 10px;
  cursor: pointer;
  font-size: var(--button-font-size, 1rem);
  padding: var(--button-padding, 6px 12px);
  border-radius: var(--button-radius, 10px);
  background: var(--button-bg-color, #0d6efd);
  color: var(--button-color, #ffffff);
  border: 1px solid var(--button-bg-outline-color, transparent);

  &:active,
  &:hover,
  &:focus {
    background: var(--button-hover-bg-color, #0a58ca);
  }
`;

const Button = ({ bgColor, outlineColor, content, size }) => {
  const sizeStyle = SIZES[size];
  const variantStyle = VARIANTS[bgColor];
  const outlineStyle = OUTVARIANTS[outlineColor];

  return (
    <StyledButton
      variantStyle={variantStyle}
      outlineStyle={outlineStyle}
      sizeStyle={sizeStyle}
    >
      {content}
    </StyledButton>
  );
};

export default Button;
