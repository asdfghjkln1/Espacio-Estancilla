<template>
    <div>
            <!--<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" preserveAspectRatio="xMinYMin meet">
                <clipPath id="clipCircle">
                    <circle class="circle" r="100" cx="150" cy="150"/>
                </clipPath>
            </svg>-->
        <v-container style="padding: 0; margin: 0;" fluid>
        <div class="box">
        <img class="main-bg" src="../../public/imagenes/9816(2).png">
        <v-container  fluid grid-list-md justify-space-around>
            <v-layout wrap id="centered-layout" class="main-layout" align-center justify-center>
                <v-flex order-lg-1 order-md-2 class="side-section hidden-sm-and-down" lg4 md6>
                    <v-layout wrap align-center justify-center column>
                        <v-flex lg4 md3>
                            <v-img height="180" width="180" aspect-ratio="1" class="preview-icon" :src="require('../../public/imagenes/gastronomia/sandwich.jpg')"></v-img>
                            <v-btn @click="$vuetify.goTo('#sanguches-title')" elevation="8" size="large" color="info" rounded class="food-preview-title"> Sandwiches </v-btn>
                        </v-flex>
                        <v-flex lg4 md3>
                            <v-img height="180" width="180" aspect-ratio="1" id="icon-sandwich" class="preview-icon" :src="require('../../public/imagenes/gastronomia/cake.jpg')"></v-img>
                            <v-btn @click="$vuetify.goTo('#pasteles-title')" elevation="8" size="large" color="info" rounded class="food-preview-title"> Pastelería</v-btn>
                        </v-flex>
                    </v-layout>
                </v-flex>
                <v-flex  order-lg-2 order-md-1 lg4 md12>
                    <h2 class="center-header">Gastronomía</h2>
                    <h4 class="subtitle-1 font-weight-regular font-italic">Sanguchería, Cervecería y Pastelería</h4>
                </v-flex>
                <v-flex order-lg-3 order-md-3 class="side-section hidden-sm-and-down" lg4 md6>
                    <v-layout align-center justify-center column>
                        <v-flex height="180" width="180" lg4 md3>
                            <v-img aspect-ratio="1" id="icon-sandwih" class="preview-icon" :src="require('../../public/imagenes/gastronomia/beer.jpg')"></v-img>
                            <v-btn @click="$vuetify.goTo('#cervezas-title')" elevation="8" np color="info" rounded class="food-preview-title"> Cervezas Artesanales </v-btn>
                        </v-flex>
                        <v-flex height="180" width="180" lg4 md3>
                            <v-img aspect-ratio="1" id="icon-sandwich" class="preview-icon" :src="require('../../public/imagenes/gastronomia/almuerzo.jpg')"></v-img>
                            <v-btn @click="$vuetify.goTo('#cocteles-title')" elevation="8" size="large" color="info" rounded class="food-preview-title"> Coctelería </v-btn>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>
        </div>
        </v-container>
        <v-container fluid grid-list-md>
            <v-layout wrap justify-space-around>
            <v-flex class="food-container" lg5 sm10>
                <v-toolbar color="green" dark>
                    <v-toolbar-title id="sanguches-title">Sandwichs</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <v-list elevation="7" two-line>
                    <div v-for="(sanguche, i) in sanguches" :key="i">
                        <v-list-item>
                            <div class="food-icon-container">
                                <v-img height="120" width="120" class="food-icon" :src="sanguche.foto"></v-img>
                            </div>
                            <v-list-item-content>
                                <v-list-item-title> {{sanguche.nombre}} </v-list-item-title>
                                <v-list-item-subtitle> {{ sanguche.descripcion}} </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-divider inset></v-divider>
                    </div>
                </v-list>
            </v-flex>
            <v-flex class="food-container" lg5 sm10>
                <v-toolbar color="brown" dark>
                    <v-toolbar-title id="pasteles-title">Pasteles y tortas</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <v-list elevation="7" two-line>
                    <div v-for="(pastel, i) in pasteles" :key="i">
                        <v-list-item>
                            <div class="food-icon-container">
                                <v-img height="120" width="120" class="food-icon" :src="pastel.foto"></v-img>
                            </div>
                            <v-list-item-content>
                                <v-list-item-title> {{pastel.nombre}} </v-list-item-title>
                                <v-list-item-subtitle> {{ pastel.descripcion}} </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-divider inset></v-divider>
                    </div>
                </v-list>
            </v-flex>
            <v-flex class="food-container" lg5 sm10>
                <v-toolbar color="red" dark>
                    <v-toolbar-title id="cervezas-title">Cervezas</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <v-list two-line>
                    <div v-for="(cerveza, i) in cervezas" :key="i">
                        <v-list-item>
                            <div class="food-icon-container">
                                <v-img height="120" width="120" class="food-icon" :src="cerveza.foto"></v-img>
                            </div>
                            <v-list-item-content>
                                <v-list-item-title> {{cerveza.nombre}} </v-list-item-title>
                                <v-list-item-subtitle> {{ cerveza.descripcion}} </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-divider inset></v-divider>
                    </div>
                </v-list>
            </v-flex>
            <v-flex class="food-container" lg5 sm10>
                <v-toolbar color="blue" dark>
                    <v-toolbar-title id="cocteles-title">Coctelería</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <v-list two-line>
                    <div v-for="(coctel, i) in cocteles" :key="i">
                        <v-list-item>
                            <div class="food-icon-container">
                                <v-img height="120" width="120" class="food-icon" :src="coctel.foto"></v-img>
                            </div>
                            <v-list-item-content>
                                <v-list-item-title> {{ coctel.nombre }} </v-list-item-title>
                                <v-list-item-subtitle> {{ coctel.descripcion }} </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                         <v-divider inset></v-divider>
                    </div>
                </v-list>
            </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
    //import * as easings from 'vuetify/es5/services/goto/easing-patterns'
    export default {
        name: "Gastronomia",
        data() {
            return {
                sanguches: [
                    {
                        nombre: 'Aliado',
                        descripcion: 'Pan con queso y jamón',
                        foto: require('../../public/imagenes/gastronomia/sandwich.jpg')
                    },
                    {
                        nombre: 'Aliado',
                        descripcion: 'Pan con queso y jamón',
                        foto: require('../../public/imagenes/gastronomia/sandwich.jpg')
                    },
                    {
                        nombre: 'Aliado',
                        descripcion: 'Pan con queso y jamón',
                        foto: require('../../public/imagenes/gastronomia/sandwich.jpg')
                    },
                    {
                        nombre: 'Aliado',
                        descripcion: 'Pan con queso y jamón',
                        foto: require('../../public/imagenes/gastronomia/sandwich.jpg')
                    },
                ],
                pasteles: [
                    {
                        nombre: 'Pie de limón',
                        descripcion: 'tiene limón',
                        foto: require('../../public/imagenes/gastronomia/cake.jpg')
                    },
                    {
                        nombre: 'Torta',
                        descripcion: 'tiene chocolate',
                        foto: require('../../public/imagenes/gastronomia/cake.jpg')
                    },
                    {
                        nombre: 'Torta 2',
                        descripcion: 'tiene crema',
                        foto: require('../../public/imagenes/gastronomia/cake.jpg')
                    },
                    {
                        nombre: 'Torta 3',
                        descripcion: 'es de biscocho',
                        foto: require('../../public/imagenes/gastronomia/cake.jpg')
                    },
                ],
                cervezas: [
                    {
                        nombre: 'Cerveza Leonera',
                        descripcion: 'descripcion',
                        foto: require('../../public/imagenes/gastronomia/beer.jpg')
                    },
                    {
                        nombre: 'Cerveza 1',
                        descripcion: 'descripcion',
                        foto: require('../../public/imagenes/gastronomia/beer.jpg')
                    },
                    {
                        nombre: 'Cerveza 2',
                        descripcion: 'descripcion',
                        foto: require('../../public/imagenes/gastronomia/beer.jpg')
                    },
                    {
                        nombre: 'Cerveza 3',
                        descripcion: 'descripcion',
                        foto: require('../../public/imagenes/gastronomia/beer.jpg')
                    },
                ],
                cocteles: [
                    {
                        nombre: 'Canapés',
                        descripcion: 'descripcion',
                        foto: require('../../public/imagenes/gastronomia/almuerzo.jpg')
                    },
                    {
                        nombre: 'Degustaciones (?)',
                        descripcion: 'descripcion',
                        foto: require('../../public/imagenes/gastronomia/almuerzo.jpg')
                    },
                ],
            }
        },
    }
