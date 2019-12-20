import styled from 'styled-components'

const CoinGrid = styled.div`
  display: grid;
  grid-template-columns: ${(props => props.columns || 'repeat(auto-fit, minmax(210px, 1fr))')};
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
  grid-gap: 15px;
  margin: 30px 10px 30px 10px;
`;

export default CoinGrid;