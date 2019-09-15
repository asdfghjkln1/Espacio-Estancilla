<template>
  <v-container fluid class="main-container">
    <v-container>
    <h2 id="section-title" class="display-3 text-center text--darken-2 text-uppercase">Centro Deportivo</h2>
    <h3 class="text-center" style="width: 70%; margin-left: 18%;">Para actividades deportivas, contamos con una cancha de futbolito, piscina y amplios camarines. También disponemos de tenis de mesa y pool. Se pueden arrendar por horas o por jornada completa.
    </h3>
    </v-container>
    <v-container style="width:100%; height:100%;">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 25" preserveAspectRatio="none" width="100%" height="25">
            <polygon points="0,0 960,0 480,25" style="fill:#ffa700;"/>
        </svg>
    </v-container>
      <!-- MAIN CONTENT -->
    <v-container v-for="section in content" :key="section.title" class="section-content" fluid grid-list-md text-justify>
        <v-layout class="content-container" wrap align-content-center>
            <img class="background" :src="section.background" width="100%" height="100%"/>
            <img class="subimg" :src="section.subimg" width="100%" height="100%"/>
            <v-flex class="section-text" md6 sm10 :order-md2="section.odd">
                <h2 class="section-title display-2 text-uppercase text-condensed-light" v-bind:style="{ color: section.title_color}" >
                    {{ section.title }}
                </h2>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 25" preserveAspectRatio="xMinYMax" width="100%" height="25">
                    <polygon points="20,0 420,0 360,25" style="fill:#ffa700;"/>
                </svg>
                <p class="sub-text"> {{ section.text }}</p>
            </v-flex>
            <v-flex class="section-gallery" md6 sm12>
                <v-galeria :editable="false" :fotos="section.fotos" :root="section.photo_root"></v-galeria>
            </v-flex>
        </v-layout>
    </v-container>
      <h2 class="display-3 text-md-center section2-title" style="padding: 20px;"> Deportes de Mesa </h2>
      <v-container id="section2" fluid grid-list-md>
          <v-layout wrap justify-center>
              <v-flex v-for="item in subcontent" :key="item.title" lg4 md6 sm12>
                  <v-container color="#EAEAEA" elevation="0" flat height="600px">
                      <hooper :settings="hooperSettings">
                          <slide v-for="foto in item.fotos" :key="foto">
                              <v-img width="100%" height="auto" :src="require('../../public/imagenes/' + foto)"></v-img>
                          </slide>
                          <slide v-if="item.fotos.length === 0">
                              <v-img class="white--text" width="100%" height="auto" :src="require('../../public/imagenes/placeholder-image.png')"></v-img>
                          </slide>
                          <hooper-navigation slot="hooper-addons"></hooper-navigation>
                      </hooper>
                      <v-card-title class="align-end fill-height">{{ item.title}}</v-card-title>
                      <v-divider></v-divider>
                      <p class="resumen-text"> {{ item.text }}</p>
                  </v-container>
              </v-flex>
          </v-layout>
      </v-container>
  </v-container>

