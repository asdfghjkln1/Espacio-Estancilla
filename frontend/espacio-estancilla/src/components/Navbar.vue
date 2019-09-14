<style>
    @media only screen and (max-width: 959px) {
        #title {
            align-content: center;
            margin: auto;
        }
    }
    #title{
        margin: auto;
    }
    #nav-title{
        font-size: 30px;
        font-family: Raleway;
    }
</style>
<template>
    <div>
    <v-app-bar app dark clipped-left tile shrink-on-scroll prominent scroll-threshold="200" dense v-bind:style="{  backgroundColor: nav_background}">
      <v-toolbar-title id="title">
          <router-link to="/" tag="span" style="cursor: pointer">
              <h2 id="nav-title">Espacio <span v-bind:style="{ color: subColor}">Estancilla</span></h2> <!--<v-img width="150" height="auto" :src="logo"></v-img>-->
          </router-link>
      </v-toolbar-title>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
            <v-btn text wrap v-for="item in menu" :key="item.display" :to="item.link" class="nav-button">
                <span style="white-space: normal;">{{ item.display }}</span>
            </v-btn>
          <v-icon left dark>mdi-user</v-icon>
      </v-toolbar-items>
        <!--<mq-layout :mq="['xsm', 'sm', 'md']">
            <v-app-bar-nav-icon v-on:click="open = !open"></v-app-bar-nav-icon>
        </mq-layout>-->
        <v-divider vertical inset></v-divider>
        <v-app-bar-nav-icon style="margin: auto;" v-on:click="open = !open" class="hidden-md-and-up"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer app temporary v-model="open" class="light-blue text--black">
        <v-subheader> Espacio Estancilla - Menú</v-subheader>
        <v-list>
            <v-list-item v-for="item in menu" :key="item.display" :to="item.link">
                <v-icon left>mdi-user</v-icon>
                <v-list-item-content>
                    {{ item.display}}
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            open: false,
            subColor: '#edce63',
            logo: require('../../public/imagenes/logo2.png'),
            nav_background: '#19346b',
            menu: [
                { display: 'Centro Deportivo', link: '/deportes'},
                { display: 'Centro de Eventos', link: '/eventos'},
                { display: 'Actividades Recreativas', link: '/actividades'},
                /*{ display: 'Gastronomía', link: '/gastronomia'},*/
                { display: 'Cerveza Leonera', link: '/cerveza'},
            ]
        }
    },
};
</script>
