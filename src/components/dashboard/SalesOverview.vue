<template>
  <div
    class="mt-4 mb-5"
  >
    <b-container fluid>
      <b-row>
        <span class="font-weight-bold">Sales Detail</span>
      </b-row>
      <b-row
        class="mt-4"
      >
        <b-col
          cols="6"
          class="pl-1"
        >
          <div>
            <span
              class="font-weight-bold"
            >
              Total Sales overview
            </span>
          </div>
          <div>
            <span class="text-secondary sales-overview-period">13 - 20 Feb 2022</span>
          </div>
        </b-col>
        <b-col
          cols="6"
          class="pr-5"
        >
          <b-row
            align-h="end"
          >
            <div>
              <span
                class="pointer-cursor"
                @click="reloadMetrics"
              >
                <b-icon icon="arrow-repeat" />
                Reload Metrics
              </span>
              <span
                class="text-secondary ml-2"
              >
                Filter by |
              </span>
              <span
                class="text-dark font-weight-bold"
              >
                This Week
                <b-icon icon="chevron-down" />
              </span>
            </div>
          </b-row>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          class="pl-1"
        >
          <div
            class="mt-3"
          >
            <span
              class="text-dark font-weight-bold total-sales"
            >
              $ {{ revenue.map(a=>a['revenue']).reduce((a, b) => a + b, 0) }}
            </span>
          </div>
          <div>
            <span
              class="text-success"
            >
              +21% from last week
            </span>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid>
      <b-row>
        <b-col
          cols="8"
          class="pl-1"
        >
          <b-row>
            <div
              style="max-height:250px;height:250px;min-height:250px;width:100%;"
            >
              <sales-chart
                :chart-data="saleSummary"
              />
            </div>
          </b-row>
        </b-col>
        <b-col cols="1" />
        <b-col
          cols="3"
        >
          <div
            class="revenue-container"
          >
            <span
              class="text-secondary"
            >
              Total Profit
            </span>
          </div>
          <div
            class="mt-2"
          >
            <span
              class="text-primary font-weight-bold revenue"
            >
              $ {{ revenue.map(a=>a['revenue']).reduce((a, b) => a + b, 0) }}
            </span>
          </div>
          <div>
            <span
              class="text-success"
            >
              +23% from last week
            </span>
          </div>
          <div
            class="total-product-count-container mt-4"
          >
            <span
              class="text-secondary"
            >
              Total Products Sold
            </span>
          </div>
          <div>
            <span
              class="text-dark font-weight-bold total-product-count"
            >
              {{ sales.map(sale=>sale['sales'].map(item=>item['count'])).flat().reduce((a,b)=>a+b,0) }}
            </span>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import SalesChart from '@components/charts/SalesChart';

export default {
  name: 'DashboardInventory',
  components: { SalesChart },
  data: function () {
    return {
    };
  },
  computed: {
    ...(mapGetters({
      sales: 'inventory/getSales'
    })),
    revenue: function () {
      return this.sales.map(sale => ({
        time: sale['time'],
        revenue: sale['sales'].map(a => a['count'] * a['price']).reduce((a, b) => a + b, 0)
      }));
    },
    saleSummary: function () {
      let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return {
        labels: this.revenue.map(sale => {
          let date = new Date(sale['time']);
          return `${date.getDate()} ${months[date.getMonth()]}`;
        }),
        datasets: [
          {
            label: 'sales overview',
            backgroundColor: '#00d7b6',
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            data: this.revenue.map(sale => sale['revenue'])
          }
        ]
      };
    }
  },
  methods: {
    reloadMetrics: function () {
      this.$emit('reload-metrics');
    }
  }
};
</script>
<style lang="scss" scoped>
  .revenue{
    font-size:20pt;
  }
  .total-product-count-container{

  }
    .total-product-count{
      font-size:18pt;
    }
  .total-sales{
    font-size:22pt;
  }
  .sales-overview-period{
    font-size:11pt;
  }
</style>
