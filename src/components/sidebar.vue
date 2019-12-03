<template>
  <div>
    <v-navigation-drawer app clipped class="navbar">
      <v-list-item>
        <v-list-item-title>LOGO</v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item link :to="category.name" v-for="(category, key) in categories" :key="key">
          <v-list-item-title>{{category.name}}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Navbar",
  data() {
    return {};
  },
  created() {
    this.$store.dispatch('getAllCategories')
  },
  computed: {
    ...mapState({
      categories: state => state.products.categories
    }),
    notNavbar() {
      if (!this.$route.meta.navbar) return false;
      return true;
    },
    routesList() {
      let routes = this.$router.options.routes;
      let arryFather = [];
      let ignoreRoutes = ["login"];
      for (let i = 0; i < routes.length; i++) {
        let route = routes[i];
        if (ignoreRoutes.some(e => e == route.name)) continue;
        arryFather.push(route);
      }
      return arryFather;
    }
  },
  methods: {
    closeSession() {
      this.$store.dispatch("closeSession");
      this.$router.push({ name: "login" });
    }
  }
};
</script>