<template>
    <v-footer padless id="footer">
        <v-card icon flat tile width="100%" height="auto" class="text-center" v-bind:style="{ backgroundColor: footer_background}">
            <v-card-text>
                <v-btn v-for="icon in icons" :key="icon.icon" class="mx-4">
                    <v-icon size="25px">{{ icon.icon }}</v-icon>
                </v-btn>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text v-bind:style="{ color: footer_color}">
                {{ new Date().getFullYear() }} - Espacio Estancilla
            </v-card-text>
        </v-card>
    </v-footer>
</template>
<style>
</style>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            footer_color: '#edce63',
            footer_background: '#2e347f',
            icons: [
                { icon: 'mdi-facebook', link: '/deportes'},
                { icon: 'mdi-instagram', link: '/eventos'},
                { icon: 'mdi-whatsapp', link: '/sangucheria'},
                { icon: 'mdi-email', link: '/sangucheria'},
            ]
        }
    },
};
</script>
