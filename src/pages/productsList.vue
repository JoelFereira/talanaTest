<template>
  <v-container grid-list-xs>
    <h2>{{$route.name == "products" ? "Todos los Productos" : $route.params.category}}</h2>
    <v-breadcrumbs :items="breadcrumbsItems">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <v-container grid-list-xs>
      <v-card v-for="(product, index) in productsList" :key="index" class="product">
        <v-img class="white--text align-end" height="200px" :src="product.photo">
          <v-card-title class="status">{{product.stock > 0 ? "Disponible" : "Sin Stock"}}</v-card-title>
        </v-img>

        <v-card-text class="text--primary">
          <div>{{product.name}}</div>

          <div>{{`$ ${product.price.toLocaleString()}`}}</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="deep-purple accent-4" @click="addToCart(product)" class="add-to-cart" dark><v-icon>fa-cart-plus</v-icon></v-btn>
        </v-card-actions>
      </v-card>
      <h1 v-if="productsList.length == 0">Categoría sin productos</h1>
    </v-container>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getAllProducts");
  },
  computed: {
    ...mapState({
      categories: state => state.products.categories,
      products: state => state.products.products
    }),
    breadcrumbsItems() {
      let items = [];
      if (this.$route.name != "products") {
        items = [
          {
            text: "Productos",
            disabled: false,
            href: "/"
          },
          {
            text: this.$route.params.category,
            disabled: true,
            href: this.$route.path
          }
        ];
      } else {
        items = [
          {
            text: "Productos",
            disabled: true,
            href: "/"
          }
        ];
      }

      return items;
    },
    productsList() {
      if (this.$route.name != "products")
        return this.products.filter(
          e =>
            e.category.name.toUpperCase() ==
              this.$route.params.category.toUpperCase() ||
            e.attributes.some(
              subE =>
                subE.name.toUpperCase() ==
                this.$route.params.category.toUpperCase()
            )
        );
      return this.products;
    }
  },
  methods: {
    addToCart(product) {
      this.$store.commit("ADD_TO_CART", product)
    }
  }
};
</script>