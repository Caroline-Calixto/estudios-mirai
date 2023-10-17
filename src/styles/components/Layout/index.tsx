import styled from 'styled-components';
import { media } from '../MediaQueries';

export const Row = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
/* height: 100vh; */
gap: 24px;
  
  @media ${media.mobile}, ${media.tablet} {
    display: flex;
    flex-direction: column;
  }
`;

export const Column = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
  
  @media ${media.mobile}, ${media.tablet} {
    display: flex;
    flex-direction: column;
  }
`;
