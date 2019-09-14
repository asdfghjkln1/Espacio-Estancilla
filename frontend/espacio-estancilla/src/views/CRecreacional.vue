<template>
    <v-container fluid class="main-container">
        <v-container>
            <h2 id="section-title" class="display-3 text-center text--darken-2 text-uppercase">Actividades Recreativas</h2>
        </v-container>
        <v-container style="width:100%; height:100%;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 25" preserveAspectRatio="none" width="100%" height="25">
                <polygon points="0,0 960,0 480,25" style="fill:#ffa700;"/>
            </svg>
        </v-container>
        <v-container class="section1" fluid grid-list-md>
            <v-container>
                <div style="padding: 25px;">
                    <h2 class="display-2">Actividades al aire libre</h2>
                </div>
            </v-container>
            <v-layout wrap justify-center>
                <v-flex v-for="item in items1" :key="item.title" lg4 md6 sm12>
                    <v-container elevation="0" flat height="1000px">
                        <hooper class="hooper" :settings="hooperSettings">
                            <slide v-for="foto in item.fotos" :key="foto">
                                <v-img width="100%" height="auto" :src="require('../../public/imagenes/' + foto)"></v-img>
                            </slide>
                            <slide v-if="item.fotos.length === 0">
                                <v-img class="white--text" width="100%" height="auto" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"></v-img>
                            </slide>
                            <hooper-navigation slot="hooper-addons"></hooper-navigation>
                        </hooper>
                        <v-card-title class="align-end fill-height"> {{ item.title}}</v-card-title>
                        <p class="resumen-text"> {{ item.text}}</p>
                    </v-container>
                </v-flex>
            </v-layout>
        </v-container>
        <svg class="separator-upper" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path class="curveDown" d="M0 0 C 50 100 80 100 100 0 Z"></path>
        </svg>
        <v-container class="section2" fluid grid-list-md>
            <v-container>
                <div>
                    <h2 class="display-2">Paseos Grupales</h2>
                </div>
            </v-container>
            <v-layout wrap justify-center>
                <v-flex v-for="item in items2" :key="item.title" lg6 md6 sm12>
                    <v-container elevation="0" flat height="900px">
                        <hooper class="hooper" :settings="hooperSettings">
                            <slide v-for="foto in item.fotos" :key="foto">
                                <v-img width="100%" height="auto" :src="require('../../public/imagenes/'+ foto)"></v-img>
                            </slide>
                            <slide v-if="item.fotos.length === 0">
                                <v-img class="white--text" width="100%" height="auto" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"></v-img>
                            </slide>
                            <hooper-navigation slot="hooper-addons"></hooper-navigation>
                        </hooper>
                        <v-card-title class="align-end fill-height"> {{ item.title}}</v-card-title>
                        <p class="resumen-text"> {{ item.text}}</p>
                    </v-container>
                </v-flex>
            </v-layout>
        </v-container>
        <svg class="separator-lower" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path id="triangle1" d="M0 0 L50 100 L100 0 Z"></path>
            <path id="triangle2" d="M50 100 L100 40 L100 0 Z"></path>
        </svg>
  </v-container>
</template>
<style>
    .hooper{
        height: auto;
    }
    .section1{
        padding: 0 !important;
        margin: 0 !important;
        background-color: #EAEAEA;
    }
    .section2{
        padding: 0 !important;
        margin: 0 !important;
        background-color: #FFFAFA;
    }
    .separator-upper{
        background-color: #FFFAFA;
    }
    .separator-lower{
        background-color: #EAEAEA;
    }
    .curveDown{
        fill: #EAEAEA;
    }
    #triangle1{
        fill: #FFFAFA;
    }
    #triangle2{
        fill: #d9d9d9;
    }
</style>
<script>
import { Hooper, Slide, Navigation as HooperNavigation} from 'hooper';
import 'hooper/dist/hooper.css';
export default {
  name: 'CRecreacional',
  data() {
      return{
          dialog: false,
          items1: [
              {
                  title: 'Piscina',
                  text: 'Lorem ipsum dolor sit amet Lorem ipsum dolor Lorem ipsum dolor sit amet Lorem ipsum dolor Lorem ipsum dolor sit amet Lorem ipsum dolor',
                  fotos: [ 'actividades/r1.jpg', 'actividades/r2.jpg', 'actividades/r3.jpg', 'actividades/r4.jpg', 'actividades/r5.jpg']
              },
              {
                  title: 'Zona Quinchos',
                  text: 'Lorem ipsum dolor sit amet Lorem ipsum dolor Lorem ipsum dolor sit amet Lorem ipsum dolor Lorem ipsum dolor sit amet Lorem ipsum dolor',
                  fotos: [],
              },
              {
                  title: 'Camping',
                  text: 'Lorem ipsum dolor sit amet Lorem ipsum dolor Lorem ipsum dolor sit amet Lorem ipsum dolor Lorem ipsum dolor sit amet Lorem ipsum dolor',
                  fotos: ['actividades/r7.jpg']
              },
          ],
          items2: [
              {
                  title: 'Paseos Colegios',
                  text: 'Para este tipo de paseos contamos con la cancha, áreas de esparcimiento, zona de quincho, juegos infantiles y la piscina. Además podemos prestar servicios gastronómicos',
                  fotos: ['deportes/d4.jpg' , 'actividades/r8.jpg']
              },
              {
                  title: 'Paseos Empresas',
                  text: 'Además de la zona de piscina y quinchos, disponemos de barriles de cerveza artesanal para hacer del paseo empresarial algo único e irrepetible',
                  fotos: ['actividades/r6.jpg']
              },
              {
                  title: 'Paseos Adulto Mayor',
                  text: 'Disponemos de servicios gastronómicos, juegos de mesa, área de descanso, calefacción y actividades de entretención',
                  fotos: ['eventos/e10.jpg']
              },
              {
                  title: 'Paseos familiares o grupales',
                  text: 'Puede incluir área de quinchos, zona deportiva. Se pueden sumar actividades tales como paintball, concursos, desafíos, etc. Donde podrás compartir junto a tu familia o amigos.',
                  fotos: []
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
          }
      }
  },
  components: {
      Hooper,
      Slide,
      HooperNavigation
  },
};
</script>
