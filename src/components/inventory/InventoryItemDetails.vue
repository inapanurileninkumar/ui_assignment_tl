<template>
  <div
    class="pl-5"
  >
    <b-container
      fluid
    >
      <b-row
        align-v="center"
        align-h="between"
        class="pb-3"
      >
        <b-col
          class="pl-0"
        >
          <div>
            <span class="font-weight-bold">{{ item['label'] }}</span>
          </div>
          <div>
            <span class="font-weight-bold">Region : </span>
            <span class="text-secondary">{{ item['region'] }}</span>
            <span class="font-weight-bold ml-5">Vintage : </span>
            <span class="text-secondary">{{ item['vintage'] }}</span>
          </div>
        </b-col>
        <b-col>
          <b-row
            align-h="end"
          >
            <span
              class="text-danger view-wine font-weight-bold pointer-cursor"
            >
              View wine
            </span>
            <span
              class="ml-3 pointer-cursor"
            >
              <b-icon
                icon="pencil-square"
              />
            </span>
            <span
              class="ml-3"
            >
              <b-icon
                icon="trash"
                variant="secondary"
              />
            </span>
          </b-row>
        </b-col>
      </b-row>
      <b-row
        class="border-top border-secondary-lite pt-3"
      >
        <b-col
          cols="6"
          class="pl-0"
        >
          <span class="text-secondary font-weight-bold rating-header">RATING</span>
          <b-container fluid>
            <b-row>
              <b-col
                v-for="rating in item['ratings']"
                :key="rating['name']"
                cols="4"
                class="pl-0 pb-3"
              >
                <div
                  class="font-weight-bold text-truncate"
                  :title="rating['name']"
                >
                  <span>{{ rating['name'] }}</span>
                </div>
                <div
                  class="mt-2"
                >
                  <span
                    class="bg-secondary-lite pt-1 pb-1 pl-3 pr-3 rounded text-secondary-dark"
                  >
                    <template
                      v-if="rating['rating']"
                    >
                      {{ `${rating['name'].split(' ').map(a=>a[0]).join('')}` }} {{ rating['rating'] }}
                    </template>
                    <template
                      v-else
                    >
                      --
                    </template>
                  </span>
                </div>
              </b-col>
            </b-row>
          </b-container>
        </b-col>
        <b-col
          cols="6"
        >
          <span class="text-secondary font-weight-bold rating-header">STOCK</span>
          <b-container fluid>
            <b-row>
              <b-col
                v-for="stock in item['stocks']"
                :key="stock['name']+'_'+stock['units']"
                cols="4"
                class="pl-0"
              >
                <div>
                  <span
                    class="font-weight-bold"
                  >
                    {{ stock['name'] }}
                  </span>
                </div>
                <div
                  class="mt-1"
                >
                  <span
                    class="bg-primary-lite text-primary font-weight-bold p-1 rounded stock-unit"
                  >
                    {{ stock['units'] }} units
                  </span>
                </div>
              </b-col>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: 'DashboardInventory',
  props: {
    item: {
      type: Object,
      default: null
    }
  }
};
</script>
<style lang="scss" scoped>
.view-wine{
    text-decoration:underline;
}
.rating-header{
    font-size:8pt;
    letter-spacing:1px;
}
.stock-unit{
    font-size:8pt;
}
</style>
