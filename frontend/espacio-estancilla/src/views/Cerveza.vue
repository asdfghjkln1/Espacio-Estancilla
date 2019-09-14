<style>

    /*.trans-enter-active{
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
    }*/

    .label-container{
        transition: all .4s ease-in-out;
        text-shadow: 5px 10px 10px rgba(0, 0, 0, 0.75);
        box-shadow: black;
    }
    .label-container:hover{
        text-shadow: 0px 12px 5px rgba(0, 0, 0, 0.75);
        -webkit-transform: scale(1.07);
        -moz-transform: scale(1.07);
        -ms-transform: scale(1.07);
        -o-transform: scale(1.07);
        transform: scale(1.07);
    }
    .description-container {
        padding-left: 50px;
        width: 90%;
        overflow: hidden;
    }
    .description-container h2{
        color: #ff0000;
        margin-bottom: 25px;
        flex-shrink: initial;
        animation: an 1s ease-out 1 both;
    }
    #text-description{
        width: 100%;
        word-wrap: normal;
    }

    .charTitle{
        font-size: 40px;
        height: 40px;
        animation: an .6s ease-out 1 both;
        display: inline-block;
    }
    .char{
        font-size: 20px;
        height: 20px;
        animation: an 1s ease-out 1 both;
        display: inline-block;
    }

    /*.main-bg{
        -webkit-transition: background-image 0.5s ease-in-out;
        -moz-transition: background-image 0.5s ease-in-out;
        -ms-transition: background-image 0.5s ease-in-out;
        -o-transition: background-image 0.5s ease-in-out;
        transition: background 0.5s ease-in-out;
    }*/

    .beer-container{
        width: 100%;
        height: 500px;
        position: relative;
        border-radius: 5px;
        /*border: 1px solid #333;
        box-shadow: 0px 0px 5px #333, inset 0px 0px 2px #333;*/
    }

    .beer{
        position: absolute;
        opacity: 0;
        -webkit-transition: opacity 1s ease-in-out;
        -moz-transition: opacity 1s ease-in-out;
        -ms-transition: opacity 1s ease-in-out;
        -o-transition: opacity 1s ease-in-out;
        transition: opacity 1s ease-in-out;
    }


    .beer-active{
        opacity: 1;
    }

    @keyframes an{
        from{
            opacity: 0;
            transform: perspective(500px) translate3d(-35px, -40px, -150px) rotate3d(1, -1, 0, 35deg);
        }
        to{
            opacity: 1;
            transform: perspective(500px) translate3d(0, 0, 0);
        }
    }

    @media only screen and (max-width: 685px) {
        .labels {
            display: none;
        }
    }

</style>
<template>
    <div>
    <div class="box">
    <img class="main-bg" :src="background">
         <!--mode="out-in" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutDown"-->
        <v-container grid-list-xl fluid style="padding: 0 !important; margin: 0 !important;">
            <v-row wrap align="center" justify="space-around" class="main-layout">
            <v-col md="8" xs="6">
                <v-row>
                    <v-col style="margin-left: auto">
                        <h2 class="center-header">Cerveza Artesanal <span style="color: #caa873;">Leonera</span></h2>
                        <h4 class="subtitle-1 font-weight-regular font-italic">Cerveza artesanal hecha en codegua</h4>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="10" xs="12" class="labels description-container">
                        <h2 id="text-title" v-bind:style="{ color: selected_color}" class="text--lighten-1 display-2"> {{ selected_name }} </h2>
                        <p id="text-description" class="white--text blockquote"> {{ selected_desc }}</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col shrink xs="6" sm="2" v-for="(cerveza, index) in cervezas" :key="index">
                        <v-card class="label-container" elevation="5">
                            <v-img v-on:click="selectBeer(index)"  width="150" height="auto" aspect-ratio="0.6" :src="cerveza.label"></v-img>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
            <v-col md="4" xs="6">
                <div class="beer-container">
                    <v-img v-for="(cerveza, index) in cervezas" :key="index" :id="'beer' + index"  class="beer" height="100%" width="100%" contain :src="cerveza.background"></v-img>
                </div>
            </v-col>
            </v-row>
        </v-container>
    </div>
    </div>
