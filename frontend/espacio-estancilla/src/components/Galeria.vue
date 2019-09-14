<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container>
    <v-carousel v-if="placeholder">
        <v-carousel-item v-for="(color, i) in colors" :key="color">
            <v-sheet :color="color" height="100%" tile>
                <v-layout align-center fill-height justify-center>
                    <div class="display-3">Slide {{ i + 1 }}</div>
                </v-layout>
            </v-sheet>
        </v-carousel-item>
    </v-carousel>
    <v-carousel id="carousel">
        <v-carousel-item v-if="fotos.length === 0">
            <v-img :src="require('../../public/imagenes/placeholder-image.png')"></v-img>
        </v-carousel-item>
        <v-carousel-item v-for="(foto, index) in fotos" :key="index">
            <v-img :src="require('../../public/imagenes/' + root + '/' + foto)" v-bind:alt="foto" @error="setPlaceholder">
                <template v-slot:placeholder>
                    <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                    >
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                </template>
            </v-img>
        </v-carousel-item>-->
    </v-carousel>
        <!--<div v-if="editable" class="large-12 medium-12 small-12 cell">
            <label>File
                <input type="file" id="file" ref="file" v-on:change="upload"/>
            </label>
            <button v-on:click="submit">Submit</button>
        </div>-->
        <div v-if="editable">
            <v-file-input v-model="files" display-size counter small-chips accept="image/*" label="Nueva foto"></v-file-input>
            <v-btn v-on:click="upload">Subir</v-btn>
        </div>
    </v-container>
</template>
<script>
    import axios from 'axios';

    let config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    };

    export default {
        props: [ 'editable', 'height', 'placeholder', 'fotos', 'root' ],
        data () {
            return {
                file: '',
                files: [],
                file_present: false,
                parsedPhotos: []
            }
        },
        methods: {
            setPlaceholder(e){
              e.target.src = require('../../public/imagenes/placeholder-image.png');
            },
            upload(){
                this.file = this.$refs.file.files[0];
                console.log(this.file);
            },
            submit(){
                let formData = new FormData();
                formData.append('file', this.file);
                axios.post('http://127.0.0.1:8090/upload/deportes/1', formData, config)
                    .then( response => {
                        if(response.status === 200){
                            console.log("Recibido 200");
                            console.log(response.data)
                        } else {
                            console.log("Recibido " + response.status);
                        }
                    }).catch( error => {
                        console.log("Error");
                        console.log(error);
                })
            },
            /*submit(){
                let formData = new FormData();
                if (this.files !== []){
                    for( let i = 0; i < this.files.length; i++ ){
                        let file = this.files[i];
                        formData.append('file', file);
                    }
                } else{
                    alert("No ha seleccionado ningun archivo!");
                    return false;
                }
                axios.post('http://127.0.0.1:8080/upload/deportes/1', formData, config)
                    .then( response => {
                        if(response.status === 200){
                            console.log("Recibido 200");
                            console.log(response.data)
                        } else {
                            console.log("Recibido " + response.status);
                        }
                    }).catch( error => {
                    console.log("Error");
                    console.log(error);
                })
            },
            loadData() {
                let self = this;
                axios.get('http://127.0.0.1:8090/download/deportes/1', config)
                    .then( response => {
                        if(response.status === 200){
                            console.log("Recibido 200");
                            console.log(response.data);
                            self.files = response.data;
                        } else {
                            console.log("Recibido " + response.status);
                        }
                    }).catch( error => {
                    console.log(error);
                });
                console.log(this.files);
            }*/
        },
    }
</script>
