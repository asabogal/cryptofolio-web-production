import React, { Component } from 'react';
import ReactHighCharts from 'react-highcharts'
import highchartsConfig from './HighChartsConfig'
import highchartsTheme from './HighChartsTheme'

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
      return <div style={errorStyle}>{this.props.chartData}</div>
    } else {
      return <ReactHighCharts config={highchartsConfig(this.props.chartData)}/>
    }
  }
  render() {
    return (
      <div>
        {
          this.renderChart()
        }
      </div>
    );
  }
}

export default Chart;

const errorStyle = {
  color: 'red',
  textAlign: 'center',
}