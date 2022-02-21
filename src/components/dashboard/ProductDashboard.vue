<template>
  <div
    class="product-dashboard-container"
  >
    <b-container fluid>
      <b-row
        class="header"
        align-v="end"
        align-h="between"
      >
        <b-col>
          <span class="text-secondary font-weight-bold" >Overview</span>
        </b-col>
        <b-col>
          <b-row
            align-h="end"
          >
            <b-button
              variant="danger"
              size="sm"
              class="new-wine"
            >
              <b-icon
                icon="plus-circle"
              />
              <span class="label">ADD NEW WINE</span>
            </b-button>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <b-container
      fluid
      class="order-summary-container"
    >
      <orders-summary />
    </b-container>
    <b-container fluid>
      <sales-overview
        @reload-metrics="$emit('reload-metrics')"
      />
    </b-container>
    <b-container
      fluid
      class="dashboard-inventory-container"
    >
      <dashboard-inventory />
    </b-container>
  </div>
</template>
<script>
import OrdersSummary from '@components/orders/OrdersSummary';
import DashboardInventory from '@components/dashboard/DashboardInventory';
import SalesOverview from '@components/dashboard/SalesOverview';

export default {
  name: 'ProductDashboard',
  components: { OrdersSummary, DashboardInventory, SalesOverview }
};
</script>
<style lang="scss" scoped>
.product-dashboard-container{
    .header{
        padding:10px 5px;

        .new-wine{
          font-size:9pt;
          letter-spacing:1px;

          .label{
            margin-left:5px;
          }
        }
    }
    .order-summary-container{
      margin-top:10px;
    }
    .dashboard-inventory-container{
      margin-top:180px;
    }
}
</style>
