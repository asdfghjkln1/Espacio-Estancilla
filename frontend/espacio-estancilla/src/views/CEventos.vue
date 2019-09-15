<template>
    <v-container fluid class="main-container">
        <v-container fluid justify-center class="parallax-container text-center">
            <v-parallax class="parallax" dark :src="image_parallax"><!--src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">-->
                <v-layout align-center>
                    <v-flex lg6 md12>
                        <h1 class="display-3 mb-4">Centro de Eventos</h1>
                        <v-card class="parallax-text" flat color="rgba(0,0,0, 0.0)">
                            <!--<v-card-title class="subheading white--text text-lg-center text-md-start">consectetur adipisicing elit. Ad, alias dolorum ea eum,</v-card-title>-->
                            <v-card-text class="subheading text-lg-center text-md-start">
                                <p class="white--text mb-2">Espacio Estancilla posee un estilo campestre el cual cuenta con amplios ambientes para la realización de eventos. Disponemos de terraza exterior, salón de baile, bar, piscina y estacionamiento interior. Estas zonas se pueden adecuar para cualquier requerimiento, sean paseos, matrimonios, seminarios, eventos empresariales entre otros.</p>
                                <!--<p class="white--text">Espacio Estancilla cuenta con amplios ambientes para la realización de eventos. Disponemos de terraza exterior, salón de baile, piscina y estacionamiento interior. Estas zonas se pueden adecuar para cualquier requerimiento, sean eventos corporativos o celebraciones privadas</p>-->
                                <v-layout align-center justify-center>
                                    <v-breadcrumbs dark large :items="items" divider="/" class="white--text bread"></v-breadcrumbs>
                                </v-layout>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex align-self-center lg6 class="hidden-md-and-down">
                        <v-container class="parallax-image-container" width="100%" height="auto">
                            <v-img :src="main_image"></v-img>
                        </v-container>
                    </v-flex>
                </v-layout>
            </v-parallax>
        </v-container>
        <v-divider light></v-divider>
        <v-container fluid justify-center>
            <v-layout v-for="(section, index ) in content" :key="index" v-bind:id="'e' + index" align-center wrap>
                <v-flex md6 sm12 :order-lg2="section.odd">
                    <h4 class="content-title"> {{ section.title}}</h4>
                    <p class="content-text"> {{ section.text }}</p>
                </v-flex>
                <v-flex md6 sm12 :order-lg1="section.odd">
                    <Galeria class="gallery" :fotos="section.fotos" :root="'eventos'"></Galeria>
                </v-flex>
            </v-layout>
        </v-container>
  </v-container>
</template>
<script>
import Galeria from '../components/Galeria.vue';
export default {
  name: 'CRecreacional',
  data() {
      return{
          main_image: require('../../public/imagenes/eventos/e8.jpg'),
          image_parallax: require('../../public/imagenes/actividades/r7.jpg'),
          content: [
              {
                  title: 'Cumpleaños / Fiestas',
                  text: 'En Espacio Estancilla contamos con diversos juegos para niños, como juegos inflables, taca-taca, tenis de mesa, y cancha de futbolito para que los niños puedan jugar y divertirse',
                  fotos: ['e1.jpg', 'e2.jpg', 'e3.jpg', 'e9.jpg', 'e14.jpg'],
                  odd: false
              },
              {
                  title: 'Matrimonios / Bautizos',
                  text: 'Disponemos de todo lo necesario para la realización de su evento: mesas, sillas, cocina, manteles, etc. Consultar directamente si desea arrendar el local o el servicio completo',
                  fotos: ['e4.jpg', 'e5.jpg', 'e10.jpg', "e12.jpg", 'e8.jpg'],
                  odd: true
              },
              {
                  title: 'Ceremonias / Graduaciones',
                  text: 'Puedes arrendar el local para conmemorar un momento importante, para ello tenemos el salón y terraza con capacidad para 100 personas',
                  fotos: ['e11.jpg', 'e13.jpg', 'e15.jpg'],
                  odd: false
              },
          ],
          items: [
              {
                  text: 'Cumpleaños',
                  disabled: false,
                  to: '#e0'
              },
              {
                  text: 'Matrimonios',
                  disabled: false,
                  to: '#e1'
              },
              {
                  text: 'Ceremonias',
                  disabled: false,
                  to: '#e2'
              }
          ]
      }
  },
  components: {
    Galeria
  },
};
</script>
