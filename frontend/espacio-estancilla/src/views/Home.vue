<template>
  <div>
  <Heading/>
  <v-divider></v-divider>
  <v-container fluid grid-list-md>
      <v-layout wrap justify-center>
         <v-flex v-for="item in content" :key="item.title" lg4 md6 sm12>
             <v-container color="#EAEAEA" elevation="0" flat height="600px">
                 <v-card>
                 <v-img class="white--text" width="100%" height="auto" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"></v-img>
                 </v-card>
                 <v-card-title class="align-end fill-height">{{ item.title}}</v-card-title>
                 <v-divider></v-divider>
                 <p class="resumen-text"> {{ item.text }}</p>
                 <v-btn outlined color="orange" :to="item.link">Ver detalles</v-btn>
             </v-container>
         </v-flex>
      </v-layout>
  </v-container>
      <v-container>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.2599047433728!2d-70.65480477723212!3d-34.0372035437262!2m3
          !1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966347ba03ab3243%3A0xfe83aaca7623b915!2sEstancilla+1207%2C+Codegua%2C+Regi%C3%B3n+
          del+Libertador+Gral.+Bernardo+O%E2%80%99Higgins!5e0!3m2!1sen!2scl!4v1565145313774!5m2!1sen!2scl" width="600" height="450"
                  frameborder="0" style="border:0" allowfullscreen></iframe>
      </v-container>
  </div>
</template>
<style>
    .resumen-text{
        padding: 30px 15px 15px 15px;
    }
</style>
<script>
import Heading from '../components/Heading.vue'
export default {
  components: {
    Heading
  },
    data() {
      return {
          content: [
              {
                  title: 'Piscina',
                  text: 'Disfruta de la piscina de 150 metros cuadrados y la piscina para niños! ',
                  img: '',
                  link: '/deportes'
              },
              {
                  title: 'Cerveza artesanal Leonera',
                  text: 'Queremos dar a conocer nuestra cerveza de producción artesanal propia , y posicionarnos en distintas regiones de Chile como una cerveza de excelente calidad, sabor y aroma',
                  img: '',
                  link: '/eventos'
              },
              {
                  title: 'Paseos de colegios',
                  text: 'Para este tipo de paseos contamos con una cancha de Fútbol, áreas de esparcimiento, zona de quincho, juegos infantiles y la piscina. Además podemos prestar servicios gastronómicos. Organiza un paseo en Espacio Estancilla!',
                  img: '',
                  link: ''
              },
              {
                  title: 'Matrimonios y bautizos',
                  text: 'Disponemos de todo lo necesario para la realización de su evento: mesas, sillas, cocina, manteles, etc. Consultar directamente si desea arrendar el local o el servicio completo',
                  img: '',
                  link: ''
              },
              {
                  title: 'Sanguchería y Cervecería',
                  text: 'Disfruta de nuestros Sandwiches en nuestro local de comida. Contamos con expendio de cerveza comercial y artesanal para complementar un buen sandwich',
                  img: '',
                  link: ''
              }
          ]
      }
    }
};
</script>
