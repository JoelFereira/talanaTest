<template>
  <v-toolbar color="deep-purple accent-4" dense dark>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>fa-search</v-icon>
    </v-btn>

    <v-menu left bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>fa-shopping-cart</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item>
            <h3>Resumen de Compras</h3>
        </v-list-item>
        <v-list-item v-for="n in cart" :key="n" @click="() => {}">
          <v-list-item-title>{{n.name}}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: "Toolbar",
    data () {
        return {

        }
    },
    computed:{
        ...mapState({
            cart: state => state.cart.cart
        })
    }
};
</script>
