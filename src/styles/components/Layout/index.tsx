import styled from 'styled-components';
import { device } from '../../breakpoints';

export const Row = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 24px;
  
  @media ${device.mobile}, ${device.tablet} {
    flex-direction: column;
    align-items: flex-start;
  }

  @media ${device.mobile} {
    max-width: 300px;
    align-items: center;
  }
`;

export const Column = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
  
  @media ${device.mobile}, ${device.tablet} {
    display: flex;
    flex-direction: column;
  }
`;
