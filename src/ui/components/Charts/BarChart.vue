<template>
  <canvas id="bar-chart" width="100%" :class="className"></canvas>
</template>

<script>
import {
  Chart,
  Title,
  Legend,
  Tooltip,
  BarElement,
  BarController,
  LinearScale,
  CategoryScale,
} from 'chart.js';

Chart.register(
  Title,
  Legend,
  Tooltip,
  BarElement,
  BarController,
  LinearScale,
  CategoryScale
);

export default {
  name: 'BarChart',
  props: {
    className: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      required: true,
    },
    labels: {
      type: Array,
      required: true,
    },
    datasets: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      chartData: {
        type: 'bar',
        data: {
          labels: this.labels,
          datasets: this.datasets,
        },
        options: {
          plugins: {
            title: {
              display: true,
              font: {
                size: 25,
              },
              padding: {
                bottom: 30,
              },
              text: this.title,
            },
            legend: {
              position: 'bottom',
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      },
    };
  },
  mounted() {
    const ctx = document.getElementById('bar-chart').getContext('2d');
    new Chart(ctx, this.chartData);
    Chart.defaults.font.size = 16;
  },
};
</script>