</template>
<script>

    export default {
        name: "Cerveza",
        data () {
            return {
                selected_background: require('../../public/imagenes/cerveza/blonde1.jpg'),/*require('../../public/imagenes/9816(2).png'),*/
                background: require('../../public/imagenes/9816(2).png'),
                selected_desc : '',
                selected_name: 'Elige tu sabor preferido!',
                selected_color: '#FF0000',
                selected: false,
                beer_opacity: 0,
                cervezas: [
                    {
                      label: require('../../public/imagenes/cerveza/blonde.png'),
                      name: 'Blonde Ale',
                      descripcion: '"Se trata de una cerveza dorada de fermentación alta, moderada intensidad que tiene una complejidad sutil-especiada, un poco de sabor a malta dulce y un final seco."',
                      color: '#e8b83f',
                      background: require('../../public/imagenes/cerveza/blonde1.jpg'),
                    },
                    {
                        label: require('../../public/imagenes/cerveza/belgian.png'),
                        name: 'Belgian',
                        descripcion: '"Esta cerveza ámbar se caracteriza por ser una cerveza potente, con aromas y sabores complejos de malta y lúpulo, de mucho cuerpo y balanceado grado alcohólico, que invita a seguir tomando."',
                        color: '#c5551c',
                        background: require('../../public/imagenes/cerveza/belgian1.jpg'),
                    },
                    {
                        label: require('../../public/imagenes/cerveza/porter.png'),
                        name: 'Porter',
                        descripcion: '"Una cerveza de intenso color negro, notas frutadas y leve ahumado, con un final de trazas de café y chocolate, y pronunciado aroma lupulado"',
                        color: '#dedfeb',
                        background: require('../../public/imagenes/cerveza/porter1.jpg'),
                    },
                    {
                        label: require('../../public/imagenes/cerveza/trapense.png'),
                        name: 'Trapense',
                        descripcion: '"Con una historia que se remonta desde antes del siglo XVII en monasterios trapenses de europa, esta cerveza posee un alto grado alcohólico, con un amargor atenuado, buen cuerpo y pronunciado sabor a fruta madura y cereales."',
                        color: '#74baf5',
                        background: require('../../public/imagenes/cerveza/trapense1.jpg'),
                    },

                ],
            }
        },
        mounted() {
            document.getElementById("beer0").classList.add("beer-active");
            this.selectBeer(0);
        },
        methods: {
            selectBeer(index){
                this.selected_desc = this.cervezas[index].descripcion;
                this.selected_name = this.cervezas[index].name;
                this.selected_color = this.cervezas[index].color;
                /*this.selected_background = this.cervezas[index].background;*/
                let elem = document.getElementsByClassName("beer")[index];
                let elemActive = document.getElementsByClassName("beer-active")[0];
                if( elemActive === elem ){
                    return false;
                }
                if(elem.classList.contains("beer-active") === false){
                    elem.classList.toggle("beer-active");
                }
                if(elemActive && this.selected === true){
                    elemActive.classList.toggle("beer-active");
                }
                this.selected = true;
                this.textAnimation();
            },
            textAnimation(){
                var text = document.getElementById('text-description');
                var textTitle = document.getElementById('text-title');
                let string2 = this.selected_desc;
                let string = this.selected_name;
                var newDom2 = '';
                var newDom = '';
                var animationDelay = 6;
                for(let i = 0; i < string.length; i++)
                {
                    newDom += '<span class="charTitle">' + (string[i] === ' ' ? '&nbsp;' : string[i])+ '</span>';
                }

                for(let i = 0; i < string2.length; i++)
                {
                    newDom2 += '<span class="char">' + (string2[i] === ' ' ? '&nbsp;' : string2[i])+ '</span>';
                }

                textTitle.innerHTML = newDom;
                text.innerHTML = newDom2;
                var length = textTitle.children.length;
                var length2 = text.children.length;

                for(let i = 0; i < length; i++)
                {
                    textTitle.children[i].style['animation-delay'] = animationDelay * i + 'ms';
                }
                for(let i = 0; i < length2; i++)
                {
                    text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
                }
            }
        }
    }
</script>
