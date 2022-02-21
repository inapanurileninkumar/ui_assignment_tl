<template>
  <div>
    <b-container
      fluid
    >
      <p class="font-weight-bold">Inventory</p>
    </b-container>
    <b-container
      fluid
    >
      <b-table
        :fields="inventoryTableFields"
        :items="inventory"
        select-mode="multi"
        thead-class="inventory-header"
        tbody-class="inventory-data"
      >
        <template #head(select)="">
          <span
            class="pointer-cursor"
            @click="selectAllItems"
          >
            <b-icon
              :icon="isAllItemsSelected?'check-square-fill':'square'"
              :variant="isAllItemsSelected?'danger':''"
              font-scale="0.8"
            />
          </span>
        </template>
        <template #cell(select)="data">
          <span
            class="pointer-cursor"
            @click="selectItem(data['item']['label'])"
          >
            <b-icon
              :icon="isItemSelected(data['item']['label'])?'check-square-fill':'square'"
              :variant="isItemSelected(data['item']['label'])?'danger':'secondary-dark'"
              font-scale="0.8"
            />
          </span>
        </template>
        <template #cell(label)="data">
          <b-row
            align-v="center"
          >
            <div>
              <img
                :src="require('@assets/media/images/wine_bottle.png')"
                class="wine-bottle"
              >
            </div>
            <div
              class="pl-2"
            >
              <span class="font-weight-bold">{{ data['item']['label'] }}</span>
              <div>
                <span>{{ data['item']['region'] }}</span>
              </div>
            </div>
          </b-row>
        </template>
        <template #cell(rating)="data">
          <b-badge
            variant="secondary-lite"
          >
            <span class="text-secondary-dark">RP {{ data['item']['rating'] }}</span>
          </b-badge>
          <b-badge
            variant="secondary-lite"
            class="ml-1"
          >
            <span class="text-secondary-dark">+3</span>
          </b-badge>
        </template>
        <template #cell(showDetails)="row">
          <span
            class="pointer-cursor"
            @click="row.toggleDetails"
          >
            <b-icon
              :icon="row.detailsShowing?'chevron-up':'chevron-down'"
              variant="secondary-dark"
            />
          </span>
        </template>
        <template #row-details="row">
          <inventory-item-details
            :item="row['item']"
            class="border-top border-secondary-lite pt-2 pl-0"
          />
        </template>
      </b-table>
    </b-container>
  </div>
</template>
<script>
import InventoryItemDetails from '@components/inventory/InventoryItemDetails';

import { mapGetters } from 'vuex';
export default {
  name: 'DashboardInventory',
  components: { InventoryItemDetails },
  data: function () {
    return {
      selectedItems: [],
      inventoryTableFields: [
        {
          label: '',
          key: 'select'
        },
        {
          label: 'PRODUCT',
          key: 'label',
          sortable: true,
          tdClass: 'text-truncate text-capitalize'
        },
        {
          label: 'RATING',
          key: 'rating',
          sortable: true
        },
        {
          label: 'VINTAGE',
          key: 'vintage',
          sortable: true,
          tdClass: 'text-secondary'
        },
        {
          label: 'QTY',
          key: 'quantity',
          sortable: true,
          tdClass: 'text-secondary'
        },
        {
          label: 'VOLUME',
          key: 'volume',
          sortable: true,
          tdClass: 'text-secondary',
          formatter: (value) => {
            let names = {
              250: 'Small',
              500: 'Regular',
              750: 'Standard',
              1000: 'Normal',
              1250: 'High',
              1500: 'Magnum',
              1750: 'Strong',
              2000: 'Odd Ball'
            };
            return `${names[value]} (${value} mL)`;
          }
        },
        {
          label: 'COST',
          key: 'cost',
          sortable: true,
          tdClass: 'text-secondary',
          formatter: (value) => {
            return `$${value}`;
          }
        },
        {
          label: 'PRICE',
          key: 'price',
          sortable: true,
          tdClass: 'font-weight-bold text-secondary-dark',
          formatter: (value, key, item) => {
            return `$${item['cost'] + item['charges']}`;
          }
        },
        {
          label: '',
          key: 'showDetails',
          tdClass: 'font-weight-bold text-secondary-dark'
        }
      ]
    };
  },
  computed: {
    ...(mapGetters({
      inventory: 'inventory/getInventory'
    })),
    isAllItemsSelected: function () {
      return this.selectedItems.length === this.inventory.length;
    }
  },
  methods: {
    selectAllItems: function () {
      if (this.isAllItemsSelected) {
        this.selectedItems = [];
      } else {
        this.selectedItems = this.inventory.map(item => item['label']);
      }
    },
    selectItem: function (itemName) {
      // I have used names here, we need to replace names or labels with IDs from db.
      // this replacement should be done not only for this, but for every plave wherever required.
      let itemIndex = this.selectedItems.findIndex(si => si === itemName);
      if (itemIndex === -1) {
        this.selectedItems.push(itemName);
      } else {
        this.selectedItems.splice(itemIndex, 1);
      }
    },
    isItemSelected: function (itemName) {
      return this.selectedItems.find(si => si === itemName);
    }
  }
};
</script>
<style lang="scss">
.inventory-header{
  font-size:10pt;
}
.inventory-data{
  font-size:9.5pt;
}
.wine-bottle{
  width:25px;
  height:25px;
}
</style>
