import styled, {keyframes} from 'styled-components'

const coloredSpin = keyframes`
  0%{
    transform: rotate(0deg) scale(1);
    border-top-color:#1d81af ;
    border-bottom-color:#1d81af ;
  }
  50%{
   border-top-color:#0f3d63 ;
   border-bottom-color: #0f3d63 ;
  }
  50%{
   transform: rotate(360deg) scale(1.08);
   border-top-color:#0b97ce ;
   border-bottom-color:#0b97ce;
  }
  75%{
    border-top-color:#0f3d63;
   border-bottom-color: #0f3d63;
  }
  100%{
   transform: rotate(720deg) scale(1);
   border-top-color:#42acf3 ;
    border-bottom-color:#42acf3 ;
  }
`;

export const Loader = styled.div`
  margin: ${props => props.allCoins ? '120px auto 50px auto' : '50px auto auto auto'};
  text-align: center;
  border: 16px solid #1d0b1e;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  animation: ${coloredSpin} 3s linear infinite;
`;

