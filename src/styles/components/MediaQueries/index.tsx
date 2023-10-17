import styled from 'styled-components';

const sizes = {
  mobile: '768px',
  tablet: '992px',
  desktop: '1200px',
};

export const media = {
  mobile: `(max-width: ${sizes.mobile})`,
  tablet: `(max-width: ${sizes.tablet})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

export const MobileOnly = styled.div`
  display: none;
  
  @media ${media.mobile} {
    display: block;
  }
`;

export const TabletOnly = styled.div`
  display: none;
  
  @media ${media.mobile} {
    display: none;
  }

  @media ${media.tablet} {
    display: block;
  }
`;

export const DesktopOnly = styled.div`
  display: none;
  
  @media ${media.desktop} {
    display: block;
  }
`;

export const MobileAndTablet = styled.div`
  display: block;
  
  @media ${media.desktop} {
    display: none;
  }
`;

export const TabletAndDesktop = styled.div`
  display: none;
  
  @media ${media.tablet} {
    display: block;
  }

  @media ${media.desktop} {
    display: block;
  }
`;