</script>
<style>
    .main-bg{
        width: 100%;
        height: auto;
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }
    .box{
        position: relative;
        display: inline-block; /* Make the width of box same as image */
    }

    .food-container{
        margin: 0;
        padding: 0 !important;
    }

    #centered-layout{
        margin: 0 auto;
        left: 0;
        text-align: center;
        width: 100%;
    }

    .food-preview-title{
        top: -20px;
        z-index: 2;
        margin: 0;
        padding: 0;
        font-size: 23px;
        color: black;
    }

    .center-header{
        font-family: "Raleway", "Roboto", Palatino, sans-serif;
        text-shadow: 5px 10px 10px rgba(0, 0, 0, 0.75);
        box-shadow: black;
        font-size: 40px;
    }

    .preview-icon{
        background-repeat: no-repeat;
        background-size: cover;
        overflow:hidden;
        z-index: 2;
        -webkit-border-radius:50%;
        -moz-border-radius:50%;
        border-radius:50%;
        margin: 0; padding: 0;
    }

    .food-icon-container{
        width: 120px;
        height: 120px;
        margin: 15px;
    }

    .food-icon{
        -webkit-border-radius: 60px;
        -webkit-background-clip: padding-box;
        -moz-border-radius: 60px;
        -moz-background-clip: padding;
        border-radius: 60px;
        background-clip: padding-box;
        float: left;
        background-size: contain;
        background-position: center center;
    }



    .circle{
        display: inline-block;
        vertical-align: middle;
    }
</style>
