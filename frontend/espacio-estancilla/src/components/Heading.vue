<style>
    #main{
        background-color: whitesmoke;
        width: 100%;
        height: auto;
        max-width: 100%;
        max-height: 100%;
        opacity: 1;
        object-fit: contain;
    }
    #box{
        position: relative;
        display: inline-block; /* Make the width of box same as image */
        margin-left: auto;
        width: 100%;

    }
    #box .text{
        position: absolute;
        z-index: 1;
        margin: 0 auto;
        left: 0;
        text-shadow: 5px 10px 10px rgba(0, 0, 0, 0.75);
        box-shadow: black;
        right: 0;
        text-align: center;
        top: 20%; /* Adjust this value to move the positioned div up and down */
        color: #fff;
        width: 60%; /* Set the width of the positioned div */
    }
    .trans-enter-active{
        -webkit-animation: coming 1s;
        -o-animation: coming 1s;
        animation: coming 1s;
        -webkit-animation-delay: 1s;
        -moz-animation-delay: 1s;
        -o-animation-delay: 1s;
        animation-delay: 1s;
        opacity: 0;
    }

    .trans-leave-active{
        -webkit-animation: going 1s;
        -o-animation: going 1s;
        animation: going 1s;
    }

    @keyframes coming {
        from{
            transform: translateX(-50px);
            opacity: 0;
        }
        to{
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes going {
        from{
            transform: translateX(0);
            opacity: 1;
        }
        to{
            transform: translateX(-50px);
            opacity: 0;
        }
    }
</style>
<template>
    <div id="box">
    <img id="main" src="../../public/imagenes/entrada.jpg">
         <!--mode="out-in" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutDown"-->
        <transition name="trans" mode="out-in">
        <v-layout class="text" align-center column justify-center>
            <div style="width: 50%; height: auto;">
                <v-img :src="require('../../public/imagenes/logo2.png')"></v-img>
            </div>
            <!--<h2 class="display-3 font-weight-bold mb-4">Espacio Estancilla</h2>
            <h4 class="subtitle-1 font-weight-regular font-italic">Centro deportivo y recreativo</h4>-->
        </v-layout>
        </transition>
    </div>
</template>
<script>
    export default {
        name: "Heading"
    }
</script>
