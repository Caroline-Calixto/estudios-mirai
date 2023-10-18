import styled from "styled-components";

interface ButtonProps {
    backgroundColor?: string;
    width?: string;
    color?: string;
}

export const Button = styled.button<ButtonProps>`
  font-size: 20px;
  text-align: center;
  color:  ${(prop) => prop.color || "#FFFFFF"};
  border-radius: 5px;
  padding: 10px 15px;
  background-color: ${(prop) => prop.backgroundColor};
  width: ${(prop) => prop.width};

  @media (max-width: 375px) { 
    font-size: 16px;
    max-width: 280px;
  }
`;

