<script>
import { Line, mixins } from 'vue-chartjs';
const { reactiveProp } = mixins;

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: {
    chartData: {
      type: Object,
      default: () => ({})
    }
  },
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart(this.chartData, {
      responsive: true,
      maintainAspectRatio: false
    });
  }
};
</script>
