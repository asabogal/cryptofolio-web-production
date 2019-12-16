import React from 'react';
import styled from 'styled-components'

const InfoTable = (props) => {
 
  const {changeDay, supply, volume24Hr, dayHigh, dayLow} = props.selectedCoin
  return (
    <Table>
      <tbody>
        <tr>
          <TableDataHead>24Hr Volume</TableDataHead>
          <TableDataHead>Supply</TableDataHead>
          <TableDataHead>Day High</TableDataHead>
          <TableDataHead>Day Low</TableDataHead>
          <TableDataHead>Change Day</TableDataHead>

        </tr>
        <tr>
          <TableData>{volume24Hr}</TableData>
          <TableData>{supply}</TableData>
          <TableData>{dayHigh}</TableData>
          <TableData>{dayLow}</TableData>
          <TableData>{changeDay}</TableData>
        </tr>
      </tbody>
    </Table>
  );
}

export default InfoTable;

const Table = styled.table`
  width: 100%;
  margin: 0;
  border-spacing: 0;
  table-layout: fixed;
  border-collapse: collapse;
`;

const TableData = styled.td`
font-size: inherit;
height: 100%;
background-color: #212542 ;
text-align: center;
vertical-align: middle;
padding-bottom: 20px;
`;

const TableDataHead = styled(TableData)`
background-color: #272841;
padding-bottom: 0px;
`;