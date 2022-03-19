<script>
import Chart from 'chart.js';
import { Bar } from 'vue-chartjs';

export default {
  name: 'BarChart',
  extends: Bar,
  props: {
    title: {
      type: String,
      required: true,
    },
    labels: {
      type: Array,
      required: true,
    },
    chartDatasets: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          fontSize: 25,
          text: this.title,
        },
        legend: {
          position: 'bottom',
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    };
  },
  mounted() {
    Chart.defaults.global.defaultFontFamily = 'Open Sans';
    Chart.defaults.global.defaultFontSize = 16;

    this.renderChart(
      {
        labels: this.labels,
        datasets: this.chartDatasets,
      },
      this.options
    );
  },
};
</script>
