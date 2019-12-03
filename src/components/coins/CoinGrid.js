import styled from 'styled-components'

const CoinGrid = styled.div`
  display: grid;
  grid-template-columns: ${(props => props.columns || '1fr 1fr 1fr 1fr 1fr')};
  grid-template-rows: auto;
  grid-gap: 15px;
  margin: 30px;
`;

export default CoinGrid;