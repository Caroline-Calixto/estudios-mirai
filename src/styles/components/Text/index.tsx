import styled from 'styled-components';

interface TextProps {
  backgroundColor?: string;
  width?: string;
  color?: string;
}

export const Title = styled.h1<TextProps>`
  font-weight: 800;
  font-size: 64px;;
  color: ${(prop) => prop.color || "#0F0D1C;"};
  font-family: 'Work Sans';
  width: ${(prop) => prop.width};

  @media (max-width: 768px) { 
    font-size: 48px;
    line-height: 42px;
    text-align: center;
  }

`;

export const Subtitle1 = styled.h2<TextProps>`
  font-size: 32px;
  color: ${(prop) => prop.color || "#39364e;"};
  width: ${(prop) => prop.width};

  @media (max-width: 768px) { 
    font-size: 24px;
  }

  @media (max-width: 320px)  { 
    font-size: 18px;
    width: 224px;
    text-align: center;

  }
`;

export const Subtitle2 = styled.h3<TextProps>`
  font-size: 24px;
  color: ${(prop) => prop.color || "#39364e;"};
  width: ${(prop) => prop.width};

  @media (max-width: 768px) { 
    font-size: 18px;
  }

  @media (max-width: 320px)  { 
    font-size: 12px;
    text-align: center;

  }
`;

export const Paragraph = styled.p<TextProps>`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Work Sans';
  color: ${(prop) => prop.color || "#5A5A5A;"};
  padding: 24px 0 24px;
  width: ${(prop) => prop.width};

  @media (max-width: 768px) { 
    font-size: 12px;
  }

  @media (max-width: 320px)  { 
    font-size: 10px;
    width: 240px;
    text-align: center;
  }
`;

export const Comment = styled.span`
  color: #0F0D1C;;
`;
