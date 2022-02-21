<template>
  <div>
    <b-container
      fluid
      class="pl-2"
    >
      <b-row
        align-v="between"
        class="max-allowed-container--navbar border-right border-secondary-lite"
      >
        <b-col
          cols="12"
          class="pl-0"
        >
          <b-container
            fluid
            class="sidebar-container"
          >
            <b-row
              v-for="action in actions"
              :key="action['name']"
              class="action pointer-cursor"
              :class="[isActiveAction(action['name'])?'bg-primary-lite text-primary active':'']"
              align-v="center"
              @click="routeTo(action['route'])"
            >
              <b-icon
                :icon="action['icon']"
              />
              <span
                class="action-label"
              >
                {{ action['label'] }}
              </span>
            </b-row>
          </b-container>
        </b-col>
        <b-col
          cols="12"
          class="watermark-container"
        >
          <div
            class="watermark"
          >
            <div>
              <span
                class="font-weight-bold text-secondary"
              >
                CorkOwl
              </span>
            </div>
            <div>
              <span
                class="copy-right text-secondary"
              >
                &copy; 2020 CorkOwl, All Rights Reserved
              </span>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: 'SidebarContainer',
  data: function () {
    return {
      actions: [
        {
          name: 'Dashboard',
          label: 'Dashboard',
          icon: 'pie-chart',
          route: 'Dashboard'
        },
        {
          name: 'Inventory',
          label: 'Inventory',
          icon: 'layers',
          route: 'Inventory'
        },
        {
          name: 'Orders',
          label: 'Orders',
          icon: 'bag',
          route: 'Orders'
        },
        {
          name: 'Customers',
          label: 'Customers',
          icon: 'person',
          route: 'Customers'
        },
        {
          name: 'Reports',
          label: 'Reports',
          icon: 'file-text',
          route: 'Reports'
        },
        {
          name: 'Settings',
          label: 'Settings',
          icon: 'nut',
          route: 'Settings'
        }
      ]
    };
  },
  methods: {
    isActiveAction: function (actionName) {
      return actionName === this.$route['name'];
    }
  }
};
</script>
<style lang="scss" scoped>
.sidebar-container{
  padding-left:0;
  padding-right:0;

  .action{
    color:#485572;
    padding-top:10px;
    padding-bottom:10px;
    padding-left:15px;

    &.active{
      border-right: 2px solid var(--primary);
    }

    .action-label{
      padding-left:10px;
    }
  }
}
.watermark-container{
  position:relative;

  .watermark{
    position:absolute;
    bottom:5px;

    .copy-right{
      font-size:7pt;
    }
  }
}
</style>
