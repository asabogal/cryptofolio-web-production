export default function(historicalData){
  return {
  title: {
      text: ''
  },

  yAxis: {
      title: {
          text: 'Price USD'
      }
  },

  xAxis: {
      type: 'datetime'
  },

  legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
  },

  plotOptions: {
      series: {
          label: {
              connectorAllowed: false
          },
          pointStart: 2010
      }
  },

  series: historicalData,

  responsive: {
      rules: [{
          condition: {
              maxWidth: 400
          },
          chartOptions: {
              legend: {
                  layout: 'horizontal',
                  align: 'center',
                  verticalAlign: 'bottom'
              },
              chart: {
                height: 200
              },
              yAxis: {
                title: {
                  text: ''
                }
              }
          }
      },
    {
      condition: {
        maxWidth: 500
    },
    chartOptions: {
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
        },
        chart: {
          height: 250
        }
    }
    }]
  }
  }
}