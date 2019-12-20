import React, { Component } from 'react';
import styled from 'styled-components'
import ReactHighCharts from 'react-highcharts'
import highchartsConfig from './HighChartsConfig'
import highchartsTheme from './HighChartsTheme'
import {ChartRange} from './ChartRange'

ReactHighCharts.Highcharts.setOptions(highchartsTheme);

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  renderChart = () => {
    if (!this.props.chartData) {
      return <div>Loading...</div>
    } else if (typeof this.props.chartData === 'string') {
      return <Errors>{this.props.chartData}</Errors>
    } else {
      return (
        <div>
          <ChartRange defaultValue="months" onChange={e => this.props.changeChartRange(e.target.value)}>
            <option value="days">Days</option>
            <option value="weeks">Weeks</option>
            <option value="months">Months</option>
          </ChartRange>
          <ReactHighCharts config={highchartsConfig(this.props.chartData)}/>
        </div>
      )
    }
  }
  render() {
    return (
      <ChartContainer>
        {
          this.renderChart()
        }
      </ChartContainer>
    );
  }
}

export default Chart;

const ChartContainer = styled.div`
  background-color: #212542;
`;

const Errors = styled.div`
  color: red;
  text-align: center;
  margin-top: 50px;
`;

