<template>
  <b-container
    fluid
    class="bg-primary navbar-container"
  >
    <b-row
      align-v="center"
    >
      <b-col
        cols="2"
        sm="12"
        md="2"
        lg="2"
        xl="2"
        class="pl-4"
        @click="routeTo('Dashboard')"
      >
        <b-navbar-brand
          href="#"
          class="text-white"
          style="letter-spacing:1px;"
        >
          <b-row
            align-v="center"
          >
            <span>CORK</span>
            <img :src="require('@assets/media/images/brand_logo.png')" >
            <span>WL</span>
          </b-row>
        </b-navbar-brand>
      </b-col>
      <b-col
        cols="4"
        sm="12"
        md="4"
        lg="4"
        xl="4"
      >
        <b-form-input
          type="text"
          placeholder="Search wines, customers here"
        />
      </b-col>
      <b-col
        cols="3"
        sm="12"
        md="3"
        lg="3"
        xl="3"/>
      <b-col
        cols="3"
        sm="12"
        md="3"
        lg="3"
        xl="3"
      >
        <b-row
          align-v="center"
          align-h="end"
        >
          <b-dropdown
            id="dropdown-right"
            right
            variant="outline-primary"
            class="m-2"
            no-caret
          >
            <template #button-content>
              <b-icon
                icon="bell"
                class="text-white"
              />
            </template>
          </b-dropdown>
          <b-dropdown
            id="dropdown-right"
            right
            variant="outline-primary"
            class="m-2"
            no-caret
          >
            <template
              #button-content
            >
              <div
                class="text-white"
              >
                <span>Nicholas.D</span>
                <!--
                <b-avatar
                  variant="white"
                /> -->
                <b-icon
                  icon="chevron-down"
                />
              </div>
            </template>
            <b-dropdown-item>
              <b-icon
                icon="person"
              />
              Profile
            </b-dropdown-item>
            <b-dropdown-divider/>
            <b-dropdown-item>
              <b-icon
                icon="power"
              />
              Logout
            </b-dropdown-item>
          </b-dropdown>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Navbar',
  data: function () {
    return {};
  },
  methods: {

  }
};
</script>
<style lang="scss" scoped>
.navbar-container{
  position:sticky;
  top:0px;
  z-index:1;
}
</style>
