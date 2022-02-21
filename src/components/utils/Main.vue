<template>
  <div>
    <navbar/>
    <div>
      <router-view
        @reload-metrics="setupSampleSales"
      />
    </div>
  </div>
</template>
<script >
import Navbar from '@components/utils/Navbar';
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Main',
  components: {
    Navbar
  },
  beforeMount: function () {
    this.setupSampleInventory();
    this.setupSampleSales();
    this.setupSampleOrders();
  },
  computed: {
    ...mapGetters({
      inventory: 'inventory/getInventory'
    })
  },
  methods: {
    ...(mapActions({
      setOrders: 'orders/setOrders',
      setInventory: 'inventory/setInventory',
      setSales: 'inventory/setSales'
    })),
    setupSampleInventory: function () {
      let regions = [...Array(this.getRandomNumber(5, 10)).keys()]
        .map(index => this.getRandomString(this.getRandomNumber(10, 25)));
      let ratingProviders = ['James Sucklings', 'Robert Parker', 'Antonio Gallonis', 'Wine Spectator Tasting'];
      this.setInventory([...Array(this.getRandomNumber(12, 20)).keys()].map(index => ({
        label: this.getRandomString(this.getRandomNumber(10, 30)),
        rating: this.getRandomNumber(1, 100),
        vintage: 1920 + this.getRandomNumber(0, 100),
        quantity: this.getRandomNumber(0, 30),
        volume: 250 * this.getRandomNumber(1, 8),
        cost: this.getRandomNumber(35, 150),
        charges: this.getRandomNumber(0, 10),
        region: regions[this.getRandomNumber(0, regions.length - 1)],
        ratings: ratingProviders.map(provider => ({
          name: provider,
          rating: this.getRandomNumber(0, 1) ? this.getRandomNumber(70, 100) : 0
        })),
        stocks: ['possimus', 'Downtown Condo'].map(stock => ({
          name: stock,
          units: this.getRandomNumber(1, 100)
        }))
      })));
    },
    setupSampleSales: function () {
      let saleDays = this.getRandomNumber(10, 20);
      let today = new Date();
      let firstDay = new Date(today);
      firstDay.setDate(firstDay.getDate() - saleDays);
      let thisDay = new Date(firstDay);
      thisDay.setDate(thisDay.getDate() - 1);
      let sales = [...Array(saleDays).keys()].map(dayIndex => {
        thisDay.setDate(thisDay.getDate() + 1);
        return {
          time: thisDay.getTime(),
          sales: this.inventory.map(wine => ({
            item: wine['label'],
            price: wine['cost'] + wine['charges'],
            count: this.getRandomNumber(0, 3)
          })).filter(a => a['count'])
        };
      });
      this.setSales(sales);
    },
    setupSampleOrders: function () {
      let inventory = this.inventory;
      let status = ['open', 'transit', 'fulfilled', 'cancelled'];
      this.setOrders([...Array(this.getRandomNumber(20, 1000)).keys()].map(index => ({
        item: inventory[this.getRandomNumber(0, inventory.length - 1)]['label'],
        label: this.getRandomString(this.getRandomNumber(6, 20)),
        status: status[this.getRandomNumber(0, 3)]
      })));
    }
  }
};
</script>
