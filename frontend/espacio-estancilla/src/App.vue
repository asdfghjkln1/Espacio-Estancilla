<template>
  <v-app id="app">
      <v-system-bar class="info_bar" app dark color="green">
          <v-icon style="margin-left: 2%">mdi-phone</v-icon>
          <span>+(56)9 9501 1846</span>
          <v-icon style="margin-left: 5%">mdi-email</v-icon>
          <span>correo@gmail.com</span>
          <v-icon style="margin-left: 5%">mdi-facebook</v-icon>
          <span>@Espacioestancilla</span>
       </v-system-bar>
    <Navbar></Navbar>
    <v-content id="main-app">
        <v-container fluid id="main-div" v-bind:style="{ backgroundColor: main_color}">
            <router-view></router-view>
        </v-container>
    </v-content>
      <Footer></Footer>
  </v-app>
</template>

<style>
    #app{
        position: relative;
        min-height: 100%;
    }
    .info_bar *{
        user-select: text;
        -moz-user-select: text;
        -khtml-user-select: text;
        -webkit-user-select: text;
        -o-user-select: text;
    }

    #main-app, #main-div{
        margin: 0;
        padding: 0;
    }
    #main-div{
        padding-bottom: 190px;
    }
</style>
<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components: {
      Navbar,
      Footer
  },
  data: () => ({
    main_color: '#EAEAEA'
  }),
};
</script>
