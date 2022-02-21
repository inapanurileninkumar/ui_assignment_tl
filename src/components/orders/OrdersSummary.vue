<template>
  <b-row>
    <b-col
      v-for="(orderCategory,categoryIndex) in orderCategories"
      :key="orderCategories['name']+'_'+categoryIndex+'_'+orderCategory['items'].length"
      class="order-category"
    >
      <div>
        <b-container fluid>
          <b-row
            align-h="between"
            :class="[' border-'+orderCategory['color']]"
            class="rounded category-container border-top"
          >
            <b-col
              cols="10"
            >
              <span>{{ orderCategory['label']}}</span>
            </b-col>
            <b-col
              cols="2"
            >
              <b-icon
                :icon="orderCategory['icon']"
                :variant="orderCategory['color']"
                class="font-weight-bold"
              />
            </b-col>
            <b-col>
              <span class="font-weight-bold">{{ orderCategory['items'].length }}</span>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </b-col>
  </b-row>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'OrdersSummary',
  computed: {
    ...mapGetters({
      orders: 'orders/getOrders'
    }),
    orderCategories: function () {
      return [
        {
          name: 'open',
          label: 'Open Orders',
          items: this.orders.filter(order => order['status'] === 'open'),
          icon: 'basket2',
          color: 'warning'
        },
        {
          name: 'transit',
          label: 'Orders in transit',
          items: this.orders.filter(order => order['status'] === 'transit'),
          icon: 'truck',
          color: 'info'
        },
        {
          name: 'fulfilled',
          label: 'Fulfilled Orders',
          items: this.orders.filter(order => order['status'] === 'fulfilled'),
          icon: 'bag-check',
          color: 'success'
        },
        {
          name: 'cancelled',
          label: 'Cancelled Orders',
          items: this.orders.filter(order => order['status'] === 'cancelled'),
          icon: 'x-octagon',
          color: 'danger'
        }
      ];
    }
  }
};
</script>
<style lang="scss" scoped>
.order-category{
    .category-container{
        box-shadow: 0px 2px 11px 0px #0000000F;
        border-width:2px !important;
        padding:10px;
    }

    &:last-child{
        padding-right:5px;
    }
}
</style>
