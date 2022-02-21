<template>
  <div
  >
    <b-container fluid>
      <b-row>
        <b-col
          cols="2"
          class="max-allowed-container--navbar sidebar-container"
        >
          <sidebar-container />
        </b-col>
        <b-col
          cols="10"
          class="max-allowed-container--navbar overflow-y--auto invisibleScrollbar content"
        >
          <product-dashboard
            @reload-metrics="$emit('reload-metrics')"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import SidebarContainer from '@components/utils/SidebarContainer';
import ProductDashboard from '@components/dashboard/ProductDashboard';

export default {
  name: 'Dashboard',
  components: { SidebarContainer, ProductDashboard }
};
</script>
<style lang="scss" scoped>
.sidebar-container{
  border-right:1px solid whitesmoke;
}
.content{
  padding-right:10px;
}
</style>
