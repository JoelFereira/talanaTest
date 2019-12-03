<template>
  <v-app>
    <sidebar/>
    <v-content>
      <toolbar/>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Sidebar from "./components/sidebar";
import Toolbar from "./components/toolbar";
export default {
  name: "App",
  components: {
    Sidebar,
    Toolbar
  },
  data: () => ({
    //
  }),
  computed: {}
};
</script>

<style lang="sass">
  @import 'styles/styles.sass'
</style>