</template>
<style>
    .section-title{
        font-family: "museo-sans", sans-serif;
        padding-left: 40px;
    }
    .section-content{
        position: relative;
        z-index: 1;
        margin-bottom: 10%;
    }

    #section2 {
        margin-top: 0;
        padding-top: 0;
    }

    #section2-title {
        top: -20px;
        padding-bottom: 20px;
    }
    .section-text{
        z-index: 2;
        padding: 60px;
        color: #e2dde2;
        text-shadow: 2px 10px 10px rgba(0, 0, 0, 0.75);
        box-shadow: black;
    }
    .section-gallery{
        z-index: 2;
        margin: 0;
        padding: 0;
    }
    .section-title{
        font-family: "museo-sans", sans-serif;
        margin-top: 100px;
        flex-wrap: wrap;
        color: #74baf5 !important;
        margin-bottom: 40px;
    }
    .sub-title-text{
        width: 80%;
        padding-left: 40px;
        font-size: 20px;
        font-weight: bold;
    }
    .sub-text{
        width: 80%;
        font-size: 18px;
        padding-left: 40px;
    }
    img.background{
        position: absolute;
        top: 0;
        left: -10%;
        padding: 0;
        opacity: 0.80;
        filter: brightness(50%);
        z-index: 0;
        clip-path: polygon(0% 16%, 68% 6%, 68% 70%, 41% 100%, 0% 100%);/* polygon(0% 16%, 100% 0%, 100% 66%, 74% 100%, 0% 100%); */
        -webkit-clip-path: polygon(0% 16%, 68% 6%, 68% 70%, 41% 100%, 0% 100%);/*clip-path: url(#clip);
        -webkit-clip-path: url(#clip);*/
    }

    .main-container .section-content:nth-child(even) .background{
        left: 0;
        right: -10%;
        -webkit-transform: scale(-1,1);
        -moz-transform: scale(-1,1);
        -ms-transform: scale(-1,1);
        -o-transform: scale(-1,1);
        transform: scale(-1,1);
    }

    .subimg{
        position: absolute;
        bottom: 10px;
        height: 100px;
        width: 100px;
        left: 30%
    }

    @media (max-width: 959px) {
        img.background {
            left: 0;
            clip-path: polygon(0% 8%, 100% 0%, 100% 66%, 74% 100%, 0% 100%);
            -webkit-clip-path: polygon(0% 8%, 100% 0%, 100% 66%, 74% 100%, 0% 100%);
        }
        #main-container .section-content:nth-child(even) .background {
            right: 0;
            clip-path: polygon(0% 8%, 100% 0%, 100% 66%, 74% 100%, 0% 100%);
            -webkit-clip-path: polygon(0% 8%, 100% 0%, 100% 66%, 74% 100%, 0% 100%);
        }

        .subimg{
            top: 20%;
            left: 80%;
        }

    }
</style>
<script>
import { Hooper, Slide, Navigation as HooperNavigation} from 'hooper';
import 'hooper/dist/hooper.css';
export default {
    components: {
      Hooper, Slide, HooperNavigation
    },
  data() {
      return {
          content: [
              {
                  title: 'Futbolito',
                  text: 'Tenemos a su disposición una cancha de futbolito de pasto sintético, recinto enmallado,  de 44 metros de largo y 22 metros de ancho ideal para campeonatos, partidos entre amigos, entre otros.\n',
                  background: require('../../public/imagenes/grass.png'),
                  subimg: require('../../public/imagenes/ball.png'),
                  title_color: '#e2dde2',
                  fotos: ['d1.jpg', 'd2.jpg', 'd3.jpg', 'd4.jpg'],
                  photo_root: 'deportes',
                  odd: false
              },
              {
                  title: 'Piscina',
                  text: 'Tenemos una piscina de 150 metros cuadrados más una piscina para niños. Contamos con amplios camarines, baños especializados y acceso a personas con movilidad reducida',
                  background: require('../../public/imagenes/pool.png'),
                  fotos: [ 'r5.jpg', 'r11.jpg', 'r1.jpg', 'r2.jpg', 'r3.jpg', 'r4.jpg', 'r6.jpg'],
                  photo_root: 'actividades',
                  subimg: null, /*require('../../public/imagenes/swim.png'),*/
                  title_color: '#e2dde2',
                  odd: true,
              },

              {
                  title: 'Tenis (En construcción)',
                  text: 'Próximamente instalaremos una cancha de tenis de arcilla. Notificaremos en esta sección su fecha de inauguración',
                  background: require('../../public/imagenes/court.png'),
                  fotos: [],
                  photo_root: 'deportes',
                  subimg: require('../../public/imagenes/tennis-ball.png'),
                  title_color: '#e2dde2',
                  odd: false,
              },
          ],
          hooperSettings: {
              itemsToShow: 1,
              centerMode: true,
              breakpoints: {
                  800: {
                      centerMode: false,
                      itemsToShow: 3
                  },
                  1000: {
                      itemsToShow: 1,
                  }
              }
          },
          subcontent: [
              {
                  title: 'Tenis de mesa',
                  text: 'Tenemos una mesa disponible, además de paletas y pelotas.',
                  fotos: [],
                  link: ''
              },
              {
                  title: 'Mesa de Pool',
                  text: 'Tenemos una mesa de pool disponible y todo lo necesario para jugar. Próximamente habilitaremos una segunda mesa',
                  fotos: ['eventos/e7.jpg'],
                  link: ''
              }
          ]
      }
  },
    methods: {
    },
    created (){

    }
};
</script>
